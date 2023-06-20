---
title: Search Input
description: A native HTML search input.
---

::InputPageHero
---
title: "Search"
---
::

:PageToc

The `search` input uses HTML's [native search input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/search). Generally, search inputs are the same as text inputs, but may have different styling or features based on the browser. For example, browsers often add a small "X" to clear the input when it has a value.

## Basic example

::Example
---
name: "Search input"
file: "_content/_examples/search/search.vue"
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

::FormKitInputDiagram
---
prefix-icon-content: "🔍"
suffix-icon-content: "→"
label-content: "Search everything"
input-content: "Best climate for tomatoes"
help-content: "Enter search term and press enter to search."
message-content: "Please enter a search term."
---
::

::ReferenceTable
---
type: "sectionKeys"
primary: "section-key"
---
::

