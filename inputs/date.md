# Date input

The `date` input uses HTML's [native date picker](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date) to allow users to easily select a date.

<example
  name="Date input"
  file="/_content/examples/date-example/date-example"
  langs="vue">
</example>

<callout type="warning" label="Formatting">
The internal format of all native date pickers is <code>YYYY-MM-DD</code>. This is true even though the format of the date displayed to the user may be different. For example U.S. based browsers display date format as <code>MM/DD/YYYY</code>.
</callout>

## Props & Attributes

The `date` input has no unique props but can make use of the following universal
FormKit props.

<reference-table input="date" :attrs="['min', 'max', 'step']">
</reference-table>

## Composition keys

<reference-table type="compositionKeys" primary="composition-key">
</reference-table>