---
title: Dropdown Input
description: A Pro input that allows users to select from customizable options list.
---

<InputPageHero title="Dropdown"></InputPageHero>

<!-- Installation  -->

The `dropdown` input is used to display a list of options to the end-user. The end-user must choose a single option from the list. In the below example, we are setting the `options` prop to a static array of strings.

Base Example (static list)

<!-- Base Example (CC selector) -->

## Loading options

Instead of passing a static list of options to the `options` prop, you can assign it to a function that returns a promise. This is useful when you need to load options from an API or another source.

<!-- Example of loading options via API without pagination. -->

### Single page

### Multiple pages

What if you need to load options from an API, but need to paginate the results? Here is an example of how to do that..

<!-- Example of loading options via API with pagination. -->
<!-- Example of loading options via API with cursor. -->
<!-- Example of loading options via API with offset. -->

### Loading Style

If you would rather allow the user to load more options without having to click the `Load more` button, you can set the `load-on-scroll` prop to true, and the options will paginate as the end-user scrolls to the bottom of the list.

### Loading a selected option

In addition to loading options from a remote source, you can also load a selected option. This is useful when the option values are that of IDs, and you would like to fetch more information about the given option on selection.

<!-- Example of loading option via API. -->

## Overscroll

When using the dropdown with static options, FormKit's dropdown also comes with a unique feature called `overscroll`. By setting `overscroll` equal to true, the list behaves more like....

## Accessibility

The `dropdown` input utilizes

## Props & Attributes

<reference-table input="dropdown" :data="[
{prop: 'options', type: 'any', default: '[]', description: 'The list of options the user can select from.'},
{prop: 'load-on-scroll', type: 'boolean', default: 'false', description: 'When set to `true`, the dropdown will try loading more options based on the end-user`s scroll position'}]">
</reference-table>

## Section keys

You can target a specific section of an input using that section's "key". Read more about sections [here](/essentials/inputs#sections).

<div>
  <formkit-input-diagram />
</div>

<reference-table type="sectionKeys" primary="section-key" :without="[]">
</reference-table>
