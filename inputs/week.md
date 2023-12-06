---
title: Week Input
description: A native HTML week picker.
---

::InputPageHero
---
type: "Week"
---
::

:PageToc

The `week` input uses the HTML's [native week picker](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/week) to allow users to easily
select a week.

## Basic example

::Example
---
name: "Week input"
file: "_content/_examples/week/week.vue"
---
::

::Callout
---
type: "danger"
label: "Compatibility warning"
---
Week inputs are not currently supported in FireFox or Safari.
::

::Callout
---
type: "warning"
label: "Formatting"
---
The internal format of all native week pickers is <code>YYYY-Www</code> (for example: <code>2017-W06</code>). This is true even though the format of the week displayed to the user may be different.</code>.
::

## Props & Attributes

The `week` input has no unique props but can make use of the following universal
FormKit props.

::ReferenceTable
---
input: "week" 
attrs: ['min', 'max', 'step']
---
::


## Sections

:SectionKeysIntro

::FormKitInputDiagram
---
prefix-icon-content: "🗓"
suffix-icon-content: ""
label-content: "Installation week"
input-content: "2022-W42"
help-content: "Which week will work best for your patio installation?"
message-content: "Installation week is required."
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