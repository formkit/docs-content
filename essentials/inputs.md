# Inputs

FormKit’s inputs are similar to HTML inputs but turbocharged with much needed features like labels, help text, validation, and error messages. Most HTML inputs are written using the `<input>` tag, with various `type` attributes `<input type="text">` vs `<input type="checkbox">`. FormKit embraces this consistency and expands this to include _all_ inputs — __with FormKit there is only 1 component you have to learn__:

<code-example
  name="Text input"
  file="/_content/examples/single-component/single-component"
  langs="vue">
</code-example>

FormKit inputs are not confined to what is available in "native" HTML. [FormKit Pro](/pro) for example, uses "synthetic" input types like `autocomplete`, `taglist` and `wysiwyg`. Of course, you can write your own inputs too by creating [custom inputs](/guides/custom-input).

## Setting values

There are 2 ways to set the value of an input:

- Using the `value` prop
- Using a parent's `value` prop (like `form`, or `group`)

[TK] Examples

## Universal props

FormKit inputs accept both universal props (ones that apply to all FormKit inputs), and input-specific props. The following table is a comprehensive list of props available to all FormKit inputs.

Prop       |  Default    | Description
-----------|-------------|------------------------------------------------------
delay      | `20`        | Number of milliseconds to debounce an input's value before the `commit` [hook](/essentials/hooks) is dispatched.
name       | `{type}_{n}`| The name of the input as identified in the data object. This should be unique within a group a fields.
schema     | `{}`        | An object of composition-key to schema partials, where each schema partial is applied to the respective composition-key
type       | `text`      | The type of input to render.
validation | `[]`        | A string or an array of [validation rules](/essentials/validation).
