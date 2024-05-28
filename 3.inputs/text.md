---
title: Text Input
description: A native HTML text input.
navigation:
  title: 'Text'
---

:InputPageHero

The `text` input uses HTML's [native text input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/text). It allows a user to enter a single line of text.

## Basic example

::Example
---
name: "Text input"
file: "_examples/text/text.vue"
---
::

## Cast to number

By default all native HTML `<input>` elements return a string value. The `number` prop allows you to cast the value to a true `number` type. There are two valid values for the `number` prop: `float` and `integer`.

These options use `parseFloat` (default) or `parseInt` respectively. If the value cannot be parsed by the respective function it will fall back to using the string value. Applying the `number` prop will expand the `value` of the input to be `number | string | undefined` in TypeScript.

::Example
---
name: "Range cast input"
file: "_examples/text/text-cast.vue"
---
::

## Props & Attributes

The `text` input has only one unique prop, `number`, which can be used to cast the value of the input to a `number` type. Additionally, the native HTML `text` input has a few attributes that can be used to control the input.

::ReferenceTable
---
input: "text" 
attrs: ['maxlength', 'minlength', 'placeholder']
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
prefix-icon-content: "👩🏽‍💼"
suffix-icon-content: ""
label-content: "First name"
input-content: "Sunita"
help-content: "Enter your first name only."
message-content: "First name is required."
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

:KeyboardEventsTable