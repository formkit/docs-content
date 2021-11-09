# Select input

The select input uses html's [native select element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select). Select inputs can be single value selections, or multi-value sections by using the `multiple` attribute.

There are 4 ways to provide options to a select input:

- A object with value to label pairs
- An array of strings
- An array of objects with a `label` and `value` property, and optionally an `attrs` property.
- Using `<option>` tags directly inside the `default` slot.

### Value / Label Object

<example
name="Select input"
file="/_content/examples/select/select"
langs="vue"></example>

### Array of strings

<example
name="Select input - strings"
file="/_content/examples/select-strings/select-strings"
langs="vue"></example>

### Array of objects

<example
name="Select input - objects"
file="/_content/examples/select-objects/select-objects"
langs="vue"></example>

<callout type="tip" label="Option attributes">
To pass additional attributes to each <code>&lt;option&gt;</code> element your object can also contain an <code>attrs</code> property.<br><br>
<code class="block">[
  {
    label: 'My Label',
    value: 'a-value',
    attrs: {
      disabled: true
    }
  }
]</code>
</callout>

### Default slot

Sometimes it is necessary to manually output the contents of a select list in order to create specialized structures. This can be done by using the `default` slot and explicitly outputting your options.

<example
name="Select input - objects"
file="/_content/examples/select-slot/select-slot"
langs="vue"></example>

<callout type="warning">
When using the default slot to output options you cannot use the <code>placeholder</code> or <code>options</code> prop, but they will be available in the <a href="/essentials/context">context object</a> which is exposed to the default slot.
</callout>

<!-- ## Multiple

The native `select` input also supports a `multiple` attribute that allows for multi-selection. When used with FormKit, this option produces an array of values.

<example
name="Select input - objects"
file="/_content/examples/select-multiple/select-multiple"
langs="vue"></example> -->

## Props & Attributes

<reference-table input="select" :data="[{prop: 'options', type: 'Array/Object', default: '[]', description: 'An object of value/label pairs or an array of strings, or an array of objects that <em>must</em> contain a label and value property.'},{prop: 'placeholder', type: 'String', default: 'none', description: 'When defined FormKit injects a non-selectable hidden <code>option</code> tag as the first value of the list to serve as a placeholder.'}]">
</reference-table>

## Composition keys

<reference-table type="compositionKeys" primary="composition-key" :data="[{'composition-key': 'option', description: 'Responsible for rendering each option. Context includes an <code>option</code> property with the option being rendered. This object includes <code>label</code> and <code>value</code> properties.'}]">
</reference-table>

## Available utilities

[TK] - Masks

[TK] - Casts
