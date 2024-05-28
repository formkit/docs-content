---
title: Number Input
description: A native HTML number input
navigation:
  title: 'Number'
---

:InputPageHero

The `number` input uses HTML's [native number input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/number). It allows a user to enter a single integer or decimal value.

## Basic example

::Example
---
name: "Number input"
file: "_examples/number/number.vue"
---
::

## Cast to number

By default all native HTML `<input>` elements return a string value. The `number` prop allows you to cast the value to a true `number` type. There are two valid values for the `number` prop: `float` and `integer`.

These options use `parseFloat` (default) or `parseInt` respectively. If the value cannot be parsed by the respective function it will set the value to `undefined`. Additionally applying the `number` prop will constrain the `value` of the input to be exclusively `number | undefined` in TypeScript.

::Example
---
name: "Number cast input"
file: "_examples/number/number-cast.vue"
---
::

## Props & Attributes

The `number` input has only one unique prop, `number`, which can be used to cast the value of the input to a `number` type. Additionally, the native HTML `number` input has a few attributes that can be used to control the input.

::ReferenceTable
---
input: "number"
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
label-content: "Age you learned Algebra"
prefix-icon-content: "="
prefix-content: ""
input-content: "13"
suffix-content: ""
suffix-icon-content: "✔️"
help-content: "We'll incorporate this into our survey data."
message-content: "Age you learned Algebra is required."
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
    event: ["up", "down"],
    separator: '',
    description: "Increments through input value by current <code>step</code> amount.",
  },
]
---
::