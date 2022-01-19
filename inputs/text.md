<InputPageHero
title="Text input"
icon="IconInputText"
:pro="false"
project-price=""
data-price=""></InputPageHero>

The `text` input uses HTML's [native text input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/text). It allows a user to enter a single line of text.

<example
name="Text input"
file="/_content/examples/text/text.vue"
langs="vue"></example>

## Props & Attributes

The `text` input has no unique props but can make use of the following universal
FormKit props.

<reference-table input="text" :attrs="['maxlength', 'minlength', 'placeholder']">
</reference-table>

## Composition keys

<reference-table type="compositionKeys" primary="composition-key">
</reference-table>
