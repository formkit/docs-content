---
title: Time Input
description: A native HTML time input.
---

<InputPageHero title="Time"></InputPageHero>

The `time` input uses HTML's [native time input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/time). It allows a user to enter a single line of time.

<example
name="Time input"
file="/_content/examples/time/time.vue"></example>

<callout type="warning" label="Formatting">
The internal format of all native time pickers is <code>HH:MM</code>. This is true even though the format of the time displayed to the user may be 12 hour or 24 hour.
</callout>

## Props & Attributes

The `time` input has no unique props but can make use of the following universal
FormKit props.

<reference-table input="time" :attrs="['max', 'min', 'step']">
</reference-table>

## Section keys
You can target a specific section of an input using that section's "key". Read more about sections [here](/essentials/inputs#sections).

<div>
  <formkit-input-diagram
    prefix-icon-content="⏱"
    suffix-icon-content="👌"
    label-content="Preferred delivery time"
    input-content="10:00"
    help-content="Actual delivery time will be your preferred time +- 30 minutes."
    message-content="Preferred delivery time is required."
  >
  </formkit-input-diagram>
</div>

<reference-table type="sectionKeys" primary="section-key">
</reference-table>
