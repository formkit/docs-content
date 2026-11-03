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

## Options

```ts
describeForm(node, {
  values: true,       // include current values (default: false)
  redact: ['password'], // input types whose values are never included
  errors: 'visible',  // only errors currently shown to the user (default: 'all')
})
```

- `values` — Values are **left out by default**, so a description can be logged or sent to an agent without leaking user data. Set `values: true` to include them.
- `redact` — Input types whose values are never included, even with `values: true`. Defaults to `['password']`; redacted fields are marked `redacted: true`. Pass `redact: []` to include everything.
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
| `options` | Static options (option groups are flattened, disabled options are flagged). |
| `optionsLoader` | `true` when options are loaded by a function. The function is never called. |
| `valid` | `true` when neither the node nor its descendants have blocking messages. |
| `errors` | Error message strings for the node. |
| `value` | The current value, when `values: true` and not redacted. |
| `children` | Descriptions of child nodes, for groups and lists. |

The output is always JSON-serializable: dates become ISO strings, and functions or circular references are dropped.
