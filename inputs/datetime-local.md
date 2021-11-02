# Datetime-local input

The datetime-local input uses the browser's [native datetime-local picker](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/datetime-local) to allow users to easily select a date and time based on their browser’s locale.

<example
  name="Datetime-local input"
  file="/_content/examples/datetime-local-example/datetime-local-example"
  langs="vue">
</example>

<callout type="warning">
The internal format of all native datetime-local pickers is `YYYY-MM-DDTHH:MM`. This is true even though the format of the datetime-local displayed to the user may be different. For example U.S. based browsers display datetime-local format as `MM/DD/YYYY, HH:MM AM/PM`.
</callout>

## Props

The datetime-local input has no unique props but can make use of the following universal FormKit props.

<reference-table>
</reference-table>

## Composition keys

[TK] - Universal composition keys

## Available utilities

[TK] - Masks

[TK] - Casts
