---
title: Text
description: A native HTML text input.
---

<InputPageHero
title="Text input"
icon="IconInputText"
:pro="false"
project-price=""
data-price=""></InputPageHero>

The `text` input uses HTML's [native text input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/text). It allows a user to enter a single line of text.

<example
name="Text input"
file="/_content/examples/text/text.vue"></example>

## Props & Attributes

The `text` input has no unique props but can make use of the following universal
FormKit props.

<reference-table input="text" :attrs="['maxlength', 'minlength', 'placeholder']">
</reference-table>

## Section keys
You can target a specific section of an input using that section's "key". Read more about sections [here](/essentials/inputs#sections).

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
