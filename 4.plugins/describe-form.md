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

Any FormKit node works — get it with `getNode(id)`, or from a ref:

::FrameworkOnly{framework="vue"}
```vue
<script setup>
import { ref } from 'vue'
import { describeForm } from '@formkit/addons'

const signup = ref()
const describe = () => describeForm(signup.value.node)
</script>

<template>
  <FormKit ref="signup" type="form">…</FormKit>
</template>
```
::

::FrameworkOnly{framework="react"}
```jsx
import { useRef } from 'react'
import { FormKit } from '@formkit/react'
import { describeForm } from '@formkit/addons'

export function Signup() {
  // In React, the <FormKit> ref is the node itself.
  const signup = useRef(null)
  const describe = () => describeForm(signup.current)
  return <FormKit ref={signup} type="form">…</FormKit>
}
```
::

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

## Expose forms to browser agents (WebMCP)

::Callout
---
type: "warning"
label: "Experimental"
---
`createWebMCPPlugin()` is **experimental** (`@formkit/addons` 2.9.0+). It targets [WebMCP](https://github.com/webmachinelearning/webmcp), a draft browser API that is still changing, so this plugin's options and tool shapes may change in minor releases.
::

[WebMCP](https://developer.chrome.com/docs/ai/webmcp/imperative-api) lets a page hand **tools** directly to an AI agent running in the browser, through `document.modelContext` (older drafts use `navigator.modelContext`). With `createWebMCPPlugin()`, every FormKit form registers tools built on `describeForm()` and `fillForm()`. An agent can then read the form, fill it in, and (if you allow it) submit it through the real FormKit node, without scraping the DOM.

::FrameworkOnly{framework="vue"}
```js
// formkit.config.ts
import { defaultConfig } from '@formkit/vue'
import { createWebMCPPlugin } from '@formkit/addons'

export default defaultConfig({
  plugins: [
    createWebMCPPlugin({
      submit: true, // also register a submit tool (off by default)
    }),
  ],
})
```
::

::FrameworkOnly{framework="react"}
```jsx
// formkit.config.react.jsx
import { defineFormKitConfig } from '@formkit/react'
import { createWebMCPPlugin } from '@formkit/addons'

export default defineFormKitConfig({
  plugins: [createWebMCPPlugin({ submit: true })],
})
```
::

Every `type="form"` registers its tools when it is created and unregisters them when it is destroyed. If the browser has no `modelContext`, for example because it doesn't support WebMCP or the code is running during SSR, the plugin does nothing.

### WebMCP tools

`<id>` is the form's `id`, lowercased, with every character outside `[a-z0-9_]` replaced by `_`. For example, `id="sign-up"` becomes `formkit_fill_sign_up`. Give each form a stable, unique `id`; if two forms produce the same tool name, only the first one is registered.

| Tool | Arguments | Does |
| --- | --- | --- |
| `formkit_describe_<id>` | none | Returns `describeForm(form, { values })`. Marked `readOnlyHint`. |
| `formkit_fill_<id>` | `{ values, strict? }` | Runs `fillForm(form, values, { strict })` and returns its result. On a `strict` failure it returns `{ error }` instead of throwing. |
| `formkit_submit_<id>` | none | Only registered when `submit: true`. Submits through the form's normal handler (validation runs first, so an invalid form is not submitted) and returns `{ valid, errors, submitted, submitError? }`. Marked `consequentialHint`. |

The `fill` tool's `inputSchema` is generated from the form. `values` has one property per enabled input, keyed by its `describeForm()` address (`email`, `address.city`). Each property has a JSON type (`string`, `number`, `boolean`, or `array` for multi-value inputs), an `enum` built from static option values, and a description made from the label, help text, and rules. The schema is regenerated when fields are added or removed, or when their options, labels, or disabled state change. Hidden inputs and disabled inputs are left out of the schema.

### WebMCP options

```ts
createWebMCPPlugin({
  forms: (node) => node.props.id !== 'internal', // which forms to expose
  values: false,      // include current values in describe results
  submit: false,      // register formkit_submit_<id>
  wrapResult: undefined,
  modelContext: undefined, // defaults to document/navigator.modelContext
})
```

| Option | Default | Description |
| --- | --- | --- |
| `forms` | — | `(node) => boolean`. Return `false` to skip a form. |
| `values` | `false` | Include current values in the `describe` result. `password` and `hidden` values are always redacted. |
| `submit` | `false` | Register a `formkit_submit_<id>` tool. |
| `wrapResult` | — | `(result, kind) => unknown`. Transforms each tool result. By default the plain JSON object is returned, as the current WebMCP draft expects. Pass the exported `webMCPTextResult` to return MCP-style `{ content: [{ type: 'text', text }] }` instead, for polyfills or agents that expect that shape. |
| `modelContext` | `document.modelContext ?? navigator.modelContext` | The object tools are registered with. Pass a polyfill or a test double here. |

To opt out a single form, add `data-agent="off"`:

```html
<FormKit type="form" id="payment" data-agent="off">…</FormKit>
```

### WebMCP safety

- **Agents act as the user.** Anything a tool does, the agent can do without the user touching the page. Only expose forms you'd be comfortable having an agent fill in, and opt out the rest with `data-agent="off"` or `forms`.
- **Submitting is off by default.** With `submit: true`, submissions still go through validation and your `onSubmit` handler, just as when a user submits. The tool is marked `consequentialHint` so browsers can ask the user to confirm, but that's up to the browser. Enforce anything important (authentication, CSRF, rate limits, confirmations for payments) on the server.
- **Values stay private by default.** `describe` doesn't return values unless you set `values: true`, and `password` and `hidden` values are never returned. `fill` results never echo values back.
- **Validation still applies.** `fill` writes through `node.input()`, so validation, dirty state, and events behave as if a user typed. The browser doesn't validate tool arguments against `inputSchema`, so `fillForm()` reports any unknown addresses and unmatched options in its result.
- **Hidden inputs can't be filled.** `fill` refuses to write `hidden` inputs (it returns `{ error }` and writes nothing), so an agent can't overwrite tokens or ids your app sets. Disabled inputs are skipped, as with `fillForm()`. Password inputs *can* be filled; opt the form out if you don't want that.
