---
title: Datetime-local Input
description: A native HTML datetime-local picker.
---

<InputPageHero title="Datetime-local"></InputPageHero>

<page-toc></page-toc>

The `datetime-local` input uses HTML's [native datetime-local picker](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/datetime-local) to allow users to easily select a date and time based on their browser’s locale.

## Basic example

<example
  name="Datetime-local input"
  file="_content/examples/datetime-local/datetime-local-base.vue">
</example>

<callout type="warning" label="Formatting">
The internal format of all native datetime-local pickers is <code>YYYY-MM-DDTHH:MM</code>. This is true even though the format of the datetime-local displayed to the user may be different. For example U.S. based browsers display datetime-local format as <code>MM/DD/YYYY, HH:MM AM/PM</code>.
</callout>

## Schema

Simple datetime-local schema example:

<example
name="Schema"
file="_content/examples/datetime-local/datetime-local-schema.vue"></example>

## Props & Attributes

The `datetime-local` input has no unique props but can make use of the following universal FormKit props.

<reference-table input="datetime-local" :attrs="['min', 'max', 'step']">
</reference-table>

## Sections
<section-keys-intro></section-keys-intro>

<div>
  <formkit-input-diagram
    prefix-icon-content="⏰"
    suffix-icon-content="👍"
    label-content="Appointment time"
    input-content="Jan. 1 1970 12:00:00"
    help-content="Please choose a date and time for your appointment."
    message-content="Date and time are required."
  >
  </formkit-input-diagram>
</div>

<reference-table type="sectionKeys" primary="section-key">
</reference-table>
