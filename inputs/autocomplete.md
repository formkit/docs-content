---
title: Autocomplete Input
description: A Pro input that allows users to search and select from a customizable options list. Supports single and multi-value selections.
---

<InputPageHero title="Autocomplete"></InputPageHero>

<ProInstallSnippet></ProInstallSnippet>

The autocomplete input is used to search through a list of options. In this first example, let's set the `options` prop to a list of countries.


## Basic example

<example
name="Autocomplete"
:min-height="550"
file="/_content/examples/autocomplete-pro/autocomplete-base.vue"></example>

## Defining options
The `options` prop can accept three different formats of values:

- Array of objects with `value` and `label` keys (see example above)
- Array of strings <code>['A', 'B', 'C']</code>
- Object literal with key-value pairs <code>{ a: 'A', b: 'B', c: 'C' }</code>

## Filtering

The autocomplete input will filter options with its own internal search function. You can replace this search function by assigning the `filter` prop to a function of your own. Your function will receive two arguments, the `option` being iterated over and the current `search` value:

<example
name="Autocomplete"
:min-height="550"
file="/_content/examples/autocomplete-pro/autocomplete-filter.vue"></example>

## Selection appearance

The autocomplete input has a `selectionAppearance` prop that determines the way a selected option is displayed.

### Text input

As previously seen above, the autocomplete input will default to the `text-input` selection appearance. When an option is selected, the text input will display the selected option's label:

<example
name="Autocomplete"
:min-height="300"
file="/_content/examples/autocomplete-pro/autocomplete-text-input.vue"></example>

### Option

Alternatively, you can set the selection appearance of the autocomplete to `option`. When a selection is made in this mode the text input is removed and replaced with a div containing the selected option's label. Additionally, the `option` selection appearance will render a `removeSelection` button that will clear the selection when clicked:

<example
name="Autocomplete"
:min-height="300"
file="/_content/examples/autocomplete-pro/autocomplete-option.vue"></example>

## Slots

Just like the [Dropdown input](/inputs/dropdown), the autocomplete input allows you to use slots to customize the look and feel of the options list and the selected option by leveraging the [renderless component pattern](https://adamwathan.me/renderless-components-in-vuejs/).

### Option slot

In this example, we are going to use the options slot to display car brands and their logos:

<example
name="Autocomplete"
:min-height="550"
file="/_content/examples/autocomplete-pro/autocomplete-option-slot.vue"></example>

### Selection slot

If you only want to customize the display of the selected option, use the `selection` slot:

<example
name="Autocomplete"
:min-height="550"
file="/_content/examples/autocomplete-pro/autocomplete-selection-slot.vue"></example>


## Multi-select

The autocomplete supports multi-select and is available for either the `text-input` or `option` selection appearance. To enable multi-select, simply set the `multiple` prop. Please note: when setting the `multiple` prop, the autocomplete's value must always be an array.

### Text-input multi-select

For the `text-input` selection appearance, the selected options are displayed as a comma-separated list:

<example
name="Autocomplete"
:min-height="550"
file="/_content/examples/autocomplete-pro/autocomplete-selection-appearance-text-multiple.vue"></example>

### Option multi-select

For the `option` selection appearance, the selected options are displayed as a list of `divs` that render below the text input:

<example
name="Autocomplete"
:min-height="550"
file="/_content/examples/autocomplete-pro/autocomplete-selection-appearance-option-multiple.vue"></example>

## Loading options

Instead of passing a static list of options to the `options` prop, you can assign it to a function that returns a promise. This is useful when you need to load options from an API or another source.

### Search parameter

In the example below, we are going to assign the `options` prop our `searchMovies` function. By doing so, `searchMovies` will receive the `config` object as an argument. Within this config object is the `search` property, which is the current search value. To perform our search, let's use the `search` value as the query parameter for our API request:

<example
name="Autocomplete"
:min-height="550"
file="/_content/examples/autocomplete-pro/autocomplete-single-request.vue"></example>

### Page and hasNextPage parameters
What if you need to search through a paginated API? By referencing the same `config` object as before, we can utilize the `page` and `hasNextPage` properties. The `page` property is the current page number, and the `hasNextPage` property is a function to be called when there are more pages to load:

<example
name="Autocomplete"
:min-height="550"
file="/_content/examples/autocomplete-pro/autocomplete-pagination.vue"></example>

### Loading Style

If you would rather allow the user to load more options without having to click the `Load more` button, you can set the `loadOnScroll` prop to true, and the options will paginate as you scroll to the bottom of the options list.

### Loading selected option

In addition to loading options from a remote source, you can also load a selected option. This is useful when the option values are that of IDs and you would like to fetch more information about the given option on selection. In this example, after selecting an option, we are going to load the movie's genres and concatenate them with the movie's title:

<example
name="Autocomplete"
:min-height="550"
file="/_content/examples/autocomplete-pro/autocomplete-pagination-option-loader.vue"></example>

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
