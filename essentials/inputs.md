# Inputs

FormKit’s inputs are similar to HTML inputs but turbocharged with much needed features like labels, help text, validation, and error messages (and much more). Similar to how HTML’s `<input>` tag uses various `type` attributes (ie `<input type="text">` vs `<input type="checkbox">`) FormKit uses the `type` prop for _all_ inputs — in fact __with FormKit there is only 1 component you have to learn__:

<example
  name="Text input"
  file="/_content/examples/single-component/single-component"
  langs="vue">
</example>

FormKit inputs are not confined to what is available in "native" HTML. [FormKit Pro](/pro) for example, uses "synthetic" input types like `autocomplete`, `taglist` and `wysiwyg`. Of course, you can write your own inputs too by creating [custom inputs](/guides/custom-input).

## Setting values
<!-- vue-specific -->
There are 4 ways to set the value of an input:

- Using the `value` prop.
- Using `v-model`.
- Using FormKit's node `node.input()` method.
- Setting the value of a parent `FormKit` component.

### Using `value` prop

You can set the value of a single input, or a group of inputs using the `value`
prop.

<example
  name="Value prop"
  file="/_content/examples/value-prop/value-prop"
  langs="vue">
</example>

<callout type="warning">
The <code>value</code> prop should only be used for setting the <em>initial</em> value of an input. It will not react to changes after the component has been created.
</callout>

### Using `v-model`
<!-- vue-specific -->
Using `v-model` allows for two-way reactive data binding with any FormKit input.


<example
  name="Input v-model"
  file="/_content/examples/v-model/v-model"
  langs="vue">
</example>

### Using `node.input()`

At the heart of every FormKit input is an instance of FormKit Core’s `node`
object, and using the `node.input()` method is the most efficent mechanism to
modify the any value. The `node` object can be retrieved when the by bindig to
the `@node` event when the `FormKit` component is created.

<example
  name="Input v-model"
  file="/_content/examples/node-input/node-input"
  langs="vue">
</example>

<callout type="tip">
Calls to `node.input()` are debounced, and thus asyncrounous (use the `delay prop to change the length of the debounce). You can can `await node.input(val)` to determine when the input has settled.
</callout>

### Using a parent

Parent inputs like `list`, `group`, and `form` are also able to directly set the values of any of their children. In fact the value of a parent is just the aggregate value of its children. You can use any of the above methods (`value` prop, `v-model`, or `node.input()`) to set the value of the children.

<example
  name="Parent input"
  file="/_content/examples/parent-input/parent-input"
  langs="vue">
</example>

## Setting attributes

In nearly all cases, any attributes set on the `<FormKit>` component will be passed through to the actual input element at the heart of the component. For example:

<example
  name="Text input"
  file="/_content/examples/attributes/attributes"
  langs="vue">
</example>

## Composition keys

Inputs are composed of chunks HTML and each of these chunks is assigned to a name called a “composition key”. These composition keys can be used for many purposes like modifying [classes](#classes), [content](/schema), [attributes](/), and DOM elements that inputs are composed of. Many composition keys are universally available while others are specific to a given input type (you can define your own for custom inputs as well). The following table is a comprehensive list of all universally available composition keys:

Composition Key | Description
----------------|---------------------------------------------------------------
`outer`         | The outermost wrapping element.
`wrapper`       | A wrapper around the label and input.
`label`         | The label of the input.
`inner`         | A wrapper around the actual input element.
`help`          | The element containing help text.
`messages`      | A wrapper around all the messages
`message`       | The element (or many elements) containing a messages — most often validation and error messages.

## Props

FormKit inputs accept both universal props (ones that apply to all FormKit inputs), and input-specific props. The following table is a comprehensive list of props available to all FormKit inputs.

Prop                |  Default    | Description
--------------------|-------------|---------------------------------------------
delay               | `20`        | Number of milliseconds to debounce an input's value before the `commit` [hook](/essentials/hooks) is dispatched.
name                | `{type}_{n}`| The name of the input as identified in the data object. This should be unique within a group a fields.
schema              | `{}`        | An object of composition-key to schema partials, where each schema partial is applied to the respective composition-key
type                | `text`      | The type of input to render.
validation          | `[]`        | A string or an array of [validation rules](/essentials/validation).
validation-behavior | `blur`      | Determines when validation messages are displayed. [TK]

## Universal events

Event      | Payload       | Description
-----------|---------------|----------------------------------------------------
input      | `any`         | Emitted when the node’s `commit` hook is completed.
node       | `FormKitNode` | Emitted when the component is setup, this is the internal `FormKitNode` object at the heart of the input.
