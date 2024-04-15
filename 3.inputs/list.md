---
title: List Input
description: An invisible FormKit input that allows you to logically structure your form data as an array.
navigation:
  title: 'list'
---

::InputPageHero
---
type: "List"
---
::

The `list` input allows you to structure data from child inputs as an array. The list itself outputs no markup (by default) and can be used in conjunction with any other type of input — including nested [groups](/inputs/group) and lists.

The value of a list input is an array where each item is the value of the input at that index. Sub-inputs do not need to be of the same type. In addition to structuring data, lists can determine the validation state, provide initial values, and supply plugins and configuration to all of its children.

## Basic example

::Example
---
name: "List input"
file: "_content/_examples/list/list.vue"
---
::


::Callout
---
type: "tip"
label: "Performance"
---
Vue’s handy <code>v-model</code> is fully supported in FormKit with bi-directional data flow even on lists and groups. However, if your form needs extremely high performance consider using the <a href="/essentials/architecture">core node</a> to read/write instead of v-model.
::


## List types

There are 2 flavors of lists:

- [**Static lists (default)**](#static-lists) have pre-determined children. They should not be used for iterating over values or adding/removing items.
- [**Dynamic lists**](#dynamic-lists) allow iteration over the list’s value to create its children. They are useful for creating dynamic-length lists like repeaters.

### Static lists

Static lists are the simplest type of list to create. Wrap any inputs in a `<FormKit type="list">` and those inputs will automatically be set as values of their array. Immediate children of lists do not have a name (even if specified) instead they are always identified by their index. In a static list, this index is *stable* and is based on the order of the inputs.

::Example
---
name: "Simple static list"
file: [
  "_content/_examples/list/list-static.vue",
  '_content/_examples/transfer-list/nba-top-players.js'
]
---
::

::Callout
---
type: "warning"
label: "Iterating over the list values"
---
Static lists should not be used for iterating over their own value. While it is
safe to iterate over other arbitrary data iterating over the value of the list
itself will cause recursive rendering and infinite loops. Instead use a dynamic list.
::

### Dynamic lists

Dynamic lists allow you to iterate over the values of the list to create and
hydrate the inputs inside the list. Dynamic lists are useful for creating dynamic array structures like repeaters.

You can mutate the structure of your dynamic list by adding and removing items from the value array. FormKit will automatically update the underlying form structure to match the new value.

In order for dynamic lists to keep your data in sync, you must use `items` from the default slot to create your `v-for` and you must also pass the `index` of the `v-for` as the `index` prop to each item in of the list.

::Callout
---
type: tip
label: FormKit Pro Repeater
---
To use a prebuilt repeater, check out the free [FormKit Pro repeater input](/inputs/repeater).
::

#### Dynamic list example

::Example
---
name: "Dynamic list"
file: "_content/_examples/list/list-dynamic.vue"
---
::

#### Dynamic list with a nested group

::Example
---
name: "Dynamic list"
file: "_content/_examples/list/list-dynamic-nested-group.vue"
---
::

#### Dynamic list using v-model

::Example
---
name: "Dynamic list"
file: [
  "_content/_examples/list/list-dynamic-v-model.vue",
]
---
::

#### Dynamic list in schema

::Example
---
name: "Dynamic list"
file: [
  "_content/_examples/list/list-dynamic-schema.vue",
]
---
::


## Validity of children

Lists (and [groups](/inputs/group)) are always aware of the validation state of their children (including nested children). You can access this data in the [context](/essentials/configuration) object of the input (`context.state.valid`).

::Example
---
name: "List input"
file: "_content/_examples/list-validity/list-validity.vue"
---
::

## Showing error & validation messages

Even though a `list` can have validation rules and input errors, it does not include any functionality to show validation messages and errors by default. The list ships no HTML at all. If you’d like to display those errors — you can add the `<FormKitMessages />` as a child of the `list`.

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
input: "list" 
data: [
  {
    prop: "disabled",
    type: "Boolean",
    default: "false",
    description: "Disables all the inputs in the list.",
  },
  {
    prop: "dynamic",
    type: "Boolean",
    default: "false",
    description: "Enables dynamic mode for the list and provides <code>items</code> in the default slot creating an iterator (<code>v-for</code>).",
  },
]
without: ['help', 'label', 'prefix-icon', 'suffix-icon', 'validation', 'validation-visibility', 'validation-label']
---
::


## Sections

::ReferenceTable
---
type: "sectionKeys"
primary: "section-key"
without: ['outer','prefix', 'wrapper', 'suffix', 'prefixIcon', 'suffixIcon', 'label','inner','input','help','messages','message']
---
::

