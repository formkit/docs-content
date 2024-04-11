---
title: Checkbox Input
description: A native HTML checkbox input with support for one or many nested options elements.
navigation:
  title: 'Checkbox'
---

::InputPageHero
---
type: "Checkbox"
---
::

The `checkbox` input uses HTML's [native checkbox input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox). It can display one or many options to a user and is a great way to allow users to select multiple items from a list. FormKit supports both single and multiple checkbox inputs.

## Single checkbox

By default the checkbox type will render a single checkbox and uses `boolean` values. In order for a single checkbox to be checked — the current value of the input must match the `on-value` of that input (by default, a single checkbox uses `true` as the `on-value`).

::Example
---
name: "Checkbox input"
file: "_content/_examples/checkbox-single/checkbox-single.vue"
---
::


::Callout
---
type: "warning"
label: "Checked Attribute Unnecessary"
---
In order to improve API consistency across all FormKit inputs — FormKit uses the <code>value</code> as the initial state of the input. The <code>checked</code> prop/attribute should not be used directly.
::

## Multiple checkboxes

To output multiple checkboxes with a single input use the `options` prop. Options can be specified 3 ways:

- An array of strings
- An object of value/label pairs
- An array of objects with `label` and `value` properties (the same as the [select](/inputs/select) and [radio](/inputs/radio) inputs)

The value of a checkbox input with multiple `options` is an array of the selected values.

### Array of strings

The simplest way to provide options is an array of strings. The provided strings will be used for both the label and the value of the option.

::Example
---
name: "Checkbox input"
file: "_content/_examples/checkbox-strings/checkbox-strings.vue"
---
::


### Value / Label object

You may also provide the `options` prop where the keys are values and the values of each property are labels.

::Example
---
name: "Checkbox input"
file: "_content/_examples/checkbox-object/checkbox-object.vue"
---
::


### Array of objects

The most flexible way to define options is by providing an array of objects. The objects _must_ include `value` and `label` properties — but may also include a `help` property as well as an `attrs` object of additional attributes to apply to each checkbox input tag.

::Example
---
name: "Checkbox input"
file: "_content/_examples/checkbox-objects/checkbox-objects.vue"
---
::

## Props & Attributes

::ReferenceTable
---
without: ['prefix-icon', 'suffix-icon'] 
input: "checkbox" 
data: [
  {
    prop: "decorator-icon",
    type: "String",
    default: "’’",
    description:
      "Specifies <a href='/essentials/icons'>an icon</a> to put in the <code>decoratorIcon</code> section. Shows when the checkbox is checked. Defaults to the <code>checkboxDecorator</code> icon.",
  },
  {
    prop: "options",
    type: "Array/Object",
    default: "[]",
    description:
      "An object of value/label pairs or an array of strings, or an array of objects that <em>must</em> contain a label and value property.",
  },
  {
    prop: "on-value",
    type: "any",
    default: "true",
    description:
      "The value when the checkbox is checked (single checkboxes only).",
  },
  {
    prop: "off-value",
    type: "any",
    default: "false",
    description:
      "The value when the checkbox is unchecked (single checkboxes only).",
  },
]
---
::


## Sections

The checkbox input has a different construction depending on if it's a single or multiple checkbox.

:SectionKeysIntro

### Single checkbox diagram

::FormKitInputDiagram
---
class: "input-diagram--checkbox checkbox-single"
schema: [
  {
    name: "outer",
    position: "right",
    children: [
      {
        name: "wrapper",
        position: "right",
        children: [
          {
            name: "inner",
            children: [
              {
                name: "prefix",
              },
              {
                name: "input",
              },
              {
                name: "decorator",
                children: [
                  {
                    name: "decoratorIcon",
                    content: "✅",
                  }
                ]
              },
              {
                name: "suffix"
              },
            ]
          },
          {
            name: "label",
            content: "I would like a free t-shirt",
            position: "right",
            class: "center-vert"
          },
        ]
      },
      {
        name: "help",
        content: "We will send a free-shirt if you have this box selected.",
        position: "right"
      },
      {
        name: "messages",
        position: "right",
        children: [
          {
            name: "message",
            content: "You must make a selection.",
            position: "right"
          }
        ]
      }
    ]
  }
]
---
::

### Multiple checkbox diagram

::FormKitInputDiagram
---
class: "input-diagram--checkbox checkbox-multiple"
schema: [
  {
    name: "outer",
    children: [
      {
        name: "fieldset",
        children: [
          {
            name: "legend",
            content: "Topics",
            class: "margin-collapse",
            position: "right",
          },
          {
            name: "help",
            content: "Choose the topics you`d like to learn this year.",
            position: "right",
          },
          {
            name: "options",
            position: "right",
            children: [
              {
                name: "option",
                position: "right",
                children: [
                  {
                    name: "wrapper",
                    position: "right",
                    children: [
                      {
                        name: "inner",
                        children: [
                          {
                            name: "prefix",
                          },
                          {
                            name: "input",
                          },
                          {
                            name: "decorator",
                            children: [
                              {
                                name: "decoratorIcon",
                                content: "✅",
                              }
                            ]
                          },
                          {
                            name: "suffix",
                          },
                        ]
                      },
                      {
                        name: "label",
                        content: "Gardening",
                        position: "right",
                        class: "margin-standard center-vert"
                      }
                    ]
                  },
                  {
                    name: "optionHelp",
                    content: "We`ll be studying soil, plants, and seasons.",
                    position: "right",
                  },
                ]
              }
            ]
          }
        ]
      },
      {
          name: "messages",
          position: "right",
          children: [
            {
              name: "message",
              content: "You must make a selection.",
              position: "right",
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
without: ['prefixIcon', 'suffixIcon'] 
data: [
  {
    "section-key": "decorator",
    description:
      "Responsible for the element immediately following the input element — usually used for styling custom checkboxes.",
  },
  {
    "section-key": "decoratorIcon",
    description: "An element containing the decorator icon.",
  },
  {
    "section-key": "legend",
    description: "Responsible for the fieldset’s legend element.",
  },
  {
    "section-key": "fieldset",
    description:
      "Responsible for the fieldset when multiple options are available.",
  },
  {
    "section-key": "option",
    description: "Responsible for the wrapper around each item in the options.",
  },
  {
    "section-key": "options",
    description:
      "Responsible for the wrapper element around all of the option items.",
  },
]
---
::

## Accessibility

All FormKit inputs are designed with the following accessibility considerations in mind. Help us continually improve accessibility for all by filing accessibility issues [here](https://github.com/formkit/formkit/issues/new?assignees=&labels=%F0%9F%90%9B+bug-report%2C%E2%9B%91+Needs+triage&projects=&template=bug-report.yml): 

:AccessibilityChecks

### Single checkbox

::AccessibilityTable
---
without: ["label"]
data: [
  {
    sectionKey: "decorator",
    attributes: [
      { attribute: "aria-hidden", value: "true", description: "Hides the decorator from screen readers." }
    ]
  }
]
---
::

### Multiple checkbox

::AccessibilityTable
---
without: ["label"]
data: [
  {
    sectionKey: "fieldset",
    attributes: [
      { attribute: "aria-describedby", description: "Associates an element with a description, aiding screen readers." },
    ]
  },
  {
    sectionKey: "decorator",
    attributes: [
      { attribute: "aria-hidden", value: "true", description: "Hides the decorator from screen readers." }
    ]
  }
]
---
::

### Keyboard Interactions

::KeyboardEventsTable
---
data: [
  {
    event: ["space"],
    description: "Enable checkbox toggling whenever the input is in focus."
  }
]
---
::
