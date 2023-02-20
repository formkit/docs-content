---
title: Range Input
description: A native HTML range input.
---

<InputPageHero title="Range"></InputPageHero>

<page-toc></page-toc>

The `range` input uses HTML's [native range input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range) to let user select a number with a graphic slider.

## Basic example

<example
name="Range input"
file="_content/examples/range/range.vue"></example>

## Schema

Simple range schema example:

<example
name="Schema"
file="_content/examples/range/schema.vue"></example>

## Props & Attributes

The `range` input has no unique props but can make use of the following universal
FormKit props.

<reference-table input="range" :attrs="['min', 'max', 'step']">
</reference-table>

## Sections
<section-keys-intro></section-keys-intro>

<div>
  <formkit-input-diagram
    class="input-diagram--range"
    prefix-icon-content="😭"
    prefix-content="$0"
    suffix-content="$1B"
    suffix-icon-content="💰"
    label-content="Net worth"
    input-content=""
    help-content="What's your approximate net worth?"
    message-content="Sorry. Our service is only for low-income families."
  >
  </formkit-input-diagram>
</div>

<reference-table type="sectionKeys" primary="section-key">
</reference-table>
