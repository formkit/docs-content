---
title: Range Input
description: A native HTML range input.
navigation:
  title: 'Range'
---

:InputPageHero

The `range` input uses HTML's [native range input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range) to let user select a number with a graphic slider.

::Callout
---
type: "tip"
label: "Pro Alternative"
---
Need more flexibility than the native HTML `range` input provides? <a href="/inputs/slider">Check out the `slider` input</a> available in FormKit Pro.
::


## Basic example

::Example
---
name: "Range input"
file: "_content/_examples/range/range.vue"
---
::

## Cast to number

By default all native HTML `<input>` elements return a string value. The `number` prop allows you to cast the value to a true `number` type. There are two valid values for the `number` prop: `float` and `integer`.

These options use `parseFloat` (default) or `parseInt` respectively. If the value cannot be parsed by the respective function it will set the value to `undefined`. Additionally applying the `number` prop will constrain the `value` of the input to be exclusively `number | undefined` in TypeScript.

::Example
---
name: "Range cast input"
file: "_content/_examples/range/range-cast.vue"
---
::

## Props & Attributes

The `range` input has only one unique prop, `number`, which can be used to cast the value of the input to a `number` type. Additionally, the native HTML `range` input has a few attributes that can be used to control the input.

::ReferenceTable
---
input: "range"
attrs: ['min', 'max', 'step']
data: [
  {
    prop: "number",
    type: "String",
    default: "float",
    description:
      "Specifies how to cast a value to a number. Valid values are <code>float</code> and <code>integer</code>.",
  },
]
---
::


## Sections

:SectionKeysIntro

::FormKitInputDiagram
---
class: "input-diagram--range"
prefix-icon-content: "😭"
prefix-content: "$0"
suffix-content: "$1B"
suffix-icon-content: "💰"
label-content: "Net worth"
input-content: ""
help-content: "What's your approximate net worth?"
message-content: "Sorry. Our service is only for low-income families."
---
::

::ReferenceTable
---
type: "sectionKeys"
primary: "section-key"
---
::

## Accessibility

All FormKit inputs are designed with the following accessibility considerations in mind. Help us continually improve accessibility for all by filing accessibility issues [here](https://github.com/formkit/formkit/issues/new?assignees=&labels=%F0%9F%90%9B+bug-report%2C%E2%9B%91+Needs+triage&projects=&template=bug-report.yml): 

:AccessibilityChecks

### Accessibility attributes

:AccessibilityTable

### Keyboard Interactions

::KeyboardEventsTable
---
data: [
  {
    event: ["up"],
    description: "Adjust the input value up by the current <code>step</step>.",
  },
  {
    event: ["right"],
    description: "Adjust the input value up by the current <code>step</step>.",
  },
  {
    event: ["left"],
    description: "Adjust the input value down by the current <code>step</step>.",
  },
  {
    event: ["down"],
    description: "Adjust the input value down by the current <code>step</step>.",
  },
  {
    event: ["PageUp"],
    description: "Adjust the input value up by 10x the current <code>step</step>.",
  },
  {
    event: ["PageDown"],
    description: "Adjust the input value down by 10x the current <code>step</step>.",
  },
  {
    event: ["Home"],
    description: "Set the input value to the <code>min</code> value.",
  },
  {
    event: ["End"],
    description: "Set the input value to the <code>max</code> value.",
  },
]
---
::