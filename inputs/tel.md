---
title: Tel (Telephone) Input
description: A native HTML tel input.
---

::InputPageHero
---
type: "Telephone"
---
::

:PageToc

The `tel` input uses HTML's [native tel input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/tel) and allows a user to enter a telephone number. Telephone numbers can also be entered with standard text inputs but some browsers (especially mobile ones) may improve the experience of entering telephone numbers by showing a different keypad.

::Callout
---
type: "tip"
label: "Pro Alternative"
---
Need more flexibility than the native HTML `tel` input provides? <a href="/inputs/mask">Check out the `mask` input</a> available in FormKit Pro.
::


## An example

::Example
---
name: "Tel input"
file: "_content/_examples/tel/tel.vue"
---
::


::Callout
---
type: "tip"
label: "Phone number validation"
---
Phone number formats vary <em>greatly</em> around the world (some localities even include letters in their phone numbers!) — be cautious validating phone numbers unless you know your audience is exclusively from a given location.
::

## Props & Attributes

The `tel` input has no unique props but can make use of the following universal
FormKit props.

::ReferenceTable
---
input: "tel" 
attrs: ['maxlength', 'minlength', 'placeholder']
---
::


## Sections

:SectionKeysIntro

::FormKitInputDiagram
---
prefix-icon-content: "📞"
suffix-icon-content: ""
label-content: "Phone number"
input-content: "444-555-6666"
help-content: "Enter your phone number using the xxx-xxx-xxxx format."
message-content: "Phone number must be of the xxx-xxx-xxxx format."
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

:AccessibilityTable

### Keyboard Interactions

:KeyboardEventsTable

:AccessibilityTable

### Keyboard Interactions

:KeyboardEventsTable