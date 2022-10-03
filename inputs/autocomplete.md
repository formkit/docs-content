---
title: Autocomplete Input
description: A Pro input that allows users to search and select from a customizable options list. Supports single and multi-value selections.
---

<InputPageHero title="Autocomplete"></InputPageHero>

<ProInstallSnippet></ProInstallSnippet>

## Basic example

The autocomplete input allows you to search through a list of options. In this first example, let's provide the `options` prop a list of countries:

<example
name="Autocomplete"
:min-height="550"
file="/_content/examples/autocomplete-pro/autocomplete-base.vue"></example>

## Defining options

The `options` prop can accept three different formats of values:

- An array of objects with `value` and `label` keys (see example above)
- An array of strings <code>['A', 'B', 'C']</code>
- An object literal with key-value pairs <code>{ a: 'A', b: 'B', c: 'C' }</code>
- A function that returns any of the above

## Filtering

The autocomplete input will filter options with its own internal search function. You can replace this search function by providing the `filter` prop a function of your own. Your function will receive two arguments, the `option` being iterated over and the current `search` value:

<example
name="Autocomplete"
:min-height="550"
file="/_content/examples/autocomplete-pro/autocomplete-filter.vue"></example>

## Selection appearance

The autocomplete input has a `selectionAppearance` prop that determines the way a selected option is displayed.

### Text input

The autocomplete input will default to the `text-input` selection appearance. When an option is selected, the text input will display the selected option's label:

<example
name="Autocomplete"
:min-height="300"
file="/_content/examples/autocomplete-pro/autocomplete-text-input.vue"></example>

### Option

Alternatively, you can set the selection appearance of the autocomplete to `option`. In this mode, when a selection is made the text input is removed and will be replaced with a div containing the selected option's label. Additionally, the `option` selection appearance will render a `removeSelection` button that will clear the selection when clicked:

<example
name="Autocomplete"
:min-height="300"
file="/_content/examples/autocomplete-pro/autocomplete-option.vue"></example>

## Slots

