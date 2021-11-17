# Context object

FormKit inputs use a reactive object to expose data to slots, rules, and the underlying [schema](/essentials/schema) that defines the input. This is called the `context` object and is found in the each input's [core `node` object](/essentials/core-node) at `node.context`. The context object has the following properties:

<div data-tight>

## `_value`

FormKit inputs have two values — the committed value (`node._value`) and the uncommitted value (`node.value`). At rest, these two values are equivalent, but the uncommitted value is the undebounced raw value of the input.

## `attrs`

An object containing any attributes that will be passed to the internal input element.
## `fns`

A small object of utility functions that are useful when writing schemas.

```js
{
  // Returns the length of a given object
  length: (obj: Record<PropertyKey, any>) => Number,
  // Casts a value to a number
  number: (value: any) => Number,
  // Casts a value to a string
  string: (value: any) => String,
  // Returns the JSON representation of a value
  json: (value: any) => String | false,
}
```

## `handlers`

A small object of common input handlers for use in the schema. Keep in mind that input "features" can replace or add to handlers on an input by input basis.

```js
{
  // sets the state.blurred value to true
  blur: () => void,
  // sets the state.touched value to true
  touch: () => void,
  // Sets the value of the input
  DOMInput: (e: Event) => void
}
```

## `help`

The help text of the input provided by the `help` prop.

## `id`

The unique identifier of the input. This value is auto-generated unless the `id` prop is set.

## `label`

The label of the input provided by the `label` prop.

## `messages`

An object of _visible_ messages. The key of this object is the message name, and the value is a core message object. For example, for an input displaying a single failing validation message, this object would look like:

```js
{
  required_rule: {
    // Determines if the message prevents form submission
    blocking: true,
    // The unique key of this message
    key: 'required_rule',
    // Additional details about the message
    meta: {
      // The name of the validation message (used in message lookups)
      messageKey: 'required',
      // Arguments that can be used in i18n translation
      i18nArgs: [{
        node,
        name: 'email',
        args: []
      }]
    },
    // The "type" of message — generally the plugin that generated it.
    type: 'validation',
    // The value of the message
    value: 'Email is required',
    // If this is a visible message (displayed to end users)
    visible: true
  }
}
```

## `node`

The underlying [core node](/essentials/core) of the current input. This object is not reactive (within the context of Vue).

## `options`

For inputs that accept an options prop, this is a normalized array of option objects.

## `state`

Current state of the input:

```js
{
  blurred: boolean,
  dirty: boolean,
  valid: boolean,
}
```
## `type`

The type of the input provided by the `type` prop. This is the value that should be referenced when looking up definitions in a library of inputs. Examples of this value: `text`, `select`, or `autocomplete`.

## `classes`

A Proxy object for requesting classes. This object allows schema authors to request any composition key and get a generative class name. For example `$classes.input` would (by default without additional configuration) return `formkit-input` while `$classes.foobar` would return `formkit-foobar`.

</div>
