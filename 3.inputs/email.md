---
title: Email Input
description: A native HTML email input.
navigation:
  title: 'Email'
---

:InputPageHero

The `email` input uses HTML's [native email input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/email).

::Callout
---
type: "tip"
label: "Pro Alternative"
---
Need more flexibility than the native HTML `email` input provides? <a href="/inputs/mask">Check out the `mask` input</a> available in FormKit Pro.
::

## An example

::Example
---
name: "Email input"
file: "_content/_examples/email-example/email-example.vue"
---
::

## Props & Attributes

The `email` input has no unique props but can make use of the following universal FormKit props.

::ReferenceTable
---
input: "email" 
attrs: ['placeholder']
---
::

## Sections

:SectionKeysIntro

::FormKitInputDiagram
---
prefix-icon-content: "📧"
suffix-icon-content: "✈️"
label-content: "Email address"
input-content: "test@example.com"
help-content: "Please use your school email address."
message-content: "Please provide a valid email."
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

:AccessibilityTable

### Keyboard Interactions

:KeyboardEventsTable