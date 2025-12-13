---
title: Password Input
description: A native HTML password input.
navigation:
  title: 'Password'
---

:InputPageHero

The `password` input uses HTML's [native password input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/password). It allows a user to privately enter their password. When creating new passwords, this input is often compiled with the `confirm` validation rule.

## Example

::Example
---
name: "Password input"
file: "_examples/password/password.vue"
---
::

### Toggle password visibility

By leveraging the [icons](/essentials/icons) support built in to FormKit you can easily create a password input where password visibility can be toggled. 

::Example
---
name: "Password input"
file: "_examples/icons/handle-click.vue"
---
::

## Props & Attributes

The `password` input has no unique props but can make use of the following universal FormKit props.

::ReferenceTable
---
input: "password" 
attrs: ['maxlength', 'minlength', 'placeholder']
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