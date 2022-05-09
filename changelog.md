---
title: Changelog
description: What's new in the latest version of FormKit?.
---

# Changelog

## 1.0.0-beta.7

### [TK] Date

#### ⚠️Breaking changes

- The `update:model-value` event will now only be emitted when using the `v-model` directive.
- The `input` event is now debounced to reduce the amount of noise being emitted. You can use the new `input-raw` to listen to every input event.

#### 🎉 New features

- Now `checkbox`, `radio`, and `select` inputs (ones that use `:options`) can now use any data type as their value like numbers, objects, or even `null` ([#85](https://github.com/formkit/formkit/issues/85)).
- Adds a new `node.addProps` function for adding new props in custom plugins.
- Adds new `message` hook for modifying messages as they are being set.
- Adds a new `index` prop that allows inputs to be injected at a given index on a parent `list` type.
- Adds a new core event `reset` — emitted after a form is reset.
- Adds a new `inputRaw` event to the `<FormKit>` component that is emitted for every core node `commit` (this can be quite frequent)
- The `<FormKit>` component’s `input` event is now debounced, meaning it emits much less noise.
- Exports all input feature functions `import { features } from '@formkit/inputs'`.
- Adds a new `input-raw` event to the `<FormKit>` component which is emitted for every single input event in an input, list, group, or form (very noisy).
- Adds new core node event `domInputEvent` which has the native HTML `Event` object as the payload.
- Adds 🇸🇪 Swedish language.
- Adds 🇸🇮 Slovenian language.
- Adds 🇷🇴 Romanian language.
- Adds 🇯🇵 Japanese language.
- Improves 🇵🇱 Polish language.

#### 🐛 Bug fixes

- 🔥 Dramatically improves `v-model` performance and reliability for deeply nested structures like forms with list and groups.
- Fixes an issue that caused `null` values to throw errors ([#151](https://github.com/formkit/formkit/issues/151))
- Fixed a bug that caused `validation-visibility` to not change when updated reactively ([#159](https://github.com/formkit/formkit/issues/159))
- Fixes a bug that caused the `preserve` keyword to block some form submissions ([#145](https://github.com/formkit/formkit/issues/145))
- Fixes TypeScript typing for the `@formkit/tailwind` configuration ([#143](https://github.com/formkit/formkit/issues/143))
- Fixes a bug that caused single checkboxes with an object as the `on-value` to not be set their initial value when using the `:value` prop.
- Fixes a bug that caused validation rules to not be updated when the label prop changed ([#170](https://github.com/formkit/formkit/issues/170))
- Fixes a bug that caused incorrect default selection on select lists with an explicit `multiple="false"` attribute and a placeholder ([#148](https://github.com/formkit/formkit/issues/148)).
- Fixes a bug that caused the `classes` prop to not react to Vue’s reactivity when using nested refs ([#155](https://github.com/formkit/formkit/issues/155)).
- Fixes a bug that prevented submit buttons from being disabled when applied using `disabled` attribute on the form without specifying `disabled="true"` ([#215](https://github.com/formkit/formkit/issues/215))

## 1.0.0-beta.6

### March 10, 2022

#### 🎉 New features

- Adds new `alpha_spaces` validation rule ([#83](https://github.com/formkit/formkit/issues/83))
- Adds 🇨🇿 Czech (thanks @dfridrich)
- Adds <img src="/img/frisian_flag.svg" alt="Frisian flag" class="rare-flag"> Frisian (thanks @arjendejong12)

#### 📙 Documentation

- New [configuration documentation](/advanced/configuration) that explains the relationship of node options, config, and props.

#### 🐛 Bug fixes

- Fixes a bug that caused radio inputs to loose reactivity when set via `node.input()` ([#139](https://github.com/formkit/formkit/issues/139))
- Improves TypeScript annotation for `@submit` event ([#130](https://github.com/formkit/formkit/issues/130))
- Fixed an issue that caused selects not to render if set to an empty array ([#129](https://github.com/formkit/formkit/issues/129))
- Fixed an error that caused server side rendering errors on Nuxt 3 when running a built project ([#113](https://github.com/formkit/formkit/issues/83))
- Fixed a bug that caused schema variable scoping to be lost when referencing iteration data inside the slot of a component ([#91](https://github.com/formkit/formkit/issues/91))

## 1.0.0-beta.5

### March 8, 2022

#### ⚠️ Breaking changes

- The `data-loading` attribute has been moved from the submit button of a form
  to the `<form>` tag itself.

#### 🎉 New features

- Adds new `@formkit/tailwindcss` plugin to easily create Tailwind themes for your FormKit forms. Check out the [Create a Tailwind CSS theme](/guides/create-a-tailwind-theme) guide for more details.
- Adds a [new programmatic `reset` function](/essentials/forms#resetting). This can be done on any input, group, form, or list and it will restore the value back to its initial state. It also resets the `context.state` object (like `blurred` and `dirty`).
- Improves accessibility by adding `aria-describedby` and `aria-live` to all provided input types. `aria-describedby` now targets help text, validation messages, and error messages (labeling provided by `<label>` tags that use the `for` attribute).
- Groups, lists and forms can now apply `undefined` values to their children. In other words, if a form is v-modeled and its value is set to an empty object `{}`, it will clear the entire form out.
- Adds new `context.state.settled` property that signals when the input’s internal debounce cycle has ended and a value is finished being committed to the form.
- Adds `data-submitted` attribute to inputs that have been submitted.
- Adds new section key `fileName` (thanks @santi).
- Adds new `parent` prop that accepts a [core node](/advanced/core#node) for advanced use cases where inputs are decoupled from their form or data structure is desired.
- Adds 🇱🇾 Arabic (thanks @Ahmedelforjani)
- Adds 🇩🇰 Danish (thanks @bjerggaard)
- Adds 🇮🇩 Indonesian (thanks @rama-adi)
- Adds 🇮🇹 Italian (thanks @punga78, @Archetipo95)
- Adds 🇵🇱 Polish (thanks @xxSkyy)
- Adds 🇰🇷 Korean (thanks @bwp618)
- Adds 🇻🇳 Vietnamese (thanks @oanhnn)
- Improved 🇫🇷 French (thanks @pop123123123)

#### 🐛 Bug fixes

- Fixes a bug that could cause validation errors to flash for 20ms before resolving when using browser autocomplete ([#99](https://github.com/formkit/formkit/issues/99)).
- Fixes a bug that caused class props (like `input-class`) inside schemas to not properly respect the `$reset` command because it was treated like a variable ([#61](https://github.com/formkit/formkit/issues/61)).
- Fixes a bug that didn't allow classes to be modified via section-key class props when the section-key has multiple words, such as `file-list-class` or `file-item-class` ([#120](https://github.com/formkit/formkit/issues/120)).

## 1.0.0-beta.4

### February 22, 2022

#### ⚠️ Breaking change

- The genesis theme should now be imported from `import '@formkit/themes/genesis`.

#### 🎉 New features

- Adds [programmatic form submission](/essentials/forms#submitting-forms-programmatically):
  - Can be submitted by node `node.submit()` (including any child node of the form).
  - Can be submitted via function `this.$formkit.submit('form-id')` (for composition api it's `submitForm('form-id')`).
- Improved `setErrors` DX:
  - Can now be called directly on a node `node.setErrors(nodeErrors, childErrors)`.
  - `setErrors` now supports pure string `node.setErrors('My error')`
- Submit handler is now passed the form’s node for easy error setting.
- A `<FormKit>` component’s [core node](/advanced/core#node) is now available via template ref.
- Adds `data-invalid` attribute to the `outer` section when an input has failing validation messages that are currently displayed ([playground example](https://formkit.link/59a772a70e06fdb7c19794f90b8c2b06)).
- Adds `data-errors` attribute to the `outer` section when the input has explicitly placed errors (via prop or `setErrors`).
- Adds `data-complete` attribute to the `outer` section when an input ([playground example](https://formkit.link/59a772a70e06fdb7c19794f90b8c2b06)):
  - Either:
    - The input has validation rules.
    - The validation rules are all passing.
    - There are no errors on the input.
  - Or:
    - The input has no validation rules.
    - The input has no errors.
    - The input is dirty and has a value.
- New `context.state` properties:
  - `state.rules` - true when the input has validation rules.
  - `state.errors` - true when the input has explicit errors placed on it.
  - `state.complete` - same as logic as `data-complete`.
  - `state.validationVisible` - true when the `validation-visibility` condition is met (it is showing validation errors if there are any).
- Refactors the Nuxt 3 module for faster build time and better file resolution.
- Adds 🇮🇷 Persian language support (thanks @shahabbasian)
- Adds 🇧🇷 Portuguese language support (thanks @r-martins)
- Adds 🇹🇷 Turkish language support (thanks @ragokan)
- Adds 🇫🇮 Finish language support (thanks @mihqusta)
- Adds 🇦🇷 Spanish language support (thanks @inibg)

#### 📙 Documentation

- Added `node.setErrors` [documentation](/essentials/forms#using-nodeseterrors).
- Added [programmatic form submission documentation](/essentials/forms#submitting-forms-programmatically).
- Improved `context.state` documentation with [new properties and better descriptions](/advanced/context#state).

#### 🐛 Bug fixes

- Fixes an issue that caused server side rendering and server side generation on Nuxt and vite-ssg/vitesse to throw exceptions during build process ([#81](https://github.com/formkit/formkit/issues/81)).
- Fixes a bug that prevented `file` inputs from triggering custom `onChange` events ([#90](https://github.com/formkit/formkit/issues/90)).
- Fixes a bug that prevented forms from outputting their `id` to the DOM.
- Fixes a styling issue in the Genesis theme that caused select list items to be grey before an option was selected when using a placeholder ([#59](https://github.com/formkit/formkit/issues/59))
- Fixes a bug that caused the `:value` prop on forms to be mutated on input ([#72](https://github.com/formkit/formkit/issues/72)).
- Fixes inconsistency between `prop:{propName}` events emitted by default props and custom input defined props ([#73](https://github.com/formkit/formkit/issues/73))

## 1.0.0-beta.3

### February 22, 2022

- `beta.3` was going to be such a great release we decided to skip it and go straight to `beta.4` 👀 ! Only kidding. We had issues with npm and had to bump 🤦.

## 1.0.0-beta.2

### February 3, 2022

#### 🎉 New features

- New `@formkit/nuxt` package is a full featured [Nuxt 3 module](/essentials/installation#nuxt) that makes using FormKit with [Nuxt 3](https://v3.nuxtjs.org/) as simple as possible!
- `defaultConfig` now includes a new package `@formkit/dev` which decodes FormKit’s error codes to helpful console messages (no action required) ([#56](https://github.com/formkit/formkit/issues/56)).
- FormKit is officially open-source under the MIT license!
- The `preserve` key now applies to all descendants ([#53](https://github.com/formkit/formkit/issues/53)).
- Exports all the text formatter functions in the `@formkit/i18n` package ([#54](https://github.com/formkit/formkit/issues/54)).
- Adds 🇳🇱 Dutch language support (thanks @arjendejong12).
- Adds 🇭🇷 Croatian language support (thanks @antemarkic).
- Improves 🇩🇪 German language support (thanks @tosling).

#### 📙 Documentation

- New installation documentation. You no longer need an auth token to install from the `@formkit` organization!
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
- New `child` [node event](/advanced/core#core-events) emitted when a parent has a child added to it.
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
