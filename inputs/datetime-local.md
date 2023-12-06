---
title: Datetime-local Input
description: A native HTML datetime-local picker.
---

::InputPageHero
---
type: "Datetime-local"
---
::

:PageToc

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
  file: "_content/_examples/datetime-local-example/datetime-local-example.vue"
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

::FormKitInputDiagram
---
prefix-icon-content: ⏰"
suffix-icon-content: 👍"
label-content: Appointment time"
input-content: Jan. 1 1970 12:00:00"
help-content: Please choose a date and time for your appointment."
message-content: Date and time are required."
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