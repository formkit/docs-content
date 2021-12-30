# Inputs

FormKit’s inputs are similar to HTML inputs but turbocharged with much needed features like labels, help text, validation, and error messages (and much more). Similar to how HTML’s `<input>` tag uses various `type` attributes (i.e., `<input type="text">` vs `<input type="checkbox">`) FormKit uses the `type` prop for _all_ inputs. In fact, **with FormKit, there is only 1 component you have to learn**:

<example
  name="Text input"
  file="/_content/examples/single-component/single-component"
  langs="vue">
</example>

FormKit inputs are not confined to what is available in "native" HTML. The upcoming FormKit Pro represents "synthetic" input types such as `autocomplete`, `taglist` and `wysiwyg`. Of course, you can write your own inputs too by creating [custom inputs](/guides/custom-input).

## Setting values

<!-- vue-specific -->

There are 4 ways to set the value of an input:

- Using the `value` prop.
- Using `v-model`.
- Using FormKit's node `node.input()` method.
- Setting the value of a parent `FormKit` component.

### Using `value` prop

You can set the value of a single input or a group of inputs using the `value`
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

At the heart of every FormKit input is an instance of [FormKit’s `node`
object](/advanced/core#node), and using the `node.input()` method is the most efficient mechanism to modify any input’s value (read more about [getting an instance of the node object](/advanced/core#getting-a-components-node)).

<example
  name="Input v-model"
  file="/_content/examples/node-input/node-input"
  langs="vue">
</example>

<callout type="tip">
Calls to <code>node.input()</code> are debounced, and thus asynchronous (use the <code>delay</code> prop to change the length of the debounce). You can <code>await node.input(val)</code> to determine when the input has settled.
</callout>

### Using a parent

Parent inputs like `list`, `group`, and `form` are also able to directly set the values of any of their children. In fact, the value of a parent is just the aggregate value of its children. You can use any of the above methods (`value` prop, `v-model`, or `node.input()`) to set the value of the children.

<example
  name="Parent input"
  file="/_content/examples/parent-input/parent-input"
  langs="vue">
</example>

## Setting attributes

In nearly all cases, attributes set on the `<FormKit>` component will be passed through to the actual input element at the heart of the component, rather than any wrapping DOM elements. For example:

<example
  name="Text input"
  file="/_content/examples/attributes/attributes"
  tabs="html"
  langs="vue">
</example>

## Validation

We’ll discuss validation in more detail on its [own documentation page](/essentials/validation) — but suffice to say adding validation rules to inputs in FormKit is as easy as adding the `validation` prop.

<example
  name="Simple validation"
  file="/_content/examples/simple-validation/simple-validation"
  langs="vue"></example>

<cta
  href="/essentials/validation"
  label="Learn more about validation rules"
  button="Read the docs"
  type="ghost">
</cta>

## Debouncing

FormKit inputs all support debouncing as a first-class feature. While the value of an input changes on every keystroke (technically the `input` event) this newly updated value is only set internally — validation rules, groups, lists, forms, and (most) plugins are not yet “aware” a change has been made.

Internally, FormKit debounces the `input` event. When the debounce has "settled", the new value is “committed” and the rest of the application is notified via the [input node’s `commit` event](/advanced/core#events). The default debounce delay is 20 milliseconds and can be adjusted with the `delay` prop or config option.

To illustrate this, lets `v-model` a `group` input and observe how its value is not updated until after our egregiously long `delay`:

<example
  name="Delay prop"
  file="/_content/examples/delay-prop/delay-prop"
  langs="vue"></example>

<callout type="info" label="Group & List delay">
The delay prop’s default is <code>20</code> milliseconds. However, <code>group</code> and <code>list</code> inputs use <code>0</code> milliseconds by default to prevent the debounce delay from “building up” at each level of depth.
</callout>

## Explicit errors

Validation errors are the only way to set errors on an input. You can also explicitly set error messages on an input by using the `errors` prop.

<example
  name="Simple validation"
  file="/_content/examples/simple-errors/simple-errors"
  langs="vue"></example>

<callout type="info" label="Non blocking">
Explicitly set errors are non-blocking, meaning they do not prevent the form from submitting the way validation errors do. You can read more about error handling on the <a href="/essentials/forms#error-handling">form documentation</a>.
</callout>

## Props & attributes

FormKit inputs accept both _universal_ props (ones that apply to all FormKit inputs), and _input-specific_ props. The following table is a comprehensive list of props available to all FormKit inputs.

<reference-table></reference-table>

## Events

FormKit inputs emit both _universal_ events (ones that are emitted from all inputs), and _input-specific_ events. The following table is a comprehensive live of events emitted by all FormKit inputs.

<reference-table type="events" primary="event"></reference-table>

## Composition keys

Inputs are composed of chunks of HTML and each of these chunks is assigned to a name called a “composition key”. These composition keys can be used for many purposes like modifying [classes](#classes), [slots](#slots), and [schema overrides](#schema-overrides).

Many composition keys are universally available while others are specific to a given input type (you can define your own for custom inputs as well). The following table is a comprehensive list of those that are generally available in all inputs:

<reference-table type="compositionKeys" primary="composition-key">
</reference-table>

## Slots

Inputs can have their structure overridden with slots and the pieces and parts of an input that support these slots are the [composition keys](#composition-keys). Slots are then are passed the [context object](/advanced/context) for use in their template.

For example, if we wanted to use a slot to define the label of an input, we could use a `label` slot to do so:

<example
  name="Label slot"
  file="/_content/examples/label-slot/label-slot"
  langs="vue"></example>

<callout type="warning" label="Consider schema overrides">
A disadvantage of using slots is you often need to re-create unrelated features to make the change you desire. For example, if you need to re-implement a <code>v-for</code> loop to change the DOM element being used to display validation messages.<br><br>To help address this shortcoming, FormKit is also able to <a href="#schema-overrides">selectively override the underlying schema</a> of each composition key allowing complex structural modification often with no loss of functionality.
</callout>

## Schema overrides

FormKit provides an additional mechanism to change the structure of a FormKit input called “Schema overrides”. Under the hood, all FormKit inputs are powered by [FormKit’s schema](/advanced/schema) — a JSON compatible data format for creating and storing DOM structure and logic. This allows tremendous structural flexibility because all inputs can have pieces of their schema extended via composition keys without wholesale replacement of the template.

### Changing HTML tags

For example, by default FormKit uses an unordered list (`<ul>` and `<li>`) to output validation messages — but perhaps you need to use `<div>` tags. You can change these tags using the `schema` prop without having to re-create any functionality:

<example
  name="Schema overrides"
  file="/_content/examples/schema-overrides/schema-overrides"
  langs="vue"
  tabs="html,render" ></example>

### Unwrapping or removing HTML tags

For accessibility and flexibility, FormKit uses several wrapper elements like the `wrapper` and `inner` composition keys. However, perhaps on some inputs you need to remove a wrapper element to ensure other elements are adjacent. You can do this by providing a `null` value as the schema element:

<example
  name="No wrappers"
  file="/_content/examples/schema-wrappers/schema-wrappers"
  langs="vue"
  tabs="html,render" ></example>

## Schema logic

Schema overrides can also change the content being output using advanced schema logic. You could, for example, output a special value when your input’s value matches a particular string:

<example
  name="No wrappers"
  file="/_content/examples/schema-content/schema-content"
  langs="vue" ></example>

<cta label="Learn more about how schemas work" href="/advanced/schema" button="Gimme more schema">
