<InputPageHero
title="Search input"
icon="IconInputSearch"
:pro="false"
project-price=""
data-price=""></InputPageHero>

The `search` input uses HTML's [native search input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/search). Generally, search inputs are the same as text inputs, but may have different styling or features based on the browser. For example, browsers often add a small "X" to clear the input when it has a value.

<example
name="Search input"
file="/_content/examples/search/search"
langs="vue"></example>

## Props & Attributes

The `search` input has no unique props but can make use of the following universal
FormKit props.

<reference-table input="search" :attrs="['maxlength', 'minlength', 'placeholder']">
</reference-table>

## Composition keys

<reference-table type="compositionKeys" primary="composition-key">
</reference-table>
