---
title: Search Input
description: A native HTML search input.
navigation:
  title: 'Search'
---

:InputPageHero

The `search` input uses HTML's [native search input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/search). Generally, search inputs are the same as text inputs, but may have different styling or features based on the browser. For example, browsers often add a small "X" to clear the input when it has a value.

## Basic example

::Example
---
name: "Search input"
file: "_examples/search/search.vue"
---
::

## Props & Attributes

The `search` input has no unique props but can make use of the following universal
FormKit props.

::ReferenceTable
---
input: "search"
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

:AccessibilityTable

### Keyboard Interactions

:KeyboardEventsTable