---
title: Range Input
description: A native HTML range input.
---

:InputPageHero{title="Range"}

:PageToc

The `range` input uses HTML's [native range input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range) to let user select a number with a graphic slider.

## Basic example

::Example
---
name: "Range input"
file: "/_content/_examples/range/range.vue"
---
::


## Props & Attributes

The `range` input has no unique props but can make use of the following universal
FormKit props.

::ReferenceTable
---
input: "range"
attrs: ['min', 'max', 'step']
---
::


## Sections

:SectionKeysIntro

::FormKitInputDiagram
---
class: "input-diagram--range"
prefix-icon-content: "😭"
prefix-content: "$0"
suffix-content: "$1B"
suffix-icon-content: "💰"
label-content: "Net worth"
input-content: ""
help-content: "What's your approximate net worth?"
message-content: "Sorry. Our service is only for low-income families."
---
::

::ReferenceTable
---
type: "sectionKeys"
primary: "section-key"
---
::

