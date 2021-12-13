<InputPageHero
title="Group input"
icon="IconInputGroup"
:pro="false"
project-price=""
data-price=""></InputPageHero>

The `group` input allows you to structure data from child inputs as an object. The group itself outputs no markup (by default) and can be used in conjunction with any other type of input — including nested groups and [lists](/inputs/list).

The value of a group input is an object where the keys are the names of the inputs, and the object’s values are each input’s value. In addition to structuring data, groups can determine the validation state, provide initial values, and supply plugins and configuration to all of its children.

<example
name="Group input"
file="/_content/examples/group/group"
langs="vue"></example>

## Validity of children

Groups are always aware of the validation state of their children (including nested children). You can access this data in the [context](/advanced/context) object of the input (`context.state.valid`).

<example
name="Group input"
file="/_content/examples/group-validity/group-validity"
langs="vue"></example>

## Props & Attributes

<reference-table input="group" :data="[{ prop: 'disabled', type: 'Boolean', default: 'false', description: 'Disables all the inputs in the group.'}]" :without="['help', 'label', 'validation', 'validation-behavior', 'validation-label']">
</reference-table>

## Composition keys

<reference-table type="compositionKeys" primary="composition-key" :without="['outer','label','inner','input','help','messages','message']">
</reference-table>
