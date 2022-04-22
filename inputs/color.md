---
title: Color
description: A native HTML color picker.
---

<InputPageHero
title="Color input"
icon="IconInputColor"
:pro="false"
project-price=""
data-price=""></InputPageHero>

The `color` input uses HTML's [native color picker](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/color) to allow users to easily select a hexadecimal color.

<example
  name="Color input"
  file="/_content/examples/color-example/color-example.vue">
</example>

## Props & Attributes

The `color` input has no unique props but can make use of the following universal
FormKit props.

<reference-table>
</reference-table>

## Section keys

<div>
  <formkit-input-diagram
    label-content="Color Label"
    input-content="Color selector here"
    help-content="What's your favorite color"
    message-content="Messages about your color selection"
  >
  </formkit-input-diagram>
</div>

<reference-table type="sectionKeys" primary="section-key">
</reference-table>
