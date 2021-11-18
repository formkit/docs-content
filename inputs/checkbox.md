# Checkbox input

The `checkbox` input uses HTML's [native checkbox input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox). It can display one or many options to a user and is a great way to allow users to select multiple items from a list. FormKit supports both single and multiple checkbox inputs.

## Single checkbox

By default the checkbox type will render a single checkbox and uses `boolean` values.

<example
name="Checkbox input"
file="/_content/examples/checkbox-single/checkbox-single"
langs="vue"></example>

## Multiple checkboxes

To output multiple checkboxes with a single input use the `options` prop. Options can be specified 3 ways:

- An array of strings
- An object of value/label pairs
- An array of objects with `label` and `value` properties (the same as the [select](/inputs/select) and [radio](/inputs/radio) inputs)

The value of a checkbox input with multiple `options` is an array of the selected values.

### Array of strings

The simplest way to provide options is an array of strings. The provided strings will be used for both the label and the value of the option.

<example
name="Checkbox input"
file="/_content/examples/checkbox-strings/checkbox-strings"
langs="vue"></example>

### Value / Label object

You may also provide the `options` prop where the keys are values and the values of each property are labels.

<example
name="Checkbox input"
file="/_content/examples/checkbox-object/checkbox-object"
langs="vue"></example>

### Array of objects

The most flexible way to define options is by providing an array of objects. The objects _must_ include `value` and `label` properties — but may also include a `help` property as well as an `attrs` object of additional attributes to apply to each checkbox input tag.

<example
name="Checkbox input"
file="/_content/examples/checkbox-objects/checkbox-objects"
langs="vue"></example>

## Props & Attributes

<reference-table input="checkbox" :data="[{prop: 'options', type: 'Array/Object', default: '[]', description: 'An object of value/label pairs or an array of strings, or an array of objects that <em>must</em> contain a label and value property.'}, { prop: 'on-value', type: 'any', default: 'true', description: 'The value when the checkbox is checked (single checkboxes only).'}, { prop: 'off-value', type: 'any', default: 'false', description: 'The value when the checkbox is unchecked (single checkboxes only).'}]">
</reference-table>

## Composition keys

<reference-table type="compositionKeys" primary="composition-key" :data="[{'composition-key': 'decorator', description: 'Responsible for the element immediately following the input element — usually used for styling.'}, { 'composition-key': 'legend', description: 'Responsible for the fieldset’s legend element.'}, {'composition-key': 'fieldset', description: 'Responsible for the fieldset when multiple options are available.'}, {'composition-key': 'option', description: 'Responsible for the wrapper around each item in the options.'}, {'composition-key': 'options', description: 'Responsible for the wrapper element around all of the option items.'},{'composition-key': 'option', description: 'Responsible for the wrapper around each item in the options.'}]">
</reference-table>