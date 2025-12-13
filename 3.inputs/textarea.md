---
title: Textarea Input
description: A native HTML textarea input.
navigation:
  title: 'Textarea'
---

:InputPageHero

The `textarea` input uses HTML's [native textarea input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea). It allows a user to enter multiple lines of text and is resizable in most browsers.

## Basic example

::Example
---
name: "Textarea input"
file: "_examples/textarea/textarea.vue"
---
::

## Props & Attributes

The `textarea` input has no unique props but can make use of the following universal
FormKit props.

::ReferenceTable
---
input: "textarea" 
attrs: ['cols', 'maxlength', 'minlength', 'placeholder', 'rows']
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

:KeyboardEventsTable