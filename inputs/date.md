# Date input

The date input uses the html's [native date picker](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date) to allow users to easily
select a date.

<example
  name="Date input"
  file="/_content/examples/date-example/date-example"
  langs="vue">
</example>

<callout type="warning">
The internal format of all native date pickers is `YYYY-MM-DD`. This is true
even though the format of the date displayed to the user may be different. For example U.S. based browsers display date format as `MM/DD/YYYY`.
</callout>

## Props

The date input has no unique props but can make use of the following universal
FormKit props.

<reference-table>
</reference-table>

## Composition keys

<reference-table type="compositionKeys" property="composition-key">
</reference-table>

## Available utilities

[TK] - Masks

[TK] - Casts
