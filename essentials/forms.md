# Forms

While you’re free to use `FormKit` inputs by themselves you’ll usually need them grouped into a form. To do this with FormKit you wrap your inputs in a `<FormKit type="form">`.

The `form` type will actively collect all the values from child inputs, using the name of each input as the property name in the resulting data object (just like [groups](/inputs/group)). You can also read and write to form values using v-model just as you would on any input.

A `form` tracks the validation state of the form and prevents users from submitting the form if any inputs are invalid. As a convenience the `form` also outputs a submit button.

<example
  name="Register example"
  file="/_content/examples/register/register"
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

## [TK] Submitting

## [TK] Error handling
