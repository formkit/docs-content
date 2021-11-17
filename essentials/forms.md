# Forms

While you’re free to use `FormKit` inputs by themselves, you’ll usually want to group them into a form. To do this, you simply wrap your inputs in a `<FormKit type="form">`.

The `form` type will actively collect all the values from child inputs, using the name of each input as the property name in the resulting data object (just like [groups](/inputs/group)). You can also read and write to form values using v-model just as you would on any input.

A `form` tracks the validation state of the form and prevents users from submitting the form if any inputs are invalid. As a convenience the `form` also outputs a submit button.

<example
  name="Register example"
  file="/_content/examples/register/register"
  layout="column"
  data-sandbox-fullsize
  langs="vue">
</example>

## Populating

You can populate an entire form by providing a `value` prop to the `form`. The `value` prop should be an object of input name to input value pairs. You may also use `v-model` to populate a form if you require 2 way data binding.

<example
  name="Text example"
  file="/_content/examples/form-population/form-population"
  langs="vue">
</example>

<callout type="warning" label="Submitted data & v-model">
Using <code>v-model</code> data in your submit handler could lead to unintended form mutations. Instead use the unbound copy of your form’s data that is passed to your submission handler.
</callout>

## Submitting

Forms usually submitted through normal user actions like clicking a submit button or hitting the `enter` key on a text node within the form. Upon submission, the form (in sequence):

- It ensures all inputs are settled (finished debouncing).
- Emits the `@submit-raw` event.
- Sets the `submitted` state to true on all inputs — displaying any remaining validation errors (regardless of the `validation-behavior`).
- If all inputs are valid it fires the `@submit` event.
- If the `@submit` event returns a `Promise` sets the form’s state to `loading` until it resolves.

### Submitting via XHR/Fetch request

The most common method of form submission in a modern SPA is an XHR request (think [axios](https://axios-http.com/) or [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)). FormKit is well suited to this task:

- It hands your submit handler a request-ready object.
- If you return a promise from your submit handler it will apply a loading state to your form (`loading` becomes true at `context.state.loading`).
- It handles backend errors by placing error messages directly on the failing inputs **(NOTE: not yet implemented in FormKit Alpha)**.

<example
  name="Text example"
  file="/_content/examples/form-xhr/form-xhr"
  langs="vue">
</example>

### Submitting via page request

To submit a form via page request, simply leave off the `@submit` handler. Just like native HTML you can also provide an `action` and optionally a `method` attribute.

<example
  name="Text example"
  file="/_content/examples/form-page/form-page"
  langs="vue">
</example>

## Backend error handling

<callout type="danger" label="Under development">
Handling backend errors is still under development and not yet available in FormKit Alpha. We'll send out a notification when it has been implemented. We expect the api to be very similar to <a href="https://vueformulate.com/guide/forms/error-handling/#form-errors">Vue Formulate</a>
</callout>

## Props

Forms are technically considered `input` types — so they share many of the universal props that standard inputs use.

<reference-table :without="['label', 'help']" :data="[{ prop: 'submit-label', type: 'String', default: 'Submit', description: 'The label to use on the submit button'}, { prop: 'actions', type: 'Boolean', default: 'true', description: 'Whether or not to include the actions bar at the bottom of the form.'}]"></reference-table>

## Composition keys

<reference-table type="compositionKeys" primary="composition-key" :data="[{ 'composition-key': 'form', description: 'Responsible for rendering the <code>form</code> tag and listening to submit events.'}, { 'composition-key': 'actions', description: 'Responsible for a container at the bottom of the form with form actions like the submit button.'}, { 'composition-key': 'submit', description: 'Responsible for a submit button — by default a FormKit input type <code>submit</code>.'}]" :without="['outer', 'wrapper','inner', 'label', 'input','help']">
</reference-table>
