---
title: URL Input
description: A native HTML url input.
navigation:
  title: 'URL'
---

::InputPageHero
---
type: "URL"
---
::

The `url` input uses HTML's [native url input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/url). It allows a user to enter a single URL.

## Basic example

::Example
---
name: "URL input"
file: "_content/_examples/url/url.vue"
---
::


::Callout
---
type: "tip"
label: "Consider using text input"
---
Although FormKit supports the <code>url</code> input type, the primary reason this input is provided in the HTML spec is validation. Since FormKit has its own validation system the utility provided by this input is not significant and can complicate your form submissions. In most cases you are better off using a <code>text</code> input with the <code>url</code> validation rule.
::

## Props & Attributes

The `url` input has no unique props but can make use of the following universal
FormKit props.

::ReferenceTable
---
input: "url" 
attrs: ['minlength', 'maxlength', 'placeholder']
---
::


## Sections

:SectionKeysIntro

::FormKitInputDiagram
---
prefix-icon-content: "🌎"
suffix-icon-content: ""
label-content: "Personal website URL"
input-content: "https://mywebsite.com"
help-content: "Tell us where to find your personal website."
message-content: "Please include a valid url."
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