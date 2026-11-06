---
title: Describe a form (for agents & tests)
description: Get a JSON description of any FormKit form — fields, labels, rules, options and errors — for AI agents, generated tests, and debugging.
---

# Describe Form

`describeForm()` from `@formkit/addons` returns a plain, JSON-serializable description of a form: every field's name, address, type, label, validation rules, options, validity and error messages. It reads FormKit's node tree — not the DOM — so it works the same way in Vue and React, and it's ideal for:

- **AI agents and tools** that need to know what a form wants before filling it in (pair it with `node.input()` and `submitForm()`).
- **Generated tests** and fixtures.
- **Documentation** and **debugging** of large or schema-driven forms.

::Callout
---
type: "info"
label: "Version"
---
`describeForm()` is available in `@formkit/addons` 2.3.0 and later.
::

## Installation

```bash
npm install @formkit/addons
```

`describeForm` is a plain function (not a plugin), so there is nothing to register — import it wherever you need it.

## Usage

```ts
import { getNode } from '@formkit/core'
import { describeForm } from '@formkit/addons'

const form = getNode('signup')!
const description = describeForm(form)
```

For a form with an email, a password, and a select, the result looks like this:

```json
{
  "name": "form_1",
  "address": "",
  "type": "form",
  "nodeType": "group",
  "required": false,
  "rules": [],
  "valid": false,
  "errors": [],
  "children": [
    {
      "name": "email",
      "address": "email",
      "type": "email",
      "nodeType": "input",
      "label": "Email",
      "required": true,
      "rules": [{ "name": "required", "args": [] }, { "name": "email", "args": [] }],
      "valid": false,
      "errors": ["Email is required."]
    },
    {
      "name": "plan",
      "address": "plan",
      "type": "select",
      "nodeType": "input",
      "label": "Plan",
      "required": false,
      "rules": [],
      "options": [
        { "label": "Free", "value": "free" },
        { "label": "Pro", "value": "pro" }
      ],
      "valid": true,
      "errors": []
    }
  ]
}
```

### Driving a form

Every field includes an `address` relative to the node you described, so you can get back to the node with `at()`:

```ts
const form = getNode('signup')!
for (const field of describeForm(form).children ?? []) {
  if (field.type === 'email') form.at(field.address)?.input('jane@example.com')
}
```

### Filling a form with `fillForm()`

The write side of `describeForm()`. `fillForm()` sets values by address (or nested objects/arrays), accepts option **labels** for inputs with options, waits for the form to settle (debounces and async validation), and reports what happened (`@formkit/addons` 2.4.0+):

```ts
import { getNode } from '@formkit/core'
import { fillForm } from '@formkit/addons'

const result = await fillForm(
  getNode('signup')!,
  { email: 'ada@example.com', plan: 'Pro', 'address.city': 'Lisbon' },
  { submit: true }
)
```

```json
{
  "valid": true,
  "settled": true,
  "submitted": true,
  "fields": [{ "address": "email", "valid": true, "errors": [] }],
  "invalid": [],
  "errors": [],
  "unknown": [],
  "unmatched": [],
  "skipped": []
}
```

- **Addresses** are the `address` values `describeForm()` returns (`users.0.name`), or nested objects/arrays that mirror groups and lists. They're matched by literal child names — existing list items can be filled, but new list items (repeater rows) aren't created.
- **Options**: give an option's value or its label (case-insensitive; values win, first match wins). A value that matches no option is **not written** and is listed in `unmatched` (`no-such-option`). If the options load asynchronously, the value is written and flagged `options-not-loaded`.
- **Disabled** inputs and non-input targets are listed in `skipped`, not written.
- `invalid` lists every input, group or list with errors — not just the ones you filled — including server errors set with `setErrors()` (for example from `onSubmit`). `errors` has messages on the form itself. `valid` is `false` if anything is blocking **or** has an error message.
- `submit: true` submits through the form's normal handler. `submitted` is `true` only if `onSubmit` ran and completed; a thrown/rejected `onSubmit` is reported as `submitError`.
- `timeout` (default `5000` ms) bounds the wait for validation *and* for `onSubmit`; `settled: false` means it ran out (and a submit is skipped). In tests with fake timers, advance timers while awaiting `fillForm()`.
- `submitted` is detected through the form's `submit` hook: a custom submit middleware that never calls `next()` will report `submitted: false`.
- `strict: true` throws — before writing anything — on unknown addresses, unmatched options, or skipped fields.

## Options

```ts
describeForm(node, {
  values: true,       // include current values (default: false)
  redact: ['email'],  // extra input types to redact (added to the defaults)
  errors: 'visible',  // only errors currently shown to the user (default: 'all')
})
```

- `values` — Values are **left out by default**, so a description can be logged or sent to an agent without leaking user data. Set `values: true` to include them.
- `redact` — Extra input types whose values are never included, even with `values: true`. They're **added** to the defaults — `password` and `hidden` (CSRF tokens and the like) are always redacted. Redacted fields are marked `redacted: true`. Pass `redact: false` to include everything.
- `errors` — `'all'` (default) includes every blocking validation and error message; `'visible'` includes only messages the user can currently see, respecting each input's `validation-visibility`.

## What's included

| Property | Description |
| --- | --- |
| `name` | The node's name (its key in the parent's value). |
| `address` | Dot path from the described node, e.g. `users.0.email`. Empty for the described node itself. |
| `type` | The input type (`text`, `select`, `form`, `repeater`, …). |
| `nodeType` | `input`, `group`, or `list`. |
| `label`, `help`, `placeholder` | When set. |
| `disabled`, `multiple` | Present (and `true`) when set. |
| `required` | Whether the `required` rule is applied. |
| `rules` | Validation rules with their arguments. |
| `options` | Options with their real values (option groups are flattened, with each option's `group` label; disabled options are flagged). |
| `optionsLoader` | `true` when options are loaded by a function. The function is never called; options it has already loaded are included. |
| `valid` | `true` when neither the node nor its descendants have blocking messages. |
| `errors` | Error message strings for the node. |
| `value` | The current value, when `values: true` and not redacted. |
| `children` | Descriptions of child nodes, for groups and lists. |

The output is JSON-serializable: dates become ISO strings, regular expressions their source (e.g. `"/^\\d+$/"`), Maps and Sets arrays, and Files `{ name, size, type }`. Functions and circular references are dropped, and other non-plain objects are copied as plain objects, so some detail can be lost.
