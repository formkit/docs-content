---
title: Date Input
description: A native HTML date picker.
---

:InputPageHero{title="Date"}

:PageToc

The `date` input uses HTML's [native date picker](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date) to allow users to easily select a date.

## Basic example

::Example
---
  name: "Date input"
  file: "_content/_examples/date-example/date-example.vue"
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

::FormKitInputDiagram
---
label-content: "Date of birth"
prefix-icon-content: "📅"
input-content: "Jan. 1 1970"
suffix-icon-content: "👌"
help-content: "Please tell us your date of birth."
message-content: "Date is required."
---
::

::ReferenceTable
---
type: "sectionKeys"
primary: "section-key"
---
::

