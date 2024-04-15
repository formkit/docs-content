---
title: Meta Input
description: A hidden input that stores arbitrary data.
navigation:
  title: 'Meta'
---

::InputPageHero
---
type: "Meta"
---
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


::Callout
---
type: "warning"
---
Since <code>meta</code> inputs are not intended for display to end users, FormKit does not render common user-facing features such as the <code>label</code>, <code>help text</code> , or <code>messages</code>.<br><br>Validation rules can still be applied to a hidden input that will prevent a form from submitting, but please note that the errors will not be displayed on this input.
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

The meta input is made up of only

::ReferenceTable
---
type: "sectionKeys"
primary: "section-key"
without: ['outer', 'label', 'prefix', 'prefixIcon', 'inner', 'suffix', 'suffixIcon', 'input', 'help', 'messages', 'message']
---
::
