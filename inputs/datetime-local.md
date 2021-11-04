# Datetime-local input

The datetime-local input uses html's [native datetime-local picker](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/datetime-local) to allow users to easily select a date and time based on their browser’s locale.

<example
  name="Datetime-local input"
  file="/_content/examples/datetime-local-example/datetime-local-example"
  langs="vue">
</example>

<callout type="warning" label="Formatting">
The internal format of all native datetime-local pickers is <code>YYYY-MM-DDTHH:MM</code>. This is true even though the format of the datetime-local displayed to the user may be different. For example U.S. based browsers display datetime-local format as <code>MM/DD/YYYY, HH:MM AM/PM</code>.
</callout>

## Props & Attributes

The datetime-local input has no unique props but can make use of the following universal FormKit props.

<reference-table input="datetime-local" :attrs="['min', 'max', 'step']">
</reference-table>

## Composition keys

<reference-table type="compositionKeys" primary="composition-key">
</reference-table>

## Available utilities

[TK] - Masks

[TK] - Casts
