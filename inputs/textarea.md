---
title: Textarea
description: A native HTML textarea input.
---

<InputPageHero
title="Textarea input"
icon="IconInputTextArea"
:pro="false"
project-price=""
data-price=""></InputPageHero>

The `textarea` input uses HTML's [native textarea input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea). It allows a user to enter multiple lines of text and is resizable in most browsers.

<example
name="Textarea input"
file="/_content/examples/textarea/textarea.vue"></example>

## Props & Attributes

The `textarea` input has no unique props but can make use of the following universal
FormKit props.

<reference-table input="textarea" :attrs="['cols', 'maxlength', 'minlength', 'placeholder', 'rows']">
</reference-table>

## Section keys
You can target a specific section of an input using that section's "key". Read more about sections [here](/essentials/inputs#sections).

<div>
  <formkit-input-diagram
    class="input-diagram--textarea"
    prefix-content="📕"
    suffix-content=""
    label-content="Brief biography"
    input-content="The year was 1982. The season was Autumn. My parents were living in Peru at the time..."
    help-content="Tell us a little about yourself."
    message-content="Brief biography must be between 300 and 500 characters."
  >
  </formkit-input-diagram>
</div>

<reference-table type="sectionKeys" primary="section-key">
</reference-table>
