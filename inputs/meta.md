---
title: Meta Input
description: A meta input used for storing data.
---

::InputPageHero
---
type: "Hidden"
---
::

:PageToc

The `meta` input is meant to.//

## Basic example

::Example
---
name: "Hidden input"
file: "_content/_examples/meta/meta.vue"
tabs: "html,render"
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
without: ['help', 'label', 'errors', 'prefix-icon', 'suffix-icon', ]
---
::


## Sections

The meta input is made up of only

::ReferenceTable
---
type: "sectionKeys"
primary: "section-key"
data: [
  {
    "section-key": "fragment",
    description: "N/A"
  }
]
---
::
