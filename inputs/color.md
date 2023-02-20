---
title: Color Input
description: A native HTML color picker.
---

<InputPageHero title="Color"></InputPageHero>

<page-toc></page-toc>

The `color` input uses HTML's [native color picker](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/color) to allow users to easily select a hexadecimal color.

## Basic example

<example
  name="Color input"
  file="_content/examples/color/color-base.vue">
</example>

## Schema

Simple color schema example:

<example
name="Schema"
file="_content/examples/color/color-schema.vue"></example>

## Props & Attributes

The `color` input has no unique props but can make use of the following universal
FormKit props.

<reference-table>
</reference-table>

## Sections

<section-keys-intro></section-keys-intro>

<div>
  <formkit-input-diagram
    label-content="Favorite color"
    input-content="Color selector here"
    help-content="Select your favorite color."
    message-content="Only primary colors allowed."
    prefix-icon-content="🎨"
    suffix-icon-content="👍"
  >
  </formkit-input-diagram>
</div>

<reference-table type="sectionKeys" primary="section-key">
</reference-table>
