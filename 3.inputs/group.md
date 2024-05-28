---
title: Group Input
description: An invisible FormKit input that allows you to logically structure your form data as an object.
navigation:
  title: 'Group'
---

:InputPageHero

::Callout
---
type: "warning"
label: "Renderless Input"
---
The `group` input does not render any output to the DOM. It is used exclusively for structuring data in your form. It is equivalent to an object in JavaScript.
::

The `group` input allows you to structure data from child inputs as an object. The group itself outputs no markup by default and can be used in conjunction with any other type of input — including nested groups and [lists](/inputs/list).

The value of a group input is an object where the keys are the names of the inputs, and the object’s values are each input’s value. In addition to structuring data, groups can determine the validation state, provide initial values, and supply plugins and configuration to all of its children.

## An example

::Example
---
name: "Group input"
file: "_examples/group/group.vue"
---
::


## Validity of children

Groups are always aware of the validation state of their children (including nested children). You can access this data in the [context](/essentials/configuration) object of the input (`context.state.valid`).

::Example
---
name: "Group input"
file: "_examples/group-validity/group-validity.vue"
---
::


## Showing error & validation messages

Even though a `group` can have validation rules and input errors, it does not include any functionality to show validation messages and errors by default. The group ships no HTML at all. If you’d like to display those errors — you can add the `<FormKitMessages />` as a child of the `group`.

::Callout
---
type: "tip"
label: "Configuration"
---
Further documentation on the <code>FormKitMessages</code> component can be found on the <a href="/inputs/form#moving-validation-and-error-messages">form documentation page</a>.
::

## Props & Attributes

::ReferenceTable
---
input: "group" 
data: [
  {
    prop: "disabled",
    type: "Boolean",
    default: "false",
    description: "Disables all the inputs in the group.",
  },
]
without: ['help', 'label', 'prefix-icon', 'suffix-icon', 'validation', 'validation-visibility', 'validation-label']
---
::


## Sections

The `group` input renders no output to the DOM so there are no sections to display. The `group` input is a renderless input that is used exclusively for structuring data in your form. It is equivalent to an object in JavaScript.

