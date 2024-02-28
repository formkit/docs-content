---
title: Repeater Input
description: A Pro input that allows users to add, remove, and re-arrange repeatable input groups.
---

::InputPageHero
---
type: "Repeater"
---
::

:PageToc

:ProInstallSnippet

## Basic example

The `repeater` input is for repeating groups of inputs. You can use any number of FormKit inputs within a repeater, and repeaters themselves can be infinitely nested.

By default, the repeater input has the ability to shift, add, and remove items:

::Example
---
name: "Repeater"
file: "_content/_examples/repeater/repeater-base.vue"
---
::


Unlike most other FormKit input types, the repeater input is of type [list](/inputs/list). You can see above that the `users` property (our repeater's value) is an array.

## Schema example

Like all other FormKit inputs, the Repeater is able to be used in a form written in FormKit [schema](/essentials/schema).

::Example
---
name: "Repeater"
file: "_content/_examples/repeater/repeater-schema.vue"
---
::

## Add button attrs

In the previous example, the 'Add Users' button is provided by default, and the button label is derived from the repeater's `label`. We're able to customize the label by using the `add-button` prop and setting it to a `string`, or remove it completely by setting it to `false`. Alternatively, similar to the `submit-attrs` prop on the [FormKit's forms](/inputs/form), we can provide an object of attributes to be applied to the button with `add-attrs`. In this example, we change the label of the repeater from `Add Users` to `My custom label` using the `add-label` prop:

::Example
---
name: "Repeater"
file: "_content/_examples/repeater/repeater-add-button-attrs.vue"
---
::


## Min/max

Like many other FormKit inputs, the repeater comes with a `min` and `max` prop. You can use these props to limit the number of items to be added or removed.

::Example
---
name: "Repeater"
file: "_content/_examples/repeater/repeater-min-max.vue"
---
::

## Empty state

When a repeater is allowed to be empty by having its `min` prop set to `0` and having no values, you can control the content rendered in the empty state using the `empty` slot.

::Example
---
name: "Repeater"
file: "_content/_examples/repeater/repeater-empty-state.vue"
---
::


## Controls

The repeater input by default comes with a set of controls that allow you to shift, add, and remove items. You can control the visibility of these controls by setting the `upControl`, `downControl`, `insertControl`, and `removeControl` props to `true` or `false`.

::Example
---
name: "Repeater"
file: "_content/_examples/repeater/repeater-insert-control.vue"
---
::


## Custom controls

With FormKit's repeater, you are not restricted to our default controls. You can manipulate the repeater in anyway you want:

::Example
---
name: "Repeater"
file: "_content/_examples/repeater/repeater-controls.vue"
---
::


## Setting errors

You can set errors on a repeater or any repeatable item using dot notation. Here we are using the
[`setErrors`](/inputs/form#using-nodeseterrors) helper, but there are other methods as well:

```js
// the 2nd argument of setErrors is input-level errors
formNode.setErrors( null, // no form errors,
  {
    // error on the repeater field:
    'teamMembers': ['There was a problem with 1 of your team members.']

    // error on a specific repeater item:
    'teamMembers.1.email': ['emily@formkit.com is already on a team.'],
  }
)
```

Remember, your submit handler is passed the form's core `node` and can be used
to conveniently set errors at depth. Read more about error handling
[here](/inputs/form#error-handling). Here's an example of a fake backend
returning errors for both the repeater and one child:

::Example
---
name: "Repeater"
file: "_content/_examples/repeater/errors/repeater-errors.vue"
---
::

## Props & Attributes

::ReferenceTable
---
input: "rating" 
data: [
  {
    prop: "add-label",
    type: "string",
    default: "null",
    description: "Used to change the label of the add button.",
  },
  {
    prop: "add-attrs",
    type: "object",
    default: {},
    description: "Used to apply attributes to the add button element.",
  },
  {
    prop: "add-button",
    type: "boolean",
    default: "true",
    description: "Conditional for whether to show the add button.",
  },
  {
    prop: "up-control",
    type: "boolean",
    default: "true",
    description: "Conditional for whether to show the up control.",
  },
  {
    prop: "down-control",
    type: "boolean",
    default: "true",
    description: "Conditional for whether to show the down control.",
  },
  {
    prop: "insert-control",
    type: "boolean",
    default: "false",
    description: "Conditional for whether to show the insert control.",
  },
  {
    prop: "remove-control",
    type: "boolean",
    default: "true",
    description: "Conditional for whether to show the remove control.",
  },
  {
    prop: "min",
    type: "Number",
    default: "1",
    description: "The minimum number of children.",
  },
  {
    prop: "max",
    type: "Number",
    default: "null",
    description: "The maximum number of children.",
  },
]
---
::


## Sections

:SectionKeysIntro

::FormKitInputDiagram
---
hide-on-small: true
class: "input-diagram--autocomplete-outer autocomplete-option-single"
schema: [
  {
    name: "outer",
    children: [
      {
        name: "fieldset",
        children: [
          {
            name: "legend",
            content: "Guests",
            class: "center-vert",
          },
          {
            name: "help",
            content: "Note guests you will bring to the race track.",
          },
          {
            name: "inner",
            children: [
              {
                name: "prefix",
                class: "tiny-section"
              },
              {
                name: "items",
                class: "flex-grow",
                children: [
                  {
                    name: "item",
                    class: "flex",
                    children: [
                      {
                        name: "content",
                        class: "flex-grow",
                        content: "Repeated fields here."
                      },
                      {
                        name: "controls",
                        class: "",
                        position: "right",
                        children: [
                          {
                            name: "up",
                            position: "right",
                            class: "small-pad spacing-bottom",
                            children: [
                              {
                                name: "upControl",
                                position: "right",
                                class: "small-pad flex",
                                children: [
                                  {
                                    name: "controlLabel",
                                    position: "right",
                                    class: "small-pad tiny-section"
                                  },
                                  {
                                    name: "moveUpIcon",
                                    position: "right",
                                    content: "↑",
                                    class: "small-pad flex-grow"
                                  }
                                ]
                              },
                            ]
                          },
                          {
                            name: "remove",
                            position: "right",
                            class: "small-pad spacing-bottom",
                            children: [
                              {
                                name: "removeControl",
                                class: "small-pad flex",
                                position: "right",
                                children: [
                                  {
                                    name: "controlLabel",
                                    position: "right",
                                    class: "small-pad tiny-section"
                                  },
                                  {
                                    name: "removeIcon",
                                    position: "right",
                                    content: "🗑",
                                    class: "small-pad"
                                  }
                                ]
                              },
                            ]
                          },
                          {
                            name: "insert",
                            position: "right",
                            class: "small-pad spacing-bottom",
                            children: [
                              {
                                name: "insertControl",
                                class: "small-pad flex",
                                position: "right",
                                children: [
                                  {
                                    name: "controlLabel",
                                    position: "right",
                                    class: "small-pad tiny-section"
                                  },
                                  {
                                    name: "addIcon",
                                    position: "right",
                                    content: "➕",
                                    class: "small-pad"
                                  }
                                ]
                              },
                            ]
                          },
                          {
                            name: "down",
                            class: "small-pad spacing-bottom",
                            position: "right",
                            children: [
                              {
                                name: "downControl",
                                class: "small-pad flex",
                                position: "right",
                                children: [
                                  {
                                    name: "controlLabel",
                                    position: "right",
                                    class: "small-pad tiny-section"
                                  },
                                  {
                                    name: "moveDownIcon",
                                    position: "right",
                                    content: "↓",
                                    class: "small-pad"
                                  }
                                ]
                              },
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                name: "suffix",
                position: "right",
                class: "tiny-section"
              },
            ]
          },
          {
            name: "addButton",
            class: "button button--pro margin-collapse",
            content: "Add guest"
          }
        ]
      },
      {
        name: "messages",
        children: [
          {
            name: "message",
            content: "Sorry, you may not add more than 3 guests.",
          }
        ]
      }
    ]
  }
]
---
::

::ReferenceTable
---
type: "sectionKeys"
primary: "section-key" 
data: [
  {
    "section-key": "fieldset",
    description: "A fieldset element that acts as the repeater’s wrapper."
  },
  {
    "section-key": "legend",
    description: "A legend element that renders the label."
  },
  {
    "section-key": "items",
    description: "A ul element that wraps the repeater’s items."
  },
  {
    "section-key": "item",
    description: "A li element that is rendered for each repeater item."
  },
  {
    "section-key": "content",
    description: "A container for the group section."
  },
  {
    "section-key": "group",
    description: "Does not render an element. It structures the default slot into an object data structure. "
  },
  {
    "section-key": "controls",
    description: "A ul element that wraps the repeater’s controls."
  },
  {
    "section-key": "controlLabel",
    description: "A span element that renders the label of the given control."
  },
  {
    "section-key": "up",
    description: "A li element that renders the up control."
  },
  {
    "section-key": "upControl",
    description: "A button element that renders the up control."
  },
  {
    "section-key": "moveUpIcon",
    description: "A span element that renders the upControl’s icon."
  },
  {
    "section-key": "down",
    description: "A li element that renders the down control."
  },
  {
    "section-key": "downControl",
    description: "A button element that renders the down control."
  },
  {
    "section-key": "moveDownIcon",
    description: "A span element that renders the downControl’s icon."
  },
  {
    "section-key": "insert",
    description: "A li element that renders the insert control."
  },
  {
    "section-key": "insertControl",
    description: "A button element that renders the insert control."
  },
  {
    "section-key": "insertIcon",
    description: "A span element that renders the insertControl’s icon."
  },
  {
    "section-key": "remove",
    description: "A li element that renders the remove control."
  },
  {
    "section-key": "removeControl",
    description: "A button element that renders the remove control."
  },
  {
    "section-key": "removeIcon",
    description: "A span element that renders the removeControl’s icon."
  },
]
---
::

## Accessibility

All FormKit inputs are designed with the following accessibility considerations in mind. Help us continually improve accessibility for all by filing accessibility issues [here](https://github.com/formkit/formkit/issues/new?assignees=&labels=%F0%9F%90%9B+bug-report%2C%E2%9B%91+Needs+triage&projects=&template=bug-report.yml): 

:AccessibilityChecks

::AccessibilityTable
---
without: ["input", "label", "icon"]
data: [
  {
    sectionKey: "items",
    attributes: [
      { attribute: "role", value: "list", description: "Indicates to assistive technologies that this element functions as a list." },
    ]
  },
  {
    sectionKey: "item",
    attributes: [
      { attribute: "role", value: "listitem", description: "Indicates to assistive technologies that this element functions as a list." },
    ]
  },
]
---
::

### Keyboard Interactions

:KeyboardEventsTable
