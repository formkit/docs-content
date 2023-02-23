---
title: Text Input
description: A native HTML text input.
---

:InputPageHero{title="Text"}

:PageToc

The `text` input uses HTML's [native text input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/text). It allows a user to enter a single line of text.

## Basic example

::Example
---
name: "Text input"
file: "/_content/examples/text/text.vue"
---
::


## Props & Attributes

The `text` input has no unique props but can make use of the following universal
FormKit props.

<reference-table input="text" :attrs="['maxlength', 'minlength', 'placeholder']">
</reference-table>

## Sections

<section-keys-intro></section-keys-intro>

<div>
  <formkit-input-diagram
    prefix-icon-content="👩🏽‍💼"
    suffix-icon-content=""
    label-content="First name"
    input-content="Sunita"
    help-content="Enter your first name only."
    message-content="First name is required."
  >
  </formkit-input-diagram>
</div>

<reference-table type="sectionKeys" primary="section-key">
</reference-table>
