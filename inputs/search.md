---
title: Search Input
description: A native HTML search input.
---

<InputPageHero title="Search"></InputPageHero>

<page-toc></page-toc>

The `search` input uses HTML's [native search input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/search). Generally, search inputs are the same as text inputs, but may have different styling or features based on the browser. For example, browsers often add a small "X" to clear the input when it has a value.

## Basic example

<example
name="Search input"
file="/_content/examples/search/search.vue"></example>

## Props & Attributes

The `search` input has no unique props but can make use of the following universal
FormKit props.

<reference-table input="search" :attrs="['maxlength', 'minlength', 'placeholder']">
</reference-table>

## Sections
<section-keys-intro></section-keys-intro>

<div>
  <formkit-input-diagram
    prefix-icon-content="🔍"
    suffix-icon-content="→"
    label-content="Search everything"
    input-content="Best climate for tomatoes"
    help-content="Enter search term and press enter to search."
    message-content="Please enter a search term."
  >
  </formkit-input-diagram>
</div>

<reference-table type="sectionKeys" primary="section-key">
</reference-table>
