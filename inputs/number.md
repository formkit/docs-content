<InputPageHero
title="Number input"
icon="IconInputNumber"
:pro="false"
project-price=""
data-price=""></InputPageHero>

The `number` input uses HTML's [native number input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/number). It allows a user to enter a single integer or decimal value.

<example
name="Number input"
file="/_content/examples/number/number"
langs="vue"></example>

## Props & Attributes

The `number` input has no unique props but can make use of the following universal
FormKit props and native attributes.

<reference-table :attrs="['min', 'max', 'step']" input="number">
</reference-table>

## Composition keys

<reference-table type="compositionKeys" primary="composition-key">
</reference-table>