Just like the [Dropdown input](/inputs/dropdown), the autocomplete input allows you to utilize slots to customize the look and feel of the options list and the selected option by leveraging the [renderless component pattern](https://adamwathan.me/renderless-components-in-vuejs/).

### Option slot

In this example, we'll use the options slot to display car brands and their logos:

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

The autocomplete supports multi-select and is available for either the `text-input` or `option` selection appearance. To enable multi-select, simply set the `multiple` prop.

<callout type="warning" label="Using the multiple prop">
When setting the <code>multiple</code> prop, the autocomplete's value must always be an array.
</callout>

### Text-input multi-select

For the `text-input` selection appearance, the selected options display as a comma-separated list:

<example
name="Autocomplete"
:min-height="550"
file="/_content/examples/autocomplete-pro/autocomplete-selection-appearance-text-multiple.vue"></example>

### Option multi-select

For the `option` selection appearance, the selected options display as a list of `divs` which render below the text input:

<example
name="Autocomplete"
:min-height="550"
file="/_content/examples/autocomplete-pro/autocomplete-selection-appearance-option-multiple.vue"></example>

## Loading options

Instead of passing a static list of options to the `options` prop, you can assign it to a function. Doing so is useful when you need to load options from an API or another source.

### Search parameter

In this example, we'll assign the `options` prop the `searchMovies` function. By doing so, `searchMovies` will receive the `config` object as an argument. Within this `config` object is the `search` property, which is the current search value. To perform our search, we'll use the `search` value as the query parameter for our API request:

<example
name="Autocomplete"
:min-height="550"
file="/_content/examples/autocomplete-pro/autocomplete-single-request.vue"></example>

### Page and hasNextPage parameters

A likely scenario you'll encounter is needing to search through a paginated API. This can be done by referencing the same `config` object as before. Within this object, we can utilize the `page` and `hasNextPage` properties. The `page` property is the current page number, and the `hasNextPage` property is a function to be called when there are more pages to load:

<example
name="Autocomplete"
:min-height="550"
file="/_content/examples/autocomplete-pro/autocomplete-pagination.vue"></example>

### Loading Style

Instead of requiring your users to click the <i>Load more</i> button to load additional options, you can set the `loadOnScroll` prop to true, which will paginate options as you scroll to the bottom of the options list.

### Option loader

FormKit's autocomplete input also provides an `optionLoader` prop that allows you to rehydrate values that are not in the options list. In this example, we'll provide the autocomplete an initial value (a movie ID), and assign the `optionLoader` to a function that will make a request to the API to get the movie:

<example
name="Autocomplete"
:min-height="550"
file="/_content/examples/autocomplete-pro/autocomplete-pagination-option-loader.vue"></example>

## Full example

Now let's combine what we've learned so far by leveraging the `option` slot for custom markup, and setting the `options` prop to a function that will return pages of movies from an API:

<example
name="Dropdown"
:min-height="550"
file="/_content/examples/autocomplete-pro/autocomplete-full.vue"></example>

<!-- Example of loading option via API. -->

<!-- ## Accessibility -->

## Props & Attributes

<reference-table input="autocomplete" :data="[
{prop: 'options', type: 'any', default: '[]', description: 'The list of options the user can select from.'},
{prop: 'load-on-scroll', type: 'boolean', default: 'false', description: 'When set to `true`, the dropdown will try loading more options based on the end-user`s scroll position'}, {prop: 'selection-appearance', type: 'string', default: 'text-input', description: 'Changes the way the option label is display.'}, {prop: 'multiple', type: 'boolean', default: 'false', description: 'Allows for multiple selections.'}, {prop: 'open-on-click', type: 'boolean', default: 'false', description: 'The autocomplete is expanded upon focus of the input, as opposed to waiting to expand until a search value is entered.'}, {prop: 'filter', type: 'function', default: 'null', description: 'Used to apply your own custom filter function for static options.'}, {prop: 'option-loader', type: 'function', default: 'null', description: 'Used for hydrating initial value, or performing an additional request to load more information of a selected option.'}]">
</reference-table>

## Section keys

You can target a specific section of an input using that section's "key", allowing you to modify that section's classes, HTML, or content (via slots). Read more about sections [here](/essentials/inputs#sections).

<reference-table type="sectionKeys" primary="section-key" :data="[
  {
    'section-key': 'selector',
    description: 'The selector section is a button element that opens the dropdown options list.'
  },
  {
    'section-key': 'selections',
    description: 'Contains individual selection sections.'
  },
  {
    'section-key': 'selection',
    description: 'Contains the selected option.'
  },
  {
    'section-key': 'listitem',
    description: 'A list item element that contains the option section.'
  },
  {
    'section-key': 'option',
    description: 'A div that contains the option content.'
  },
  {
    'section-key': 'listbox',
    description: 'The listbox section is a ul element that contains the options list.'
  },
  {
    'section-key': 'dropdownWrapper',
    description: 'Wraps the listbox section. A div that handles scrolling the listbox.'
  },
  {
    'section-key': 'optionLoading',
    description: 'A span element that is conditionally rendered within the selected option when loading is occurring.'
  },
  {
    'section-key': 'loaderIcon',
    description: 'An element for outputting an icon in the selector element when loading is occurring.'
  },
  {
    'section-key': 'selectIcon',
    description: 'An element for outputting an icon in the selector element when the dropdown is closed.'
  },
  {
    'section-key': 'loadMore',
    description: 'A list item element that is conditionally rendered at the bottom of the options list when there are more pages to load.'
  },
  {
    'section-key': 'loadMoreInner',
    description: 'A span element that acts as a wrapper for the loaderIcon within the loadMore section.'
  },
  {
    'section-key': 'removeSelection',
    description: 'A button element used for removing a specific selection.'
  },
  {
    'section-key': 'closeIcon',
    description: 'An element for outputting an icon within the removeSelection button.'
  },
  {
    'section-key': 'listboxButton',
    description: 'A button element that is used to open the dropdown.'
  }
]">
</reference-table>
