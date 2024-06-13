---
title: Color Input
description: A native HTML color picker.
navigation:
  title: 'Color'
---

:InputPageHero

The `color` input uses HTML's [native color picker](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/color) to allow users to easily select a hexadecimal color.

## Basic example

::Example
---
  name: "Color input"
  file: "_examples/color-example/color-example.vue"
---
::

## Props & Attributes

The `color` input has no unique props but can make use of the following universal
FormKit props.

:ReferenceTable

## Sections

:SectionKeysIntro

:FormKitInputDiagrams

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
    event: ["enter"],
    description: "Opens the browser color picker panel when input is focused. Confirms color selection when color picker is focused.",
  },
  {
    event: ["space"],
    description: "Opens the browser color picker panel when input is focused.",
  },
  {
    event: ["esc"],
    description: "Closes the browser color picker panel.",
  },
  {
    event: ["up", "down", "left", "right"],
    separator: '',
    description: "Adjusts selection of UI elements in browser color picker panel.",
  },
]
---
::