---
title: Password
description: A native HTML password input.
---

<InputPageHero
title="Password input"
icon="IconInputPassword"
:pro="false"
project-price=""
data-price=""></InputPageHero>

The `password` input uses HTML's [native password input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/password). It allows a user to privately enter their password. When creating new passwords, this input is often compiled with the `confirm` validation rule.

<example
name="Password input"
file="/_content/examples/password/password.vue"></example>

## Props & Attributes

The `password` input has no unique props but can make use of the following universal FormKit props.

<reference-table input="password" :attrs="['maxlength', 'minlength', 'placeholder']">
</reference-table>

## Section keys
You can target a specific section of an input using that section's "key". Read more about sections [here](/essentials/inputs#sections).

<div>
  <formkit-input-diagram
    label-content="Password"
    prefix-content="🤫"
    input-content="···········"
    suffix-content="🤐"
    help-content="Keep this hidden in a safe place."
    message-content="Password is required."
  >
  </formkit-input-diagram>
</div>

<reference-table type="sectionKeys" primary="section-key">
</reference-table>
