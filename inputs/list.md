# List input

The `list` input allows you to structure data from child inputs as an array. The list itself outputs no markup (by default) and can be used in conjuction with any other type of input — including nested [groups](/inputs/groups) and lists.

<example
name="List input"
file="/_content/examples/list/list"
langs="vue"></example>

<callout type="tip" label="Performance & v-model">
Vue’s handy <code>v-model</code> is fully supported in FormKit with bi-direction data flow even on lists and groups. However, if your form needs extremely high performance consider using the <a href="/essentials/core">core node</a> to read/write instead of v-model.
</callout>

## Validity of children

In addition to structure data, lists can determine the validation state, provide initial values, and supply plugins and configuration to all of its children.

<example
name="List input"
file="/_content/examples/list-validity/list-validity"
langs="vue"></example>

## Props & Attributes

The `list` input has no unique props but can make use of the following universal
FormKit props.

<reference-table input="list" :without="['help', 'label', 'validation', 'validation-behavior', 'validation-label']">
</reference-table>

## Composition keys

<reference-table type="compositionKeys" primary="composition-key" :without="['outer','label','inner','input','help','messages','message']">
</reference-table>

## Available utilities

[TK] - Masks

[TK] - Casts
