# Submit input

The `submit` input uses HTML's [native button element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button). The `label` prop is used to populate the text of the button — or alternatively you can use the default slot.

<callout type="info" label="Button Element">
Type <code>submit</code> input uses a <code>button</code> element instead of an <code>input=type"submit"</code> because as a container element, a <code>button</code> can include content and pseudo elements — making them the more flexible option for developers.
</callout>

<example
name="Submit input"
file="/_content/examples/submit/submit"
langs="vue"></example>

## Props & Attributes

The `submit` input (along with [`button`](/inputs/button)) is unique in that it does not actively receive input other than a transient click. However, nearly all of the base input props still technically exist on the input.

<reference-table input="button">
</reference-table>

## Composition keys

<reference-table type="compositionKeys" primary="composition-key" :without="['inner']">
</reference-table>
