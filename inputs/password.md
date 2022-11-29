---
title: Password Input
description: A native HTML password input.
---

<InputPageHero title="Password"></InputPageHero>

<page-toc></page-toc>

The `password` input uses HTML's [native password input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/password). It allows a user to privately enter their password. When creating new passwords, this input is often compiled with the `confirm` validation rule.

## An example

<example
name="Password input"
file="/_content/examples/password/password.vue"></example>

## Props & Attributes

The `password` input has no unique props but can make use of the following universal FormKit props.

<reference-table input="password" :attrs="['maxlength', 'minlength', 'placeholder']">
</reference-table>

## Sections
<section-keys-intro></section-keys-intro>

<div>
  <formkit-input-diagram
    label-content="Password"
    prefix-icon-content="🤫"
    input-content="···········"
    suffix-icon-content="🤐"
    help-content="Keep this hidden in a safe place."
    message-content="Password is required."
  >
  </formkit-input-diagram>
</div>

<reference-table type="sectionKeys" primary="section-key">
</reference-table>
