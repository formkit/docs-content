---
title: The Context Object
description: FormKit provides a reactive context object to expose data to slots, rules, and the underlying schema that defines an input.
---

# Context object

:PageToc

## Introduction

FormKit inputs use a reactive object to expose data to template slots, rules, and the [schema](/essentials/schema) that defines each input. This is called the `context` object and is found in the each input's [core `node` object](/essentials/architecture#node) at `node.context`.

The context object, in general, can be thought of as a general purpose data store for each input. In almost all cases props passed to the `<FormKit>` component end up in the context object. The context object is the also the slot data passed to all section slots.

The context object always (unless noted) has the following properties:

<div data-tight>

## `_value`

FormKit inputs have two values — the committed value (`node.value`) and the uncommitted value (`node._value`). At rest, these two values are equivalent, but the uncommitted value is the undebounced raw value of the input.

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

An object of _visible_ messages (where the type is not `ui` — `ui`). The key of this object is the message name, and the value is a core message object. For example, for an input displaying a single failing validation message, this object would look like:

```js
{
  rule_required: {
    // Determines if the message prevents form submission
    blocking: true,
    // The unique key of this message
    key: 'rule_required',
    // Additional details about the message, you can put anything in here.
    // Below are the meta details for validation messages:
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
    // If this message is intended to be displayed to end users — this does not
    // mean the message is actively visible — that is determined by the
    // {type}-visibility rules, but if this is false, it is never displayed to
    // users.
    visible: true
  }
}
```

## `node`

The underlying [core node](/essentials/architecture) of the current input. This object is not reactive (within the context of Vue).

## `options`

For inputs that accept an options prop, this is a normalized array of option objects.

## `option`

For inputs that accept an options prop, this object is available to [section keys](/essentials/inputs#sections) that are inside the iteration (i.e., the `label` section key on a `checkbox` input with multiple checkboxes). The object contains a `label`, `value`, and sometimes `attrs`:

```js
{
  value: 'foo',
  label: 'Foo',
  attrs: {
    disabled: true
  }
}
```

## `state`

Current state of the input:

```js
{
  /**
   * If the input has been blurred.
   */
  blurred: boolean
  /**
   * True when these conditions are met:
   *
   * Either:
   * - The input has validation rules
   * - The validation rules are all passing
   * - There are no errors on the input
   * Or:
   * - The input has no validation rules
   * - The input has no errors
   * - The input is dirty and has a value
   *
   * This is not intended to be used on forms/groups/lists, but instead on
   * individual inputs. Imagine placing a green checkbox next to each input
   * when the user filled it out correctly — that's what these are for.
   */
  complete: boolean
  /**
   * A flag that indicates if the "owning" component of this node has mounted
   * to the dom or not. Listen to the `mounted` event to be notified when this
   * flag is changed.
   */
  didMount: boolean
  /**
   * The dirty-behavior prop controls how this state is set. By default it is
   * considered dirty if any mutation was made to the input, but once a mutation
   * has been made and dirty is `true` it stops checking.
   * 
   * Alternatively the dirty-behavior prop can be set to `compare` which will
   * diff the changes between the current value and the initial value after
   * every mutation — this means if the input returns back to its initial value * dirty will become `false` again.
   */
  dirty: boolean
  /**
   * If the input has explicit errors placed on it, or in the case of a group,
   * list, or form, this is true if any children have errors on them.
   */
  errors: boolean
  /**
   * Determines if the input should be considered "invalid" — note that this
   * is not the opposite of the valid state. A valid input is one where the
   * input is not loading, not pending validation, not unsettled, and
   * passes all validation rules. An invalid input is one whose validation
   * rules are not explicitly not passing, and those rules are visible to the user.
   */
  invalid: boolean | undefined
  /**
   * The loading state of the input or form. This property is only added while
   * the input is loading and is removed when loading is complete.
   */
  loading: true | undefined
  /**
   * If the input is passing all validation rules. This state will remain
   * in its current state until validation has completed, so if the input
   * is not passing, and you have a long running validation rule this will
   * remaining not passing until that rule has resolved.
   */
  passing?: boolean
  /**
   * Indicates if the input is has the "required" validation rule.
   */
  required: boolean
  /**
   * True when the input has validation rules. Has nothing to do with the
   * state of those validation rules.
   */
  rules: boolean
  /**
   * True when the input has completed its internal debounce cycle and the
   * value was committed to the form.
   */
  settled: boolean
  /**
   * If the form has been submitted.
   */
  submitted: boolean
  /**
   * If the input (or group/form/list) is passing all validation rules. In
   * the case of groups, forms, and lists this includes the validation state
   * of all its children.
   */
  valid: boolean
  /**
   * == Added by @formkit/validation plugin — included in defaultConfig ==
   * If the input (or group/form/list) is currently validating rules — including
   * async validation rules. In the case of groups, forms, and lists this includes
   * the validation state of all its children.
   */
  validating?: boolean
  /**
   * If validation-visibility has been satisfied and any validation
   * messages should be displayed.
   */
  validationVisible: boolean
}
```

## `type`

The type of the input provided by the `type` prop. This is the value that should be referenced when looking up definitions in a library of inputs. Examples of this value: `text`, `select`, or `autocomplete`.

## `ui`

An object of visible messages (keyed by the `key`) of type `ui` that can be used in the interface. This allows for localized text for use on interface elements.

## `classes`

A Proxy object for requesting classes. This object allows schema authors to request any [section](/essentials/inputs#sections) and get a generative class name. For example `$classes.input` would (by default without additional configuration) return `formkit-input` while `$classes.foobar` would return `formkit-foobar`.

</div>
