---
title: Toggle Buttons
description: The toggle buttons are used to choose between one or more choices with a button aesthetic.
---

::InputPageHero
---
type: "Toggle Buttons"
---
::

:PageToc

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
file: "_content/_examples/togglebuttons/togglebuttons-multiple-basic.vue"
---
::

## Behavioral props

### Multiple

The `togglebuttons` input, by default, only allows one option to be selected. You can change this behavior by setting the `multiple` prop which will then allow the selection of multiple options:

::Example
---
name: "Multiple"
file: "_content/_examples/togglebuttons/togglebuttons-multiple.vue"
---
::

### Enforced

By default `togglebuttons` will allow you to select and deselect allowing for an off state. With the `enforced` prop enabled once a user has interacted with the input, one value will always be set much like that of a radio input.

::Example
---
name: "Multiple"
file: "_content/_examples/togglebuttons/togglebuttons-single-enforced.vue"
---
::

### Vertical

Assuming you are using the default FormKit styles, the `vertical` prop applies dataset attributes and styling to stack toggle buttons in a vertical orientation.

::Example
---
name: "Vertical"
file: "_content/_examples/togglebuttons/togglebuttons-vertical.vue"
---
::

More prop examples and combinations:

::Example
---
name: "Toggle Buttons Multiple Enforced"
file: "_content/_examples/togglebuttons/togglebuttons-enforced.vue"
---
::

## Standalone Toggle

### Standalone basic example

The `togglebuttons` input offers choices between one or more values; it's a great option when you want the user to toggle a feature on or off, between choices or allow multiple selections.

::Example
---
name: "Single Toggle Button"
file: "_content/_examples/togglebuttons/togglebuttons-simple.vue"
---
::


### Standalone Toggle On/Off Values

The values for the toggle buttons are `undefined` if not-interacted with, `true` if checked, and `false` if unchecked. You can change these values by passing the `onValue` and `offValue` props. In this example, we will set the `onValue` to the string `'active'` and the `offValue` to the string `'inactive'`:

::Example
---
name: "On / Off Values"
file: "_content/_examples/togglebuttons/togglebuttons-basic-values.vue"
---
::

### Standalone On/Off labels

Additionally, you may specify secondary labels by setting the `on-label` and the `off-label` props. These values are conditionally shown based on the on/off state of the toggle. The value labels render to the right of the toggle input. The "primary label" will be moved to input label position above the toggle when value labels are used:

::Example
---
name: "On / Off Labels"
file: "_content/_examples/togglebuttons/togglebuttons-value-labels.vue"
---
::

## Slots

### Toggle Button Slots

For multiple options you can use the `default` slot to set the toggle's content.

::Example
---
name: "Toggle Buttons Options Slot"
file: "_content/_examples/togglebuttons/togglebuttons-options-slots.vue"
---
::

### Standalone Toggle Slots

For a single toggle you can use the default slot for setting the toggle content. Also available are `on` and `off` slots to change the content based on whether the toggle is activated or not.

::Example
---
name: "Toggle Buttons Default Slot"
file: "_content/_examples/togglebuttons/togglebuttons-single-slots.vue"
---
::

## Accessibility

All FormKit inputs are designed with the following accessibility considerations in mind. Help us continually improve accessibility for all by filing accessibility issues [here](https://github.com/formkit/formkit/issues/new?assignees=&labels=%F0%9F%90%9B+bug-report%2C%E2%9B%91+Needs+triage&projects=&template=bug-report.yml): 

:AccessibilityChecks

### ARIA

- The field's containing unordered list of options has `role="group"`.
- Each option element's button has `aria-pressed="<bool>"` according to the button state and `aria-label` is provided by the option's label

### Keyboard

Toggle buttons are in DOM order and can navigated with the tab key. The button behavior follows standard keyboard semantics.

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


## Sections

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

