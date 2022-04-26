---
title: Email
description: A native HTML email input.
---


<InputPageHero
title="Email input"
icon="IconInputEmail"
:pro="false"
project-price=""
data-price=""></InputPageHero>

The `email` input uses HTML's [native email input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/email).

<example
  name="Email input"
  file="/_content/examples/email-example/email-example.vue">
</example>

## Props & Attributes

The `email` input has no unique props but can make use of the following universal FormKit props.

<reference-table input="email" :attrs="['placeholder']">
</reference-table>

## Section keys
You can target a specific section of an input using that section's "key". Read more about sections [here](/essentials/inputs#sections).

<div>
  <formkit-input-diagram
    prefix-content="📧"
    suffix-content="✈️"
    label-content="Email address"
    input-content="test@example.com"
    help-content="Please use your school email address."
    message-content="Please provide a valid email."
  >
  </formkit-input-diagram>
</div>

<reference-table type="sectionKeys" primary="section-key">
</reference-table>
