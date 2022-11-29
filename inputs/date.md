---
title: Date Input
description: A native HTML date picker.
---

<InputPageHero title="Date"></InputPageHero>

<page-toc></page-toc>

The `date` input uses HTML's [native date picker](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date) to allow users to easily select a date.

## Basic example

<example
  name="Date input"
  file="/_content/examples/date-example/date-example.vue">
</example>

<callout type="warning" label="Formatting">
The internal format of all native date pickers is <code>YYYY-MM-DD</code>. This is true even though the format of the date displayed to the user may be different. For example U.S. based browsers display date format as <code>MM/DD/YYYY</code>.
</callout>

## Props & Attributes

The `date` input has no unique props but can make use of the following universal
FormKit props.

<reference-table input="date" :attrs="['min', 'max', 'step']">
</reference-table>

## Sections
<section-keys-intro></section-keys-intro>

<div>
  <formkit-input-diagram
    label-content="Date of birth"
    prefix-icon-content="📅"
    input-content="Jan. 1 1970"
    suffix-icon-content="👌"
    help-content="Please tell us your date of birth."
    message-content="Date is required."
  >
  </formkit-input-diagram>
</div>

<reference-table type="sectionKeys" primary="section-key">
</reference-table>
