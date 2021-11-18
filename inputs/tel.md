# Tel input

The `tel` input uses HTML's [native tel input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/tel) and allows a user to enter a telephone number. Telephone numbers can also be entered with standard text inputs but some browsers (especially mobile ones) may improve the experience of entering telephone numbers by showing a different keypad.

<example
name="Tel input"
file="/_content/examples/tel/tel"
langs="vue"></example>

<callout type="tip" label="Phone number validation">
Phone number formats vary <em>greatly</em> around the world (some localities even include letters in their phone numbers!) — be cautious validating phone numbers unless you know your audience is exclusively from a given location.
</callout>

## Props & Attributes

The `tel` input has no unique props but can make use of the following universal
FormKit props.

<reference-table input="tel" :attrs="['maxlength', 'minlength', 'placeholder']">
</reference-table>

## Composition keys

<reference-table type="compositionKeys" primary="composition-key">
</reference-table>
