# Time input

The `time` input uses HTML's [native time input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/time). It allows a user to enter a single line of time.

<example
name="Time input"
file="/_content/examples/time/time"
langs="vue"></example>

<callout type="warning" label="Formatting">
The internal format of all native time pickers is <code>HH:MM</code>. This is true even though the format of the time displayed to the user may be 12 hour or 24 hour.
</callout>

## Props & Attributes

The `time` input has no unique props but can make use of the following universal
FormKit props.

<reference-table input="time" :attrs="['max', 'min', 'step']">
</reference-table>

## Composition keys

<reference-table type="compositionKeys" primary="composition-key">
</reference-table>
