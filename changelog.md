# Changelog

## 1.0.0-alpha.5

### January 20, 2022

#### ⚠️ Breaking changes

- Changes the `validation-behavior` prop on the `<FormKit>` component to `validation-visibility`.
- Changes the `schema` prop on the `<FormKit>` component to `sections-schema`.

#### 🎉 New features

- Adds the native [`file` input type](/inputs/file) with support for some value-added features:
  - Display only re-population.
  - Drag and drop.
  - Input clearing.
- Adds the `createInput` helper function to make custom inputs easy to write.
- New `incomplete-message` prop allows inline customization (or disablement) of the message displayed by the a form when it attempts to submit and all its inputs are not valid.
- Updates the `defaultConfig` to accept custom inputs.
- Adds a prefix composition key which allows content to be injected immediately before an input element.
- Adds a suffix composition key which allows content to be injected immediately after a composition key.
- 🇷🇺 Russian locale (thank you [@andreimakushkin](https://github.com/andreimakushkin)!)
- Refactors genesis theme to use much more robust css variable structure.

#### 📙 Documentation

- New [create a custom input](/guides/create-a-custom-input) guide.
- New advanced [custom input documentation](/advanced/custom-inputs) page.
- "Composition keys" will now be referred to as ["Section keys"]().

#### 🐛 Bug fixes

- Fixes a bug that prevented the incomplete message from displaying on forms.
- Fixes TypeScript typings for `@submit` and `@submit-raw` events.

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
