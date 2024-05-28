---
title: Save to LocalStorage
description: Save unsubmitted user form input to localStorage to prevent data loss.
---

# LocalStorage Plugin

Using the `createLocalStoragePlugin` function from `@formkit/addons`, you can easily save unsubmitted user form inputs to localStorage which will be restored on page load. This is great for preventing data loss in the event a user's browser crashes, tab is closed, or other unforeseen issue causes your application to reload before the user can submit their data.

LocalStorage data is automatically cleared when a form `submit` is called.

## Installation

To use this plugin with FormKit, install `@formkit/addons`:

```bash
yarn add @formkit/addons
```

Once you've installed the addons package, you'll need to register the plugin with FormKit. The `createLocalStoragePlugin` has options you can configure:

- `prefix` - The prefix assigned to your localStorage key. Defaults to `formkit`.
- `key` - An optional key to include in the localStorage key name, useful for keying data to a particular user. 
- `control` - An optional field name for a field in your form you would like to use to enable saving to localStorage when `true`. The field value must be a boolean.
- `maxAge` - The time (in milliseconds) that the saved localStorage should be considered valid. Defaults to 1 hour.
- `debounce` - The debounce to apply to saving data to localStorage. Defaults to `200`ms
- `beforeSave`: — An optional async callback that recieves the form data. Allows modification of form data before saving to localStorage.
- `beforeLoad`: — An optional async callback that recives the form data. Allows modification of the localStorage data before applying to the form.

```js
// formkit.config.js
import { defaultConfig } from '@formkit/vue'
import { createLocalStoragePlugin } from '@formkit/addons'

const config = defaultConfig({
  plugins: [
    createLocalStoragePlugin({
      // plugin defaults:
      prefix: 'formkit',
      key: undefined,
      control: undefined,
      maxAge: 3600000, // 1 hour
      debounce: 200,
      beforeSave: undefined,
      beforeLoad: undefined
    }),
  ],
})

export default config
```

## Usage

To enable saving to localStorage add the `use-local-storage` to your FormKit `form`. The localStorage key will be your provided `prefix` (default is `formkit`) and your form `name` eg. `formkit-contact`.

### Basic example

::Example
---
name: "Save to LocalStorage"
file: [
'_examples/local-storage/basic/basic.vue',
'_examples/local-storage/basic/formkit.config.js'
]
---
::

That's it! Your form data will now be saved on every `commit` event that the `form` receives. It will remain valid until the `maxAge` set in your plugin config, and the localStorage data is cleared when the `submit` event fires on the target form.

### Restoring values on failed submit

When a user submits your form the matching localStorage entry for the form is deleted. Before deletion the value of the localStorage entry is stored in-memory and can be recovered by calling the `node.restoreCache()` method in your submit handler. This is useful for restoring user-entered data in the event that you have a failure in your submission process such as a server error.

::Example
---
name: "Save with Key"
file: [
'_examples/local-storage/restore/restore.vue',
'_examples/local-storage/restore/formkit.config.js'
]
---
::

### With unique keys

If you are saving data to localStorage in the context of an app where multiple users might share the same device you can provide a `key` that is unique to the user and each user will then have their own localStorage entry.

::Example
---
name: "Save with Key"
file: [
'_examples/local-storage/key/key.vue'
]
---
::


### With a control

You can allow a user to opt-in to saving their form data to localStorage by supplying the name of a field that returns a `boolean` value. When `true`, values will be saved.

::Example
---
name: "Save with Control"
file: [
'_examples/local-storage/control/control.vue'
]
---
::

### With data modification

Using the `beforeSave` and `beforeLoad` async callbacks you can modify the data that is saved to localStorage. This can be useful if you want to run some sort of obfuscation funciton or send the data to your backend to encrypt it. In this examle, we obfuscate the data by base64 encoding the form values.

Note that the form is disabled when loading data from localStorage until our `beforeLoad` callback resolves.

::Example
---
name: "Save with Modification"
file: [
'_examples/local-storage/modification/modification.vue'
]
---
::

::Callout
---
type: "warning"
label: "Clearing user data"
---
`localStorage` form information should be considered transient and ultimately stored in a database. We recommend clearing `localStorage` keys related to form data when a user logs out of your applications. You can do this by looping over `Object.entries(localStorage)` and removing all `localStorage` entries that start with <code>${prefix}-${id}</code> from your plugin configuration.
::
