---
title: Repeater Input
description: A Pro input that allows users to add, remove, and re-arrange repeatable input groups.
---

<InputPageHero title="Repeater"></InputPageHero>

<ProInstallSnippet></ProInstallSnippet>

## Base example
The `repeater` input is used for repeating groups of inputs. Any number of FormKit inputs can be used within a repeater, and repeaters themselves can be infinitely nested.

The repeater input by default has the ability to shift, add, and remove items:

<example
name="Repeater"
file="/_content/examples/repeater/repeater-base.vue"></example>

Unlike most other FormKit input types, the repeater input is of type [list](/inputs/list). You can see above that the `users` property (our repeater's value) is an array.

## Add button attrs

In the example above, the 'Add Users' button is provided to us by default and its label is derived from the value of the label on the repeater. We can remove the button altogether by setting the `addButton` prop to `false`. We can also provide a custom label by setting the `addLabel` prop to a string, or, similarly to the `submitAttrs` prop on the [FormKit's forms](/essentials/forms), we can provide an object of attributes to be applied to the button with `addAttrs`. In this example, we are simply going to change the label of the repeater from `Add Users` to `My custom label` using the `addLabel` prop:

<example
name="Repeater"
file="/_content/examples/repeater/repeater-add-button-attrs.vue"></example>

## Min/max

Like a number of other FormKit inputs, the repeater comes with a `min` and `max` prop that can be used to limit the number of items that can be added or removed.

<example
name="Repeater"
file="/_content/examples/repeater/repeater-min-max.vue"></example>

## Controls

The repeater input by default comes with a set of controls that allow you to shift, add, and remove items. You can control the visibility of these controls by setting the `upControl`, `downControl`, `insertControl`, and `removeControl` props to `true` or `false`.

<example
name="Repeater"
file="/_content/examples/repeater/repeater-insert-control.vue"></example>

## Custom controls

With FormKit's repeater, you are not restricted to our default controls. You can manipulate the repeater anyway you want:

<example
name="Repeater"
file="/_content/examples/repeater/repeater-controls.vue"></example>

## Setting errors

You can set errors on a repeater or any repeated item inside using dot notation. Here we are using the
[`setErrors`](/essentials/forms#using-nodeseterrors) helper, but there are other methods as well:

<client-only>


```js
// the 2nd argument of setErrors is input-level errors
formNode.setErrors( null, // no form errors,
  {
    // error on the repeater field:
    'teamMembers': ['There was a problem with at least 1 of your team members.']

    // error on a specific repeater item:
    'teamMembers.1.email': ['emily@formkit.com may not be on more than 1 team'],
  }
)
```

</client-only>

Remember, your submit handler is passed the form's core `node` and can be used
to conveniently set errors at depth. Read more about error handling
[here](/essentials/forms#error-handling). Here's an example of a fake backend
returning errors for both the repeater and one child:

<example
  name="Repeater"
  file="/_content/examples/repeater/errors/repeater-errors.vue"></example>


## Props & Attributes

<reference-table input="rating" :data="[
{prop: 'add-label', type: 'string', default: 'null', description: 'Used to change the label of the add button.'}, {prop: 'add-attrs', type: 'object', default: {}, description: 'Used to apply attributes to the add button element.'}, {prop: 'add-button', type: 'boolean', default: 'true', description: 'Conditional for whether to show the add button.'}, {prop: 'up-control', type: 'boolean', default: 'true', description: 'Conditional for whether to show the up control.'}, {prop: 'down-control', type: 'boolean', default: 'true', description: 'Conditional for whether to show the down control.'}, {prop: 'insert-control', type: 'boolean', default: 'false', description: 'Conditional for whether to show the insert control.'}, {prop: 'remove-control', type: 'boolean', default: 'true', description: 'Conditional for whether to show the remove control.'}, {prop: 'min', type: 'Number', default: '0', description: 'The minimum number of children.'}, {prop: 'max', type: 'Number', default: 'null', description: 'The maximum number of children.'}]">
</reference-table>

## Section keys

You can target a specific section of an input using that section's "key". Read more about sections [here](/essentials/inputs#sections).

<div>
  <formkit-input-diagram />
</div>

<reference-table type="sectionKeys" primary="section-key" :without="[]">
</reference-table>
