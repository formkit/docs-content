<InputPageHero
title="Button input"
icon="IconInputButton"
:pro="false"
project-price=""
data-price=""></InputPageHero>

The `button` input uses HTML's [native button element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button). The `label` prop is used to populate the text of the button — or alternatively you can use the default slot.

<example
name="Button input"
file="/_content/examples/button/button"
langs="vue"></example>

## Props & Attributes

The `button` input is unique in that it does not actively receive input other than a transient click. However, nearly all of the base input props still technically exist on the input.

<reference-table input="button">
</reference-table>

## Composition keys

<reference-table type="compositionKeys" primary="composition-key" :without="['inner']">
</reference-table>
