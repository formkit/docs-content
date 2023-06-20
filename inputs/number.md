---
title: Number Input
description: A native HTML number input
---

::InputPageHero
---
type: "Number"
---
::

:PageToc

The `number` input uses HTML's [native number input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/number). It allows a user to enter a single integer or decimal value.

## Basic example

::Example
---
name: "Number input"
file: "_content/_examples/number/number.vue"
---
::


## Props & Attributes

The `number` input has no unique props but can make use of the following universal
FormKit props and native attributes.

::ReferenceTable
---
input: "number"
attrs: ['min', 'max', 'step']
---
::


## Sections

:SectionKeysIntro

::FormKitInputDiagram
---
label-content: "Age you learned Algebra"
prefix-icon-content: "="
prefix-content: ""
input-content: "13"
suffix-content: ""
suffix-icon-content: "✔️"
help-content: "We'll incorporate this into our survey data."
message-content: "Age you learned Algebra is required."
---
::

::ReferenceTable
---
type: "sectionKeys"
primary: "section-key"
---
::

