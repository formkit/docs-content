---
title: Password Input
description: A native HTML password input.
---

:InputPageHero{title="Password"}

:PageToc

The `password` input uses HTML's [native password input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/password). It allows a user to privately enter their password. When creating new passwords, this input is often compiled with the `confirm` validation rule.

## An example

::Example
---
name: "Password input"
file: "_content/_examples/password/password.vue"
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

::FormKitInputDiagram
---
label-content: "Password"
prefix-icon-content: "🤫"
input-content: "···········"
suffix-icon-content: "🤐"
help-content: "Keep this hidden in a safe place."
message-content: "Password is required."
---
::

::ReferenceTable
---
type: "sectionKeys"
primary: "section-key"
---
::

