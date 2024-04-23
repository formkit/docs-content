---
title: Meta Input
description: A hidden input that stores arbitrary data.
navigation:
  title: 'Meta'
---

:InputPageHero

::Callout
---
type: "warning"
label: "Renderless Input"
---
The `meta` input does not render any output to the DOM. It is used exclusively for including arbitrary data in your forms without displaying it to end users.
::

The `meta` input is meant to store arbitrary data that is not intended for display to end users. This input is hidden by default and can be used to store data that is not part of the form's schema.

Unlike the [hidden](/inputs/hidden) input (which renders an `<input type="hidden">` element), `meta` does not render *any* DOM elements so it’s value is in memory only and as such it can store any value type. In TypeScript its value is defined as `any`.

## Basic example

::Example
---
name: "Meta input"
file: "_content/_examples/meta/meta.vue"
---
::

## Props & Attributes

The `meta` input has no unique props but can make use of the following universal
FormKit props.

::ReferenceTable
---
without: []
---
::


## Sections

The `meta` input renders no output to the DOM so there are no sections to display. The `meta` input is used exclusively for including arbitrary data in your forms without displaying it to end users.
