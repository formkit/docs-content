---
title: Number
description: A native HTML number input
---

<InputPageHero
title="Number input"
icon="IconInputNumber"
:pro="false"
project-price=""
data-price=""></InputPageHero>

The `number` input uses HTML's [native number input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/number). It allows a user to enter a single integer or decimal value.

<example
name="Number input"
file="/_content/examples/number/number.vue"></example>

## Props & Attributes

The `number` input has no unique props but can make use of the following universal
FormKit props and native attributes.

<reference-table :attrs="['min', 'max', 'step']" input="number">
</reference-table>

## Section keys
You can target a specific section of an input using that section's "key". Read more about sections [here](/essentials/inputs#sections).

<div>
  <formkit-input-diagram
    label-content="Age you learned Algebra"
    prefix-content="＝"
    input-content="13"
    suffix-content="✔️"
    help-content="We'll incorporate this into our survey data."
    message-content="Age you learned Algebra is required."
  >
  </formkit-input-diagram>
</div>

<reference-table type="sectionKeys" primary="section-key">
</reference-table>
