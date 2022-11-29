---
title: Email Input
description: A native HTML email input.
---

<InputPageHero title="Email"></InputPageHero>

<page-toc></page-toc>

The `email` input uses HTML's [native email input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/email).

## An example

<example
  name="Email input"
  file="/_content/examples/email-example/email-example.vue">
</example>

## Props & Attributes

The `email` input has no unique props but can make use of the following universal FormKit props.

<reference-table input="email" :attrs="['placeholder']">
</reference-table>

## Sections
<section-keys-intro></section-keys-intro>

<div>
  <formkit-input-diagram
    prefix-icon-content="📧"
    suffix-icon-content="✈️"
    label-content="Email address"
    input-content="test@example.com"
    help-content="Please use your school email address."
    message-content="Please provide a valid email."
  >
  </formkit-input-diagram>
</div>

<reference-table type="sectionKeys" primary="section-key">
</reference-table>
