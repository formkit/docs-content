---
title: Forms
description: Collect all of your FormKit data, submit to your server, and handle server-side error messages.
---

# Forms

While you’re free to use `FormKit` inputs by themselves, you’ll usually want to group them into a form. To do this, simply wrap your inputs in a `<FormKit type="form">`.

The `form` type will actively collect all the values from child inputs, using the `name` of each input as the property name in the resulting data object (just like [groups](/inputs/group)). You can also read and write to form values using v-model just as you would on any input.

A `<FormKit type="form">` tracks the form's validation state and prevents users from submitting the form if any inputs are invalid.

### Provided submit button

As a convenience, the `form` outputs a submit button automatically, and provided themes also include a loading spinner. You can alter this button with the `submit-label` and `submit-attrs` props, or disable with `:actions="false"`.

### Full example form

Excluding backend functionality, here is a fully featured form with inputs (`form`, `text`, `email`, `password`), help text, labels, validation with custom messages, and error and submission handling:

<example
  name="Register example"
  file="/_content/examples/register/register.vue"
  layout="column"
  data-render-fullsize>
</example>

## Populating

You can populate an entire form by providing a `value` prop to the `<FormKit type="form">`. The `value` prop should be an object of input name to input value pairs. You may also use `v-model` to populate a form if you require two-way data binding.

<example
  name="Text example"
  file="/_content/examples/form-population/form-population.vue">
</example>

<callout type="warning" label="Submitted data & v-model">
Using <code>v-model</code> data in your submit handler could lead to unintended form mutations. Instead, use the unbound copy of your form’s data that is passed to your submission handler.
</callout>

## Submitting

Forms are usually submitted through user actions like clicking a submit button or hitting the `enter` key on a text node within the form. Upon submission, the form (in sequence):

1. Ensures all inputs are settled (finished debouncing).
1. Emits the `@submit-raw` event.
1. Sets the `submitted` state to true on all inputs — displaying any remaining validation errors (regardless of the `validation-visibility`).
1. If all inputs are valid it fires the `@submit` event.
1. If the `@submit` event returns a `Promise` sets the form’s state to `loading` until it resolves.

### Submitting via XHR/Fetch request

