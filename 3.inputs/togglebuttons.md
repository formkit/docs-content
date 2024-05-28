---
title: Toggle Buttons
description: The toggle buttons are used to choose between one or more choices with a button aesthetic.
navigation:
  title: 'Toggle Buttons'
  pro: true
  free: true
  new: true
---

:InputPageHero

:ProInstallSnippet

## Toggle Buttons

To output multiple toggle buttons use the `options` prop. Options can be specified 3 ways:

- An array of strings
- An object of value/label pairs
- An array of objects with `label` and `value` properties (the same as the [select](/inputs/select) and [radio](/inputs/radio) inputs).
  - Additional parameters can be passed to set `disabled`, `help`, `onLabel`, and/or `offLabel` on a per option basis.

::Example
---
name: "Toggle Buttons Simple Options"
file: "_examples/togglebuttons/togglebuttons-multiple-basic.vue"
---
::

## Behavioral props

### Multiple

The `togglebuttons` input, by default, only allows one option to be selected. You can change this behavior by setting the `multiple` prop which will then allow the selection of multiple options:

::Example
---
name: "Multiple"
file: "_examples/togglebuttons/togglebuttons-multiple.vue"
---
::

### Enforced

By default `togglebuttons` will allow you to select and deselect allowing for an off state. With the `enforced` prop enabled once a user has interacted with the input, one value will always be set much like that of a radio input.

::Example
---
name: "Multiple"
file: "_examples/togglebuttons/togglebuttons-single-enforced.vue"
---
::

### Vertical

Assuming you are using the default FormKit styles, the `vertical` prop applies dataset attributes and styling to stack toggle buttons in a vertical orientation.

::Example
---
name: "Vertical"
file: "_examples/togglebuttons/togglebuttons-vertical.vue"
---
::

More prop examples and combinations:

::Example
---
name: "Toggle Buttons Multiple Enforced"
file: "_examples/togglebuttons/togglebuttons-enforced.vue"
---
::

## Standalone Toggle

### Standalone basic example

The `togglebuttons` input offers choices between one or more values; it's a great option when you want the user to toggle a feature on or off, between choices or allow multiple selections.

::Example
---
name: "Single Toggle Button"
file: "_examples/togglebuttons/togglebuttons-simple.vue"
---
::


### Standalone Toggle On/Off Values

The values for the toggle buttons are `undefined` if not-interacted with, `true` if checked, and `false` if unchecked. You can change these values by passing the `onValue` and `offValue` props. In this example, we will set the `onValue` to the string `'active'` and the `offValue` to the string `'inactive'`:

::Example
---
name: "On / Off Values"
file: "_examples/togglebuttons/togglebuttons-basic-values.vue"
---
::

### Standalone On/Off labels

Additionally, you may specify secondary labels by setting the `on-label` and the `off-label` props. These values are conditionally shown based on the on/off state of the toggle. The value labels render to the right of the toggle input. The "primary label" will be moved to input label position above the toggle when value labels are used:

::Example
---
name: "On / Off Labels"
file: "_examples/togglebuttons/togglebuttons-value-labels.vue"
---
::

## Slots

### Toggle Button Slots

For multiple options you can use the `default` slot to set the toggle's content.

::Example
---
name: "Toggle Buttons Options Slot"
file: "_examples/togglebuttons/togglebuttons-options-slots.vue"
---
::

### Standalone Toggle Slots

For a single toggle you can use the default slot for setting the toggle content. Also available are `on` and `off` slots to change the content based on whether the toggle is activated or not.

::Example
---
name: "Toggle Buttons Default Slot"
file: "_examples/togglebuttons/togglebuttons-single-slots.vue"
---
::

## Props & Attributes

