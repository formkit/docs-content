---
title: Email Input
description: A native HTML email input.
---

:InputPageHero{title="Email"}

:PageToc

The `email` input uses HTML's [native email input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/email).

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

