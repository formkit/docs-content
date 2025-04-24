---
title: Typebox Plugin
description: Use your Typebox schema to validate your FormKit forms.
---

# Typebox Plugin

:PageToc

With the `@formkit/typebox` package you can easily enable validation of your FormKit forms with your Typebox schema. This provides a convenient way to have isomorphic types and ensure that your front-end and back-end are using the same validation rules.

When validating against a Typebox schema all validation errors will be mapped to their corresponding inputs, show or hide based on your form / input's `validation-visibility` prop, and prevent submission when form data does not pass validation with Typebox.

## Installation

To use this plugin with FormKit, install `@formkit/typebox`:

```bash
yarn add @formkit/typebox
```

Once you've installed the `@formkit/typebox` package, you'll need to register the plugin on a per-form basis and each form that requires validation with a Typebox schema will create a new instance of the plugin using the `createTypeboxPlugin` function.

## Usage

To use the Typebox plugin we need to import the `createTypeboxPlugin` function from `@formkit/typebox`, call the `createTypeboxPlugin` function to create receive our `typeboxPlugin` and `submitHandler`, and then add them both to our FormKit form.

The `createTypeboxPlugin` function takes two arguments:

- `typeboxSchema`: The Typebox schema that you would like to use to validate against the form.
- `submitCallback`: a function you would like to run once validation has succeeded on your form — this is where you would handle posting your data to your backend or other submit-related tasks. You form data will be provided with full TypeScript support based on your Typebox schema.

The `createTypeboxPlugin` will return a tuple of:

- `typeboxPlugin`: The plugin that should be applied to your target form's `plugins` prop.
- `submitHandler`: The submit handler that should be attached to your form's `@submit` action. When the form data passes validation of your provided Typebox schema your `submitCallback` will fire.

### For form validation

Here is an example of using a Typebox schema to validate a FormKit form. It's important that your FormKit input `name`s match the expected values for your Typebox schema.

::Example
---
name: 'Typebox Validation'
file: [
'/\_content/_examples/typebox/validation.vue',
]
import-map: '/\_content/_examples/typebox/importMap.json'
---
::

Now your FormKit form will use your Typebox Schema for validation — and all messages will adjacent to each matching FormKit just live native FormKit validation!

### In addition to FormKit validation

Using Typebox to validate your form doesn't mean you have to forgo using FormKit's built-in validation messages. If you add FormKit validation to your FormKit inputs then Typebox validation errors will only show if all FormKit validations have been satisfied and there are remaining unsatisfied Typebox validations.

This has a few benefits:

- You can use FormKit's built-in rules such as `confirm` which don't have easy-to-use equivalents within Typebox.
- Your messages can be translated to one of the many existing languges in `@formkit/i18n` without any additional effort on your part.
- The built-in FormKit validation messages are written to be contextually aware of your input names and knowing that they will be attached directly to their corresponding inputs — so they are more precise and easier to understand than their generic Typebox counterparts.

Here's the same form as before, but now using FormKit validation messages in addition to Typebox schema validation.

::Example
---
name: 'Typebox Validation with FormKit Validation'
file: [
'/\_content/_examples/typebox/with-formkit-validation.vue',
]
import-map: '/\_content/_examples/typebox/importMap.json'
---
::

### For setting form errors

If you need to set errors on your form you can do so with the `node.setTypeboxErrors` function that is made available by the `typeboxPlugin`. The `node.setTypeboxErrors` function accepts a Typebox `ValueErrorIterator` and will map the errors to each input. Any non-matching errors will be shown as form-level errors.

::Example
---
name: 'Typebox Errors'
file: [
'/\_content/_examples/typebox/errors.vue',
]
import-map: '/\_content/_examples/typebox/importMap.json'
---
::
