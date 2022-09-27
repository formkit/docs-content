---
title: Autocomplete Input
description: A Pro input that allows users to search and select from a customizable options list. Supports single and multi-value selections.
---

<InputPageHero title="Autocomplete"></InputPageHero>

<ProInstallSnippet></ProInstallSnippet>

The `autocomplete` input is used to search through a list of potential options. In this first example, let's set the `options` prop to a list of countries.


## Basic example

<example
name="Autocomplete"
:min-height="550"
file="/_content/examples/autocomplete-pro/autocomplete-base.vue"></example>

## Defining options
The `options` prop can accept three different formats of values:

- Array of objects with `value` and `label` keys (see example above)
- Array of strings <code>['A', 'B', 'C']</code>
- Object literal <code>{ a: 'A', b: 'B', c: 'C' }</code>

## Filtering

By default, the `autocomplete` input will filter with its own internal search function. You can replace this search function by assigning the `filter` prop to a function of your own. Your `filter` function will receive two arguments, the `option` being iterated over and the current `search` value:

<example
name="Autocomplete"
:min-height="550"
file="/_content/examples/autocomplete-pro/autocomplete-filter.vue"></example>

## Selection appearance

The `autocomplete` has a `selectionAppearance` prop that determines the way a selected option is displayed. By default, the appearance of the `selection-appearance` is set to `text-input`, which sets value of the text input to the label of the selected option. This selection appearance can be seen in the previous examples.

The `selectionAppearance` can alternatively be set to `option`, which wraps the selected option in a div. This is useful when you want to implement custom styling. Below is a basic example:

<example
name="Autocomplete"
:min-height="550"
file="/_content/examples/autocomplete-pro/autocomplete-selection-appearance-option.vue"></example>

## Slots

Just like the [Dropdown input](/inputs/dropdown), the `autocomplete` input allows you to use slots to customize the look and feel of the options list.

### Option slot

In this example, we are going to override the option slot to include a span with the country's flag alongside the original option label:

<example
name="Autocomplete"
:min-height="550"
file="/_content/examples/autocomplete-pro/autocomplete-option-slot.vue"></example>

### Selection slot

In this example, we are going to override the selection slot to include a span with the country's flag alongside the original option label:

<example
name="Autocomplete"
:min-height="550"
file="/_content/examples/autocomplete-pro/autocomplete-selection-slot.vue"></example>

## Multi-select

The `autocomplete` supports multi-select and is available for either the `text-input` or `option` selection appearance. To enable multi-select, simply set the `multiple` prop on the `Autocomplete` input.

## Text input selection appearance

For the `text-input` selection appearance, the selected options are displayed as a comma-separated list:

<example
name="Autocomplete"
:min-height="550"
file="/_content/examples/autocomplete-pro/autocomplete-selection-appearance-text-multiple.vue"></example>

## Option selection appearance

For the `option` selection appearance, the selected options are displayed as a list of divs that render underneath the text input.

### Single page

Here we can see we are loading options using the search term.

### Multiple pages

What if you need to load options from an API, but need to be able to not only search, but also paginate the list of options? Here is an example of how to do that..

### Loading Style

If you would rather allow the user to load more options without having to click the `Load more` button, you can set the `loadOnScroll` prop to true, and the options will paginate as the end-user scrolls to the bottom of the list.

### Loading a selected option

In addition to loading options from a remote source, you can also load a selected option. This is useful when the option values are that of IDs, and you would like to fetch more information about the given option on selection.

<!-- Example of loading option via API. -->

## Accessibility

## Props & Attributes

<!-- <reference-table input="autocomplete">
</reference-table> -->

## Section keys

You can target a specific section of an input using that section's "key". Read more about sections [here](/essentials/inputs#sections).

<div>
  <formkit-input-diagram />
</div>

<reference-table type="sectionKeys" primary="section-key" :without="[]">
</reference-table>
