---
title: Changelog
description: What's new in the latest version of FormKit?.
---

# Changelog

## 1.0.0-beta.2

### February 3, 2022

#### 🎉 New features

- New `@formkit/nuxt` package is a full featured [Nuxt 3 module](/essentials/installation#nuxt) that makes using FormKit with [Nuxt 3](https://v3.nuxtjs.org/) as simple as possible!
- `defaultConfig` now includes a new package `@formkit/dev` which decodes FormKit’s error codes to helpful console messages (no action required) ([#56](https://github.com/formkit/formkit/issues/56)).
- The `preserve` key now applies to all descendants ([#53](https://github.com/formkit/formkit/issues/53)).
- Exports all the text formatter functions in the `@formkit/i18n` package ([#54](https://github.com/formkit/formkit/issues/54)).
- Adds 🇳🇱 Dutch language support (thanks @arjendejong12).
- Adds 🇭🇷 Croatian language support (thanks @antemarkic).
- Improves 🇩🇪 German language support (thanks @tosling).

#### 📙 Documentation

- New installation documentation now that the repository is public and the `@formkit` organization is publishing on npm’s registry.
- Nuxt installation documentation
- Improved internationalization documentation for [selective message overrides](/essentials/internationalization#overriding).

#### 🐛 Bug fixes

- Fixes a bug that caused multi-select checkboxes to not display the current value when set from parent node and when using `options` prop that is stored in an external variable ([#55](https://github.com/formkit/formkit/issues/55))
- Fixed a bug that caused the `placeholder` on select inputs to be removed if something caused the input to re-render ([#52](https://github.com/formkit/formkit/issues/52)).
- Fixed the select placeholder color ([#51](https://github.com/formkit/formkit/issues/51))

## 1.0.0-beta.1

### January 28, 2022

#### 🎉 New features

- Forms are automatically disabled when an async submit handler is pending ([#44](https://github.com/formkit/formkit/issues/44)).
- Added a new prop `submit-behavior` to opt-out of the new automatically disabled forms.
- Exports the Vue to FormKit bindings plugin as `bindings` in the `@formkit/vue` package.
- The type `button` and `submit` are automatically ignored.
- Introduces a new `messages` key to the `defaultConfig` to allow partial overrides to locales. This allows selective message overrides for already registered locales ([#42](https://github.com/formkit/formkit/issues/42)).
- The schema compiler now supports "undefined" as a valid output (in other words `$: undefined` would output the value `undefined` instead of the string "undefined").
- Adds 🇮🇱 Hebrew locale (thanks @Hepi420)
- Adds 🇨🇳 Chinese locale (thanks @myleslee)

#### 🐛 Bug fixes

- Fixed an issue that caused checkboxes with `options` to not properly hydrate when re-populated from a `group`, `list`, or `form` ([#45](https://github.com/formkit/formkit/issues/45)).
- Fixed an issue that caused checkboxes with `options` to not display incorrectly when missing a the label prop ([#41](https://github.com/formkit/formkit/issues/41)).
- Significantly improved TypeScript support for “synthetic” props ([#43](https://github.com/formkit/formkit/issues/43)).

## 1.0.0-alpha.5

### January 20, 2022

#### ⚠️ Breaking changes

- Changes the `validation-behavior` prop on the `<FormKit>` component to `validation-visibility`.
- Changes the `schema` prop on the `<FormKit>` component to [`sections-schema`](/essentials/inputs#sections-schema).

#### 🎉 New features

- Adds the native [`file` input type](/inputs/file) with support for some value-added features:
  - Display only re-population.
  - Drag and drop.
  - Input clearing.
- Adds the [`createInput`](/advanced/custom-inputs#using-createinput-to-extend-the-base-schema) helper function to make custom inputs easy to write.
- New `incomplete-message` prop allows inline customization (or disabling) of the message displayed by a form when it attempts to submit and all its inputs are not valid.
- Updates the `defaultConfig` to accept custom inputs.
- Adds a prefix section key which allows content to be injected immediately before an input element.
- Adds a suffix section key which allows content to be injected immediately after an input element.
- 🇷🇺 Russian locale (thank you [@andreimakushkin](https://github.com/andreimakushkin)!)
- Refactors Genesis theme to use much more robust CSS variable structure.
- Adds [a new feature](/advanced/schema#raw-values) to schemas that allows users to prefix `props` and `attrs` properties with `__raw__` to pass the raw value instead of its parsed result ([#36](https://github.com/formkit/formkit/issues/36)).

#### 📙 Documentation

- New [create a custom input](/guides/create-a-custom-input) guide.
- New advanced [custom input documentation](/advanced/custom-inputs) page.
- "Composition keys" will now be referred to as "[Section keys](/essentials/inputs#sections)".
- Adds documentation on [`plugin.library`](/advanced/core#library) — the mechanism plugins use to define new input types.
- Interactive code editor for examples now supports multiple files.
- In the FormKit Playground you can add new files and import them into each other. The FormKit Playground supports `.vue`, `.js`, `formkit.config.js` and `tailwind.config.js` files.
- The FormKit Playground is now located at [https://formkit.com/playground](htpps://formkit.com/playground) and old https://formkit.com/playground/vue playgrounds are deprecated.

#### 🐛 Bug fixes

- Fixes a bug that prevented the incomplete message from displaying on forms ([#29](https://github.com/formkit/formkit/issues/29)).
- Fixes TypeScript typings for `@submit` and `@submit-raw` events.
- Fixes the order of numbers in the `length` and `between` validation messages to always place the lower number first ([#35](https://github.com/formkit/formkit/issues/35)).
- Fixes an issue ([#32](https://github.com/formkit/formkit/issues/32))with select lists where the `:options` prop would not accept number values.

## 1.0.0-alpha.4

### December 16, 2021

#### 🎉 New features

- New [validation rule “hints”](/essentials/validation#rule-hints) — modifiers that change a validation rule’s behavior. Supported hints allow you to:
  - Run a rule when the field is empty.
  - Force a rule to run even when previous rules are failing.
  - Debounce a validation rule.
  - Make a validation rule optional.
- When an input is inside a form and unmounted (such as a `v-if`), it now removes it’s value from the form data and de-registers its [core node](/advanced/core#node).
- New `preserve` prop allows inputs to _not_ remove their data from groups, lists, and forms when they are removed.

#### 🐛 Bug fixes

- Fixed an issue that caused numeric value radio and checkbox options to render incorrectly.
- Fixed a bug that caused the `placeholder` to not render when the prop came _after_ the `options` prop.
- Fixed a bug that caused the delay value to not be respected when set using ancestor config.

## 1.0.0-alpha.3

### December 13, 2021

#### 🎉 New features

- Form error handling is here. You can now set input errors on an entire form, group or list with the `input-errors` prop or the `$formkit.setErrors()` methods. Read more about it [on the form docs](/essentials/forms#error-handling).
- New `$formkit.setLocale()` reactively changes the language of all displayed messages.
- Adds 🇫🇷 French and 🇩🇪 German locales (thank you [@HoreKk](https://github.com/HoreKk) and [@digitalkaoz](https://github.com/digitalkaoz))
- Adds new `rootConfig` proxy object that is used to store global base config and prop values (significant refactor of configuration system).
- Added [ledger](/advanced/core#ledger) dependency tracking to instances of `FormKitObservedNode`.
- The submit button on forms now use the locale for the default “Submit” label.
- New `child` [node event](/advanced/nodes) emitted when a parent has a child added to it.
- The `length` rule can now take max/min arguments in either order `length:15,5` or `length:5,15` evaluate the same.
- Adds a new `getNode` function to directly access a [FormKit node](/advanced/core#node) using the composition API.
- Improves the `@formkit/theme` css [import location](/essentials/styling).

#### 🐛 Bug Fixes

- Fixed a bug that caused children of `list` inputs to sometimes throw an exception when display validation errors.
- Improved several of the validation error messages.
- Fixed an issue with select inputs prevented raw `node.input()` calls to not trigger reactivity in Vue.

## 1.0.0-alpha.2

### November 30, 2021

#### 🎉 New features

- A new `$formkit` schema shorthand for using FormKit inputs in a schema ([Issue #15](https://github.com/formkit/formkit/issues/15)).
- New `disabled` prop on form, list, and group inputs automatically disables all child inputs ([Issue #16](https://github.com/formkit/formkit/issues/16)).
- New `submitAttrs` prop on forms allows you to pass attributes to the form’s submit button.
- Added a new universal `ignore` prop that prevents an input’s data from being used in a form.

#### 🐛 Bug fixes

- Fixed an issue that prevented schemas from rendering expressions when used inside the `children` property of a FormKit component. ([Issue #21](https://github.com/formkit/formkit/issues/21)).
- Added a check in case a `rootClasses` function incorrectly returns `undefined` ([Issue #17](https://github.com/formkit/formkit/issues/17)).
- Fixed a bug that caused a form's submit button to pollute the form’s data object with a `submit_x` property ([Issue #22](https://github.com/formkit/formkit/issues/22)).
- Fixed a bug that caused `$cmp` schema nodes to fail to remount if the schema’s root object was reset causing a full re-parse ([Issue #14](https://github.com/formkit/formkit/issues/14)).
