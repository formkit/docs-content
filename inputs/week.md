---
title: Week
description: A native HTML week picker.
---

<InputPageHero
title="Week input"
icon="IconInputWeek"
:pro="false"
project-price=""
data-price=""></InputPageHero>

The `week` input uses the HTML's [native week picker](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/week) to allow users to easily
select a week.

<callout type="danger" label="Compatibility warning">
Week inputs are not currently supported in FireFox or Safari.
</callout>

<example
  name="Week input"
  file="/_content/examples/week/week.vue">
</example>

<callout type="warning" label="Formatting">
The internal format of all native week pickers is <code>YYYY-Www</code> (for example: <code>2017-W06</code>). This is true even though the format of the week displayed to the user may be different.</code>.
</callout>

## Props & Attributes

The `week` input has no unique props but can make use of the following universal
FormKit props.

<reference-table input="week" :attrs="['min', 'max', 'step']">
</reference-table>

## Section keys

<reference-table type="sectionKeys" primary="section-key">
</reference-table>
