---
title: Datetime-local Input
description: A native HTML datetime-local picker.
navigation:
  title: 'Datetime-local'
---

:InputPageHero

The `datetime-local` input uses HTML's [native datetime-local picker](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/datetime-local) to allow users to easily select a date and time based on their browser’s locale.

::Callout
---
type: "tip"
label: "Pro Alternative"
---
Need more flexibility than the native HTML `datetime-local` input provides? <a href="/inputs/datepicker">Check out the `datepicker` input</a> available in FormKit Pro.
::

## Basic example

::Example
---
  name: "Datetime-local input"
  file: "_examples/datetime-local-example/datetime-local-example.vue"
---
::

::Callout
---
type: "warning"
label: "Formatting"
---
The internal format of all native datetime-local pickers is <code>YYYY-MM-DDTHH:MM</code>. This is true even though the format of the datetime-local displayed to the user may be different. For example U.S. based browsers display datetime-local format as <code>MM/DD/YYYY, HH:MM AM/PM</code>.
::

## Props & Attributes

The `datetime-local` input has no unique props but can make use of the following universal FormKit props.

::ReferenceTable
---
input: "datetime-local" 
attrs: ['min', 'max', 'step']
---
::

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
    description: "Opens the browser datetime picker panel when input is focused. Confirms datetime selection when date picker is focused.",
  },
  {
    event: ["space"],
    description: "Opens the browser datetime picker panel when input is focused.",
  },
  {
    event: ["esc"],
    description: "Closes the browser datetime picker panel.",
  },
  {
    event: ["up", "down", "left", "right"],
    separator: '',
    description: "Adjusts selection of UI elements in browser datetime picker panel.",
  },
]
---
::