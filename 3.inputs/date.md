---
title: Date Input
description: A native HTML date picker.
navigation:
  title: 'Date'
---

:InputPageHero

The `date` input uses HTML's [native date picker](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date) to allow users to easily select a date.

::Callout
---
type: "tip"
label: "Pro Alternative"
---
Need more flexibility than the native HTML `date` input provides? <a href="/inputs/datepicker">Check out the `datepicker` input</a> available in FormKit Pro.
::

## Basic example

::Example
---
  name: "Date input"
  file: "_examples/date-example/date-example.vue"
---
::

::Callout
---
type: "warning"
label: "Formatting"
---
The internal format of all native date pickers is <code>YYYY-MM-DD</code>. This is true even though the format of the date displayed to the user may be different. For example U.S. based browsers display date format as <code>MM/DD/YYYY</code>.
::

## Props & Attributes

The `date` input has no unique props but can make use of the following universal
FormKit props.

::ReferenceTable
---
input: "date" 
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
    description: "Opens the browser date picker panel when input is focused. Confirms date selection when date picker is focused.",
  },
  {
    event: ["space"],
    description: "Opens the browser date picker panel when input is focused.",
  },
  {
    event: ["esc"],
    description: "Closes the browser date picker panel.",
  },
  {
    event: ["up", "down", "left", "right"],
    separator: '',
    description: "Adjusts selection of UI elements in browser date picker panel.",
  },
]
---
::