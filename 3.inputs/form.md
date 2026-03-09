---
title: Form
description: Collect all of your FormKit data, submit to your server, and handle server-side error messages.
navigation:
  title: 'Form'
---

:InputPageHero

While you’re free to use `FormKit` inputs by themselves, you’ll usually want to group them into a form. To do this, wrap your inputs in a `<FormKit type="form">`.

The `form` type will actively collect all the values from child inputs, using the `name` of each input as the property name in the resulting data object (just like [groups](/inputs/group)). You can also read and write to form values using v-model just as you would on any input.

A `<FormKit type="form">` tracks the form's validation state and prevents users from submitting the form if any inputs are invalid.

### Provided submit button

As a convenience, the `form` outputs a submit [button](/inputs/button) automatically, and provided themes also include a loading spinner. You can alter this button with the `submit-label` and `submit-attrs` props, or disable with `:actions="false"`. You can pass any FormKit props to `submit-attrs`. In the example below, we pass classes, `data` attributes, help text, and even [tell the included submit button to be un-ignored](/inputs/submit#ignored-input):

```html
<FormKit
  type="form"
  submit-label="Update"
  :submit-attrs="{
    inputClass: 'my-input-class',
    wrapperClass: 'my-wrapper-class',
    'data-theme': `dark`,
    help: 'My button help text',
    ignore: false
  }"
></FormKit>
```

### Full example form

Excluding backend functionality, here is a fully featured form with inputs (`form`, `text`, `email`, `password`), help text, labels, validation with custom messages, and error and submission handling:

::Example
---
  name: "Register example"
  file: "_examples/register/register.vue"
  react-file: "_examples/form/register.react.jsx"
  layout: "auto"
---
::

## Populating

::VideoCard
---
title: "Form Population and Submission - Vue School Course"
poster: "https://cdn.formk.it/web-assets/robust-vue-js-forms-with-formkit-2.jpg"
watch-time: "8 mins"
external-vid: "https://vueschool.io/lessons/form-population-and-submission?friend=formkit"
---
::

You can populate an entire form by providing a `value` prop to the `<FormKit type="form">`. The `value` prop should be an object of input name to input value pairs. You may also use `v-model` to populate a form if you require two-way data binding:

::Example
---
name: "Text example"
file: "_examples/form-population/form-population.vue"
react-file: "_examples/form/form-population.react.jsx"
---
::

::Callout
---
type: "danger"
label: "v-model and reactive objects"
---
Be sure to either <code>v-model</code> a <code>ref</code> or a property of a <code>reactive</code> object. Do not <code>v-model</code> the reactive object itself as it <a href="https://github.com/formkit/formkit/issues/58#issuecomment-1029250016">leads to unexpected behavior</a>.
::

## Submitting

Forms are usually submitted through user actions like clicking a submit button or hitting the `enter` key on a text node within the form. Upon submission, the form (in sequence):

1. Ensures all inputs are settled (finished debouncing).
2. Emits the `@submit-raw` event.
3. Sets the `submitted` state to true on all inputs — displaying any remaining validation errors (regardless of the `validation-visibility`).
4. If the form has validation errors the `@submit-invalid` event is fired.
5. If all inputs are valid it fires the `@submit` event.
6. If the `@submit` handler returns a `Promise`, sets the form’s state to `loading` until it resolves.

::Callout
---
type: "warning"
label: "Avoid v-model for collecting and submitting form data"
---
Using <code>v-model</code> data in your submit handler can lead to unintended form mutations. FormKit <em>automatically</em> collects form data for you, so use the unbound copy of your form’s data that is passed to your submission handler instead.
::

### Submitting via XHR/Fetch request

The most common method of form submission in a modern SPA is an XHR request (think [axios](https://axios-http.com/) or [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)). FormKit is well suited to this task:

- It hands your `@submit` handler 1) the collected form data as a single request-ready object (no `v-model` needed), and 2) the `form` input's core node, as a convenience.
- If you use an async submit handler, it will disable your form’s inputs and apply a loading state to your form (`loading` becomes true at `context.state.loading` and a spinner is displayed on the `genesis` theme).
- It handles [backend errors](#error-handling) by placing error messages directly on the failing inputs.

::Example
---
name: "Text example"
file: "_examples/form-xhr/form-xhr.vue"
react-file: "_examples/form/form-xhr.react.jsx"
---
::

### Submitting as a page request

To submit a form via page request, leave off the `@submit` handler. Just like native HTML, you can also provide an `action` and optionally a `method` attribute.

::Example
---
name: "Text example"
file: "_examples/form-page/form-page.vue"
react-file: "_examples/form/form-page.react.jsx"
---
::

### Submitting forms programmatically

While submitting a form using any standard HTML method is valid (like clicking a `submit` button, or hitting `enter` on a text input) — you may also submit a form programmatically. There are 2 ways to do this:

- Using `this.$formkit.submit('form-id')` (`submitForm('form-id')` for the composition API).
- Using a [core node](/essentials/architecture#node) object.

#### Submitting with `$formkit.submit()`

::Example
---
name: "Text example"
file: "_examples/form-submit/form-submit.vue"
react-file: "_examples/form/form-submit.react.jsx"
---
::

#### Submitting with `node.submit()`

You can also submit a form programmatically by calling `node.submit()` on the form’s (or any input inside the form) core node. To do this you need to [retrieve an instance of the core node](/essentials/architecture#getting-a-components-node).

::Example
---
name: "Text example"
file: "_examples/node-submit/node-submit.vue"
react-file: "_examples/form/node-submit.react.jsx"
---
::

## Disabling

To disable all the inputs in a given form, including the submit button, you can use the `disabled` prop.

::Example
---
name: "Disabled example"
file: "_examples/form-disabled/form-disabled.vue"
react-file: "_examples/form/form-disabled.react.jsx"
---
::

::Callout
---
type: "tip"
label: "Disabled automatically"
---
When using an async <code>@submit</code> handler, FormKit will automatically disable the form (and set the state to <code>loading</code>) while the submit handler is pending.
::

## Resetting

You can reset your form (or any input) back to its initial state by calling `$formkit.reset(formId)`.

::Example
---
name: "Reset example"
file: "_examples/reset-form/reset-form.vue"
react-file: "_examples/form/reset-form.react.jsx"
---
::

::Callout
---
type: "tip"
label: "Composition API"
---
When using the composition API, you can directly access the reset function by importing it from core: <code>import { reset } from '@formkit/core'</code>.
::

### Initial values

It’s important to note that the "initial state" of a form is not necessarily an empty form. If you have a default `:value` or `v-model` on the form or on individual inputs in the form, FormKit automatically merges these together to produce your initial value, and will restore to this merged state on reset.

Optionally you can provide a second argument to `reset(formId, initialState)` if you would prefer an alternative reset state.

## Validation

Forms will not submit until all the inputs in the form are passing their validation rules.

### Validation incomplete message

In addition to not firing the submit event, a message is displayed above the submit button indicating the form is still incomplete. You can customize this message using the `incomplete-message` prop or disable it by setting the prop to `false`.

::Example
---
name: "Text example"
file: "_examples/incomplete-message/incomplete-message.vue"
react-file: "_examples/form/incomplete-message.react.jsx"
---
::

::Callout
---
type: "tip"
label: "Global customization"
---
If you want to change the incomplete message across all forms on your project, you can modify the i18n locale message for <code>ui.incomplete</code>.
::

### Submit invalid event

When a user attempts to submit a form containing inputs that have failing validations, the `@submit-invalid` event is fired.

For example, we could use this event to alert our users of the failing validation rules.

::Example
---
name: "Submit invalid"
file: "_examples/submit-invalid/submit-invalid.vue"
react-file: "_examples/form/submit-invalid.react.jsx"
---
::

### Validity state

The validity of all inputs within a form is tracked automatically in the [context object](/essentials/configuration). This can be useful when creating various interfaces. For example, if you wanted a submit button to be disabled until all inputs are valid, you could use the `state.valid` property to do so.

::Example
---
name: "Text example"
file: "_examples/form-validity/form-validity.vue"
react-file: "_examples/form/form-validity.react.jsx"
---
::

::Callout
---
type: "tip"
label: "Getting the context object"
---
In the above example we extract the context object from the <code>#default</code> slot, but there are other ways as well. The context object is available on each input’s core node on the <code>node.context</code> property, and you can fetch an input’s node <a href="/essentials/architecture#getting-a-components-node">a number of ways</a>.
::

## Error handling

With FormKit, adding front-end validation to your form is easy — but what about errors produced by your backend framework, or ones you want to manually assign? There are two types of errors you can assign to a form:

- [Form errors](#form-errors). These are displayed at the bottom of the form above the submit button. An example would be a global message like "Sorry, our server isn’t working right now”.
- [Input errors](#input-errors). Errors to be placed on specific inputs within your form, typically these are validation errors from your backend, like "Sorry this username is already taken".

### Form errors

Form errors (ones that apply to the entire form) can be set three ways.

- Using the `errors` prop on a `<FormKit type="form">`.
- Using a core node `node.setErrors()`.
- Using the `$formkit.setErrors()` Vue plugin method.

#### Using the `errors` prop

Like with any FormKit input, you can directly assign errors using the `errors` prop. These errors are always visible (not subject to `validation-visibility`).

::Example
---
name: "Form errors prop example"
file: "_examples/form-errors/form-errors.vue"
react-file: "_examples/form/form-errors.react.jsx"
---
::

#### Using `node.setErrors()`

Setting your form’s errors using `node.setErrors` is convenient since your submit handler is passed the form’s `node` object as its second argument. `node.setErrors()` takes 2 arguments — an array for form errors, and a keyed object for input errors:

::Example
---
name: "setErrors"
file: "_examples/node-set-errors/node-set-errors.vue"
react-file: "_examples/form/node-set-errors.react.jsx"
---
::

#### Using `$formkit.setErrors()`

Alternatively, you can set errors directly on a form by giving the form an `id` and then calling `$formkit.setErrors('id', ['Form error here'])`. The `setErrors` method must be passed the `id` of the form, and then can handle 1 or 2 additional arguments — the form errors, and the input errors:

::Example
---
name: "setErrors"
file: "_examples/set-errors/set-errors.vue"
react-file: "_examples/form/set-errors.react.jsx"
---
::

### Clearing errors

By default errors that were set on inputs using `setErrors()` are automatically cleared when a user changes the value of that input. You can change this default behavior by setting the `preserve-errors` prop.

To clear all the errors on the form (regardless of the `preserve-errors` prop) call `node.clearErrors()`.

::Example
---
name: "clearErrors"
file: "_examples/auto-clear-errors/auto-clear-errors.vue"
react-file: "_examples/form/auto-clear-errors.react.jsx"
---
::

If you prefer to preserve errors by default, you can change the default behavior by modifying the `preserveErrors` config option. This can be done globally or for a single form:

::Example
---
name: "preserveErrors"
file: "_examples/preserve-errors-config/preserve-errors-config.vue"
react-file: "_examples/form/preserve-errors-config.react.jsx"
---
::

::Callout
---
type: "info"
label: "Composition API"
---
When using Vue 3’s composition API, you can access <code>setErrors</code> and <code>clearErrors</code> by importing them directly from <code>@formkit/vue</code>.<br><br>
<code>import { setErrors, clearErrors } from '@formkit/vue'</code>
::

### Input errors

Input errors (ones to be displayed with specific inputs in a form) can be applied three ways:

- Manually using the `errors` prop on each individual input.
- Using the `input-errors` prop on the form (also works with groups and lists).
- Using the `$formkit.setErrors()` Vue plugin method (see [example above](#using-formkitseterrors)).

#### Manually using `errors` prop

The most basic way to display errors on a form is using the `errors` prop that is available on each `FormKit` input.

::Example
---
name: "errors prop"
file: "_examples/errors-prop/errors-prop.vue"
react-file: "_examples/form/errors-prop.react.jsx"
---
::

#### Using `input-errors` prop

You can also conveniently set error messages for all inputs in your form (or [group](/inputs/group) or [list](/inputs/list)) using the `input-errors` prop. The prop accepts an object of errors, where the keys are input names ([relative node addresses](/essentials/architecture#traversal) are supported) and the value is an error or array of errors to apply to that input.

::Example
---
name: "input errors prop"
file: "_examples/input-errors-prop/input-errors-prop.vue"
react-file: "_examples/form/input-errors-prop.react.jsx"
---
::

## Validation and error summary

It can be helpful for accessibility to provide a summary of validation and error messages at the top of your form. FormKit provides a `<FormKitSummary />` component to render this summary for you.

This component will automatically render all of a form’s validation and error messages with jump links to the inputs they apply to. These errors are only shown *after* submitting the form, but they are wrapped in an `aria-live` region to ensure screen readers will be notified when the errors present themselves. Additionally, the page will automatically scroll to the summary box and focus on the first error listed.

`<FormKitSummary />` is not a globally registered component — you must import it:

```js
import { FormKitSummary } from '@formkit/vue'
```

::Example
---
name: "Summary component"
file: "_examples/summary/summary.vue"
react-file: "_examples/form/summary.react.jsx"
---
::

::Callout
---
type: "tip"
label: "Moving the summary"
---
The summary component should generally be nested in the form it is summarizing. If you would like to move the summary to a different location on the page, you can do so by providing the form’s core node as the `node` prop.
::

## Moving validation and error messages

By default, a form’s validation and error messages are placed directly above the form’s actions section. However, you can choose to render these anywhere on your page by using the `<FormKitMessages />` component. `<FormKitMessages />` is not a globally registered component — you must import it:

```js
import { FormKitMessages } from '@formkit/vue'
```

There are two ways to use `<FormKitMessages />`:

- [Automatically](#move-messages-automatically)
- [Manually by `node`](#move-messages-by-node)

### Move messages automatically

Place a `<FormKitMessages />` component anywhere _inside_ your form, and the form’s messages will automatically be moved to that location:

::Example
---
name: "input errors prop"
file: "_examples/formkit-messages/automatic.vue"
react-file: "_examples/form/formkit-messages/automatic.react.jsx"
---
::

### Move messages by `node`

To move messages anywhere in the DOM — even _outside_ the form — you can pass the form’s core node as a prop to `<FormKitMessages />`. In this example, we use the messages to create a toast-style popup:

::Example
---
name: "input errors prop"
file: "_examples/formkit-messages/toast.vue"
react-file: "_examples/form/formkit-messages/toast.react.jsx"
---
::

### FormKitMessages props

The `<FormKitMessages />` component has a few additional configuration options:

<div class="reference-table docs-content-child">

| Prop              | Default   | Description                                                                                                                                                       |
| ----------------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `node`            | inherited | The core node to render messages for. By default this is inherited from the node’s parent (if it exists).                                                         |
| `sectionsSchema`  | `{}`      | Override the internal `messages` and `message` sections (same default structure as other input’s messages section).                                               |
| `defaultPosition` | `false`   | By default, `FormKitMessages` moves the rendered messages to a new location. If you would like to render the messages in both locations, set this prop to `true`. |

</div>

## Unmounting inputs

When an input is unmounted from a form — for example when using `v-if` — its key and value are removed from the form’s data. However, in some circumstances it may be preferable to keep the key/value pair even after the input has been removed. This can be accomplished by using the `preserve` prop:

::Example
---
name: "input errors prop"
file: "_examples/preserve-prop/preserve-prop.vue"
react-file: "_examples/form/preserve-prop.react.jsx"
---
::

## Composables <span class="badge" data-version="1.6.0"></span>

FormKit provides a few composables to help you access the form’s data and context. These are available to be imported from the `@formkit/vue` package:

### useFormKitContext

The `useFormKitContext` is a composable that returns the form’s context object as a vue `Ref` whenever it becomes available. This must be used in a component that is a child of a `<FormKit>` component (like the form). The first argument is an optional [traversal path](/essentials/architecture#traversal) that allows you to navigate to any node within your form tree. The second argument is an optional effect callback that will be invoked whenever the context becomes available.

::Example
---
name: "useFormKitContext"
init-file-tab: 'Address.vue'
file: [
  "_examples/use-formkit-context/my-form.vue",
  "_examples/use-formkit-context/address.vue"
]
react-file: [
  "_examples/form/use-formkit-context/my-form.react.jsx",
  "_examples/form/use-formkit-context/address.react.jsx"
]
---
::

### useFormKitContextById

Similar to `useFormKitContext` this composable finds any `<FormKit>` context object if that component has been given an explicit `id`. Optionally you can provide an effect callback that will be invoked whenever the node becomes available.

::Example
---
name: "useFormKitContextById"
file: [
  "_examples/use-formkit-context-by-id/my-form.vue",
]
react-file: [
  "_examples/form/use-formkit-context-by-id/my-form.react.jsx"
]
---
::

### useFormKitNodeById

Fetches any FormKit node that has an explicit `id`. It returns a `Ref` that will populate with the core node whenever it is mounted. Optionally you can provide an effect callback that will be invoked whenever the node becomes available.

::Example
---
name: "useFormKitNodeById"
file: [
  "_examples/use-formkit-node-by-id/my-form.vue",
]
react-file: [
  "_examples/form/use-formkit-node-by-id/my-form.react.jsx"
]
---
::

::Callout
---
type: "info"
label: "Node vs context"
---
The node itself is not reactive and should be used for imperative actions like `node.submit()`. The context object is reactive and should be used for reading and reacting to the form’s state.
::

## Autofill

In order to prevent password managers such as 1Password and LastPass from autofilling your email and password input fields, set the respective props `data-1p-ignore` and `data-lpignore` to `true` on the inputs themselves. If you would like for this to be done automatically, check out the [adds attributes to prevent autofill](/essentials/examples) plugin.

## Props & Attributes

Forms are technically considered `input` types — so they share many of the universal props that standard inputs use.

:FormPropsTable

## Sections

::ReferenceTable
---
type: "sectionKeys"
primary: "section-key"
data: [
  {
    "section-key": "form",
    description:
      "Responsible for rendering the <code>form</code> tag and listening to submit events.",
  },
  {
    "section-key": "actions",
    description:
      "Responsible for a container at the bottom of the form with form actions like the submit button.",
  },
  {
    "section-key": "submit",
    description:
      "Responsible for a submit button — by default a FormKit input type <code>submit</code>.",
  },
]
without: ['outer', 'wrapper','inner', 'label', 'input','help']
---
::
