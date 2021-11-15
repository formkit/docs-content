# Group input

The `group` input allows you to structure data from child inputs as an object. The group itself outputs no markup (by default) and can be used in conjunction with any other type of input — including nested [groups](/inputs/groups) and lists. The object keys are the names of the inputs, and the object’s values are each input’s value.

<example
name="Group input"
file="/_content/examples/group/group"
langs="vue"></example>

## Props & Attributes

The `group` input has no unique props but can make use of some of the following universal FormKit props.

<reference-table input="group" :without="['help', 'label', 'validation', 'validation-behavior', 'validation-label']">
</reference-table>

## Composition keys

<reference-table type="compositionKeys" primary="composition-key" :without="['outer','label','inner','input','help','messages','message']">
</reference-table>

## Available utilities

[TK] - Masks

[TK] - Casts
