---
title: Toggle Input
description: The toggle input is used to choose one of two values; it is a good choice when you want the user to make a binary choice such as turning a feature on or off.
---

::InputPageHero
---
type: "Toggle"
---
::

:PageToc

:ProInstallSnippet

## Basic example

The `toggle` input — sometimes called a "switch" — offers a choice between one of two values; it's a great option when you want the user to toggle a feature on or off:

::Example
---
name: "Toggle"
file: "_content/_examples/toggle/toggle-base.vue"
---
::

## Values

The values for the toggle are `undefined` if not-interacted with, `true` if checked, and `false` if unchecked. You can change these values by passing the `onValue` and `offValue` props. In this example, we will set the `onValue` to the string `'active'` and the `offValue` to the string `'inactive'`:

::Example
---
name: "Toggle"
file: "_content/_examples/toggle/toggle-values.vue"
---
::

## Labels

### Primary label

By default, the toggle input supports a primary label like the `label` prop on any other FormKit input. The primary label is displayed to the right of the toggle unless you use a `Value label`, which will then move it above the toggle:

::Example
---
name: "Toggle"
file: "_content/_examples/toggle/toggle-primary-label.vue"
---
::

### Alt label position

If you would like the label to be displayed above the toggle, you can use the `alt-label-position` prop:

::Example
---
name: "Toggle"
file: "_content/_examples/toggle/toggle-alt-label-position.vue"
---
::

### Value label

Additionally, you may specify secondary labels by setting the `on-value-label` and the `off-value-label` props. These values are conditionally shown based on the on/off state of the toggle. The value labels render to the right of the toggle input. The "primary label" will be moved to the alternative label position above the toggle when value labels are used:

::Example
---
name: "Toggle"
file: "_content/_examples/toggle/toggle-value-labels.vue"
---
::


### Inner value labels

Additionally, you can set the `value-label-display` prop to `inner` to render the value labels inside the toggle. The `Primary label` will return to being displayed to the right of the toggle:

::Example
---
name: "Toggle"
file: "_content/_examples/toggle/toggle-labels-inner.vue"
---
::


## Icons

The `thumb-icon` prop allows you to insert an icon into the `thumb` section of the `toggle` input. This prop accepts a string that's passed to FormKit's [icon plugin](/essentials/icons):

::Example
---
name: "Toggle"
file: "_content/_examples/toggle/toggle-icon.vue"
---
::


## Colors

The toggle input supports color props for its various sections for easy styling. Each prop contains on and off states that are applied depending on whether the toggle is on or off. The following example uses some of these color props. See the [Props & Attributes](#props--attributes) section below for a full list of these props:

::Example
---
name: "Toggle"
file: "_content/_examples/toggle/toggle-icon-colors.vue"
---
::

## Accessibility

All FormKit inputs are designed with the following accessibility considerations in mind. Help us continually improve accessibility for all by filing accessibility issues [here](https://github.com/formkit/formkit/issues/new?assignees=&labels=%F0%9F%90%9B+bug-report%2C%E2%9B%91+Needs+triage&projects=&template=bug-report.yml): 

:AccessibilityChecks

The `toggle` input is built atop HTML's [native checkbox input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox).

## Props & Attributes

::ReferenceTable
---
without: ['prefix-icon', 'suffix-icon'] 
input: "rating" 
data: [
  {
    prop: "alt-label-position",
    type: "Boolean",
    default: "undefined",
    description: "Moves the label above the toggle.",
  },
  {
    prop: "off-value",
    type: "any",
    default: "false",
    description: "The value when the toggle is unchecked.",
  },
  {
    prop: "on-value",
    type: "any",
    default: "true",
    description: "The value when the toggle is checked.",
  },
  {
    prop: "off-value-label",
    type: "String",
    default: "undefined",
    description: "The text of the Value label when the toggle is unchecked.",
  },
  {
    prop: "on-value-label",
    type: "String",
    default: "undefined",
    description: "The text of the Value label when the toggle is checked.",
  },
  {
    prop: "value-label-display",
    type: "String",
    default: "undefined",
    description:
      "The `on` and `off` value labels will always default to being displayed outside and to the right of the toggle. Other accepted values include `inner` to set the value labels inside of the toggle, and `hidden` which hides the value labels.",
  },
  {
    prop: "value-label-color-off",
    type: "String",
    default: "undefined",
    description:
      "Used to set the color of the value label when the toggle is unchecked.",
  },
  {
    prop: "value-label-color-on",
    type: "String",
    default: "undefined",
    description:
      "Used to set the color of the value label when the toggle is checked.",
  },
  {
    prop: "thumb-icon",
    type: "String",
    default: "undefined",
    description:
      "This prop is used to set the icon that will be placed inside the thumb section.",
  },
  {
    prop: "thumb-color-off",
    type: "String",
    default: "undefined",
    description:
      "Sets the background color of the thumb section when the toggle is unchecked.",
  },
  {
    prop: "thumb-color-on",
    type: "String",
    default: "undefined",
    description:
      "Sets the background color of the thumb section when the toggle is checked.",
  },
  {
    prop: "icon-color-off",
    type: "String",
    default: "undefined",
    description:
      "The color the icon should be set to when `toggle-icon` prop is set and the toggle is unchecked.",
  },
  {
    prop: "icon-color-on",
    type: "String",
    default: "undefined",
    description:
      "The color the icon should be set to when `toggle-icon` prop is set and the toggle is checked.",
  },
  {
    prop: "track-color-off",
    type: "String",
    default: "undefined",
    description:
      "Sets the background color of the `track` section when the toggle is unchecked.",
  },
  {
    prop: "track-color-on",
    type: "String",
    default: "undefined",
    description:
      "Sets the background color of the `track` section when toggle is checked.",
  },
]
---
::


## Sections

:SectionKeysIntro

::FormKitInputDiagram
---
class: "input-diagram--toggle"
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
            name: "altLabel",
            position: "right",
            class: "center-vert"
          },
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
                name: "track",
                class: "flex-grow flex",
                children: [
                  {
                    name: "innerLabel",
                  },
                  {
                    name: "thumb",
                    class: "flex-grow text-center border-solid",
                    children: [
                      {
                        name: "thumbIcon",
                        content: "⚫️"
                      }
                    ]
                  }
                ]
              },
              {
                name: "suffix",
                position: "right",
              },
            ]
          },
          {
            name: "valueLabel",
            position: "right",
          },
          {
            name: "label",
            content: "Sound effects"
          }
        ]
      },
      {
        name: "help",
        content: "Turn sound effects on and off.",
        position: "right"
      },
      {
        name: "messages",
        position: "right",
        children: [
          {
            name: "message",
            content: "Something wrong happened.",
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
    "section-key": "track",
    description: "The track section is the background of the toggle (the area that the thumb slides on)."
  },
  {
    "section-key": "thumb",
    description: "The thumb section is the element that slides on the track."
  },
  {
    "section-key": "thumbIcon",
    description: "The thumbIcon section is the icon that is rendered inside the thumb section (when thumb-icon prop is set)."
  },
  {
    "section-key": "valueLabel",
    description: "An additional label element, rendered when value-label props are used. Displayed to the right of the toggle."
  },
  {
    "section-key": "altLabel",
    description: "A label element for the label. This label is rendered when value-label props are being used."
  },
  {
    "section-key": "innerLabel",
    description: "A label element used when value-label props are provided and value-label-display is set to inner."
  }
]
---
::