::ReferenceTable
---
input: "togglegroups" 
data: [
  {
    prop: "off-value",
    type: "any",
    default: "false",
    description: "The value when the toggle is unchecked. <br><em>For use with standalone toggle buttons only.</em>",
  },
  {
    prop: "on-value",
    type: "any",
    default: "true",
    description: "The value when the toggle is checked. <br><em>For use with standalone toggle buttons only.</em>",
  },
  {
    prop: "off-label",
    type: "String",
    default: "undefined",
    description: "The text of the button label when the toggle is unchecked. <br><em>For use with standalone toggle buttons only.</em>",
  },
  {
    prop: "on-label",
    type: "String",
    default: "undefined",
    description: "The text of the button label when the toggle is checked. <br><em>For use with standalone toggle buttons only.</em>",
  },
  {
    prop: "options",
    type: "Array/Object",
    default: "[]",
    description:
      "An object of value/label pairs or an array of strings, or an array of objects that <em>must</em> contain a label and value property. Additional props include: <code>disabled</code>, <code>help</code>, <code>onLabel</code> and <code>offLabel</code>",
  },
  {
    prop: "multiple",
    type: "Boolean",
    default: "false",
    description: "Allows for selecting multiple options. <br><em>For use with multiple toggle buttons only.</em>",
  },
  {
    prop: "enforced",
    type: "Boolean",
    default: "false",
    description: "Makes sure at least one selection remains selected once field is activated. <br><em>For use with multiple toggle buttons only.</em>",
  },
  {
    prop: "vertical",
    type: "Boolean",
    default: "false",
    description: "Applies data attributes and styling to stack toggle buttons in a vertical orientation. <br><em>For use with multiple toggle buttons only.</em>",
  },
]
---
::


## Sections & slot data

The toggle buttons input has a different construction depending on if it's a single or multiple configuration.

:SectionKeysIntro

### Single toggle button diagram

::FormKitInputDiagram
---
class: "input-diagram--togglebuttons-single"
schema: [
  {
    name: "outer",
    position: "right",
    children: [
      {
        name: "wrapper",
        children: [
          {
            name: "singleToggle",
            children: [
              {
                name: "prefixIcon",
              },
              {
                name: "prefix",
              },
              {
                name: "inputInner",
                content: "Toggle Button Text Here",
              },
              {
                name: "suffix",
                position: "right",
              },
              {
                name: "suffixIcon",
                position: "right",
              },
            ]
          },
        ]
      },
      {
        name: "help",
        content: "Add some help text about this toggle",
        position: "right"
      },
      {
        name: "messages",
        position: "right",
        children: [
          {
            name: "message",
            content: "Validation message would be here",
            position: "right"
          }
        ]
      }
    ]
  }
]
---
::

### Multiple toggle button diagram

::FormKitInputDiagram
---
class: "input-diagram--togglebuttons-multiple"
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
            name: "options",
            children: [
              {
                name: "option",
                children: [
                  {
                    name: "multiToggle",
                    children: [
                      {
                        name: "inputInner",
                        content: "Toggle Button Text Here",
                      }
                    ]
                  },
                ]
              }
            ]
          }
        ]
      },
      {
        name: "help",
        content: "Add some help text about this toggle",
        position: "right"
      },
      {
        name: "messages",
        position: "right",
        children: [
          {
            name: "message",
            content: "Validation message would be here",
            position: "right"
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
    "section-ley": "singleToggle",
    description: "Button wrapper for the single toggle button"
  },
  {
    "section-ley": "multiToggle",
    description: "Button wrapper for a toggle button when multiple toggle buttons exist"
  },
  {
    "section-key": "inputInner",
    description: "Button inner text for a toggle button"
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

### Accessibility attributes

### Single toggle button

::AccessibilityTable
---
without: ["input"]
data: [
  {
    sectionKey: "singleToggle",
    attributes: [
      { attribute: "aria-label", description: "Provides an accessible name." },
      { attribute: "aria-pressed", description: "Indicates the pressed state of toggle button." },
      { attribute: "role", value: "checkbox", description: "Indicates to assistive technologies that this element functions as a checkbox." },
    ]
  }
]
---
::

### Multiple toggle buttons

::AccessibilityTable
---
without: ["input", "icon"]
data: [
  {
    sectionKey: "multiToggle",
    attributes: [
      { attribute: "aria-label", description: "Provides an accessible name." },
      { attribute: "aria-pressed", description: "Indicates the pressed state of toggle button." },
      { attribute: "role", value: "checkbox or radio", description: "Indicates to assistive technologies that this element functions as a checkbox if has options or radio if not." },
    ]
  },
  {
    sectionKey: "options",
    attributes: [
      { attribute: "role", value: "group", description: "Indicates to assistive technologies that this element functions as a group." },
      { attribute: "aria-labelledby", description: "Associates this element as a label for the input." },
    ]
  },
  {
    sectionKey: "option",
    attributes: [
      { attribute: "role", value: "listitem", description: "Indicates to assistive technologies that this element functions as listitem." },
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
    description: "Changes the state of the currently focused toggle button."
  }
]
---
::
