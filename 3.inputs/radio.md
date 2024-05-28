---
title: Radio Input
description: A native HTML radio input with support for one or many nested options elements.
navigation:
  title: 'Radio'
---

:InputPageHero

The `radio` input uses HTML's [native radio inputs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio) to allow a user to select one value from a series of options. The `options` prop is required for radio inputs and can be provided in 3 ways:

- An array of strings
- An object of value/label pairs
- An array of objects with `label` and `value` properties (the same as the [checkbox](/inputs/checkbox) and [select](/inputs/select) inputs)

### Array of strings

The simplest way to provide options is an array of strings. The provided strings will be used for both the label and the value of the option.

::Example
---
name: "Radio input"
file: "_examples/radio-strings/radio-strings.vue"
---
::


### Value / Label object

You may also provide the `options` prop where the keys are values and the values of each property are labels.

::Example
---
name: "Radio input"
file: "_examples/radio-object/radio-object.vue"
---
::


### Array of objects

The most flexible way to define options is by providing an array of objects. The objects _must_ include `value` and `label` properties — but may also include a `help` property as well as an `attrs` object of additional attributes to apply to each radio input tag.

::Example
---
name: "Radio input"
file: "_examples/radio-objects/radio-objects.vue"
---
::

## Props & Attributes

::ReferenceTable
---
input: "radio" 
without: ['prefix-icon', 'suffix-icon'] 
data: [
  {
    prop: "decorator-icon",
    type: "String",
    default: "’’",
    description:
      "Specifies <a href='/essentials/icons'>an icon</a> to put in the <code>decoratorIcon</code> section. Shows when the radio is checked. Defaults to the <code>radioDecorator</code> icon.",
  },
  {
    prop: "options",
    type: "Array/Object",
    default: "[]",
    description:
      "An object of value/label pairs or an array of strings, or an array of objects that <em>must</em> contain a label and value property.",
  },
]
---
::


## Sections

:SectionKeysIntro

::FormKitInputDiagram
---
class: "input-diagram--radio radio-multiple"
schema: [
  {
    name: "outer",
    children: [
      {
        name: "fieldset",
        children: [
          {
            name: "legend",
            content: "Mowing time preference",
            class: "margin-collapse",
            position: "right",
          },
          {
            name: "help",
            content: "Choose which time is least disruptive to you.",
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
                                content: "🔘",
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
                        content: "Morning",
                        position: "right",
                        class: "margin-standard center-vert"
                      }
                    ]
                  },
                  {
                    name: "optionHelp",
                    content: "We`ll come between 7-11 am on Tuesdays.",
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
without: ["prefixIcon", "suffixIcon"] 
data: [
  {
    "section-key": "decorator",
    description:
      "Responsible for the element immediately following the input element — usually used for styling.",
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
    "section-key": "options",
    description:
      "Responsible for the wrapper element around all of the option items.",
  },
  {
    "section-key": "option",
    description: "Responsible for the wrapper around each item in the options.",
  },
]
---
::

## Accessibility

All FormKit inputs are designed with the following accessibility considerations in mind. Help us continually improve accessibility for all by filing accessibility issues [here](https://github.com/formkit/formkit/issues/new?assignees=&labels=%F0%9F%90%9B+bug-report%2C%E2%9B%91+Needs+triage&projects=&template=bug-report.yml): 

:AccessibilityChecks

### Accessibility attributes

### Single radio

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

### Multiple radio

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
    description: "Selects the currently focused radio input."
  }
]
---
::