The most common method of form submission in a modern SPA is an XHR request (think [axios](https://axios-http.com/) or [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)). FormKit is well suited to this task:

- It hands your submit handler a request-ready object.
- If you return a promise from your submit handler, it will apply a loading state to your form (`loading` becomes true at `context.state.loading`). A loading spinner is added in provided themes.
- It handles [backend errors](#error-handling) by placing error messages directly on the failing inputs.

<example
  name="Text example"
  file="/_content/examples/form-xhr/form-xhr.vue">
</example>

### Submitting via page request

To submit a form via page request, simply leave off the `@submit` handler. Just like native HTML, you can also provide an `action` and optionally a `method` attribute.

<example
  name="Text example"
  file="/_content/examples/form-page/form-page.vue">
</example>

## Validation

Forms will not submit until all the inputs in the form are passing their validation rules.

### Validation incomplete message

In addition to not firing the submit event, a message is displayed above the submit button indicating the form is still incomplete. You can customize this message using the `incomplete-message` prop or disable it by setting the prop to `false`.

<example
  name="Text example"
  file="/_content/examples/incomplete-message/incomplete-message.vue">
</example>

<callout type="tip" label="Global customization">
If you want to change the incomplete message across all forms on your project, you can modify the i18n locale message for <code>ui.incomplete</code>.
</callout>

### Validity state

The validity of all inputs within a form is tracked automatically in the [context object](/advanced/context). This can be useful when creating various interfaces. For example, if you wanted a submit button to be disabled until all inputs are valid, you could use the `state.valid` property to do so.

<example
  name="Text example"
  file="/_content/examples/form-validity/form-validity.vue">
</example>

<callout type="tip" label="Getting the context object">
In the above example we extract the context object from the <code>#default</code> slot, but there are other ways as well. The context object is available on each input’s core node on the <code>node.context</code> property, and you can fetch an input’s node <a href="/advanced/core#getting-a-components-node">a number of ways</a>.
</callout>

## Disabling

To disable all the inputs in a given form, including the submit button, you can use the `disabled` prop.

<example
  name="Disabled example"
  file="/_content/examples/form-disabled/form-disabled.vue">
</example>

## Error handling

With FormKit, adding front end validation to your form is easy — but what about errors produced by your backend framework, or ones you want to manually assign? There are two types of errors you can assign to a form:

- [Form errors](#form-errors). These are displayed at the bottom of the form above the submit button. An example would be a global message like "Sorry, our server isn’t working right now”.
- [Input errors](#input-errors). Errors to be placed on specific inputs within your form, typically these are validation errors from your backend, like "Sorry this username is already taken".

### Form errors

Form errors (ones that apply to the entire form) can be set two ways.

- Using the `errors` prop on a `<FormKit type="form">`.
- Using the `$formkit.setErrors()` Vue plugin method.

#### Using the `errors` prop

Like with any FormKit input, you can directly assign errors using the `errors` prop. These errors are always visible (not subject to `validation-visibility`).

<example
  name="Form errors prop example"
  file="/_content/examples/form-errors/form-errors.vue">
</example>

#### Using `$formkit.setErrors()`

Alternatively, you can set errors directly on a form by giving the form an `id` and then calling `$formkit.setErrors('id', ['Form error here'])`. The `setErrors` method must be passed the `id` of the form, and then can handle 1 or 2 more arguments — the form errors, and the input errors.

<example
  name="setErrors"
  file="/_content/examples/set-errors/set-errors.vue">
</example>

<callout type="input" label="Composition API">
When using Vue 3’s composition API, you can access <code>setErrors</code> by importing it directly from <code>@formkit/vue</code>.<br><br>
<code>import { setErrors } from '@formkit/vue'</code>
</callout>

<callout type="tip" label="Groups and Lists">
The <code>setErrors</code> method also works on the <code>group</code> and <code>list</code> input type. Just provide the input an <code>id</code> to the input, and use it the exact same way.
</callout>

### Input errors

Input errors (ones to be displayed with specific inputs in a form) can be applied three ways:

- Manually using the `errors` prop on each individual input.
- Using the `input-errors` prop on the form (also works with groups and lists).
- Using the `$formkit.setErrors()` Vue plugin method (see [example above](#using-formkitseterrors)).

#### Manually using `errors` prop

The most basic way to display errors on a form is using the `errors` prop that is available on each `FormKit` input.

<example
  name="errors prop"
  file="/_content/examples/errors-prop/errors-prop.vue">
</example>

#### Using `input-errors` prop

You can also conveniently set error messages for all inputs in your form (or [group](/inputs/group) or [list](/inputs/list)) using the `input-errors` prop. The prop accepts an object of errors, where the keys are input names ([relative node addresses](/advanced/core#traversal) are supported) and the value is an error or array of errors to apply to that input.

<example
  name="input errors prop"
  file="/_content/examples/input-errors-prop/input-errors-prop.vue">
</example>

## Unmounting inputs

When inputs are unmounted from a form — for example when using `v-if` — the key and value is removed from the form’s data. However, in some circumstances it may be preferable to keep the key/value pair even after the input has been removed. This can be accomplished by using the `preserve` prop.

<example
  name="input errors prop"
  file="/_content/examples/preserve-prop/preserve-prop.vue">
</example>

## Props

Forms are technically considered `input` types — so they share many of the universal props that standard inputs use.

<reference-table :without="['label', 'help']" :data="[{ prop: 'disabled', type: 'Boolean', default: 'false', description: 'Disables the form submit button and all the inputs in the form.'}, { prop: 'incomplete-message', type: 'String/Boolean', default: '{locale}.ui.incomplete', description: 'The message that is shown to near the submit button when a user attempts to submit a form, but not all inputs are valid.'}, { prop: 'submit-attrs', type: 'Object', default: '{}', description: 'Attributes or props that should be passed to the built-in submit button.'}, { prop: 'submit-label', type: 'String', default: 'Submit', description: 'The label to use on the built-in submit button.'}, { prop: 'actions', type: 'Boolean', default: 'true', description: 'Whether or not to include the actions bar at the bottom of the form (ex. you want to remove the submit button and use your own, set this to <code>false</code>).'}]"></reference-table>

## Section keys

<reference-table type="sectionKeys" primary="section-key" :data="[{ 'section-key': 'form', description: 'Responsible for rendering the <code>form</code> tag and listening to submit events.'}, { 'section-key': 'actions', description: 'Responsible for a container at the bottom of the form with form actions like the submit button.'}, { 'section-key': 'submit', description: 'Responsible for a submit button — by default a FormKit input type <code>submit</code>.'}]" :without="['outer', 'wrapper','inner', 'label', 'input','help']">
</reference-table>
