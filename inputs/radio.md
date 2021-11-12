# Radio input

The `radio` input uses HTML's [native radio inputs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio) to allow a user to select one value from a series of options. The `options` prop is required for radio inputs and can be provided in 3 ways:

- As an array of strings
- An object of value/label pairs
- An array of objects with `label` and `value` properties (the same as a [checkbox input](/inputs/checkbox)).

### Array of strings

The simplest way to provide options is an array of strings. The provided strings will be used for both the label and the value of the option.

<example
name="Radio input"
file="/_content/examples/radio-strings/radio-strings"
langs="vue"></example>

### Value / Label Object

You may also provide the `options` prop where the keys are values and the values of each property are labels.

<example
name="Radio input"
file="/_content/examples/radio-object/radio-object"
langs="vue"></example>

### Array of objects

Them most flexible way to define options is by providing an array of objects. The objects _must_ include `value` and `label` properties — but they may also include a `help` attribute as well as an `attrs` object of additional attributes to apply to each checkbox input tag.

<example
name="Radio input"
file="/_content/examples/radio-objects/radio-objects"
langs="vue"></example>

## Props & Attributes

<reference-table input="radio" :data="[{prop: 'options', type: 'Array/Object', default: '[]', description: 'An object of value/label pairs or an array of strings, or an array of objects that <em>must</em> contain a label and value property.'}]">
</reference-table>

## Composition keys

<reference-table type="compositionKeys" primary="composition-key" :data="[{'composition-key': 'decorator', description: 'Responsible for the element immediately following the input element — usually used for styling.'}, { 'composition-key': 'legend', description: 'Responsible for the fieldset’s legend element.'}, {'composition-key': 'options', description: 'Responsible for the wrapper element around all of the option items'},{'composition-key': 'option', description: 'Responsible for the wrapper around each item in the options.'}]">
</reference-table>

## Available utilities

[TK] - Masks

[TK] - Casts
