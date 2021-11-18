# Month input

The `month` input uses HTML's [native month picker](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/month) to allow users to easily select a month.

<callout type="danger" label="Compatibility warning">
Month inputs are not currently supported in FireFox or Safari.
</callout>

<example
  name="Month input"
  file="/_content/examples/month/month"
  langs="vue">
</example>

<callout type="warning" label="Formatting">
The internal format of all native month pickers is <code>YYYY-MM</code>. This is true
even though the format of the month displayed to the user may be different. For example, U.S. based browsers display the month format as <code>Month Name YYYY</code>.
</callout>

## Props & Attributes

The `month` input has no unique props but can make use of the following universal
FormKit props.

<reference-table>
</reference-table>

## Composition keys

<reference-table type="compositionKeys" primary="composition-key">
</reference-table>
