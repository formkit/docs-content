---
title: Transfer List Input
description: The transfer list input allows users to transfer values between two lists. It is useful for situations where you need to select multiple values from a large list of options.
---

<InputPageHero title="Transfer List"></InputPageHero>

<page-toc></page-toc>

<ProInstallSnippet></ProInstallSnippet>

## Basic example

The transfer list input is ideal for situations where the end-user needs to select and sort multiple values from a list of options. In this example, we are going to pass the transfer list an array of guest names to the `options` prop and allow the user to select VIPs:

<example
name="Transfer List"
:min-height="550"
file="/\_content/examples/transfer-list/transfer-list-basic-example.vue"></example>

## Defining options

The `options` prop can accept three different formats of values:

- An array of objects with `value` and `label` keys (see example above)
- An array of strings <code>['A', 'B', 'C']</code>
- An object literal with key-value pairs <code>{ a: 'A', b: 'B', c: 'C' }</code>
- A function that returns any of the above

## Searchable

For larger lists of options, you can show allow the end-user to filter options by setting the `searchable` prop:

<example
name="Transfer List"
:min-height="550"
file="/\_content/examples/transfer-list/transfer-list-searchable.vue"></example>

## Filtering

The transfer list input will filter options with its own internal search function. You can replace this search function by providing the `filter` prop a function of your own. Your function will receive two arguments, the `option` being iterated over and the current `search` value:

<example
name="Taglist"
:min-height="550"
file="/_content/examples/transfer-list/transfer-list-filter.vue"></example>

## Source and target empty message

If you would like to indicate to the user that the source or target list is empty, you can set the `source-empty-message` and `target-empty-message` props:

<example
name="Taglist"
:min-height="550"
file="/_content/examples/transfer-list/transfer-list-empty-message.vue"></example>

## Max

The `max` prop allows you to limit the number of options that can be selected. When the `max` limit is reached, the taglist input will disable the listbox:

<example
name="Taglist"
:min-height="550"
file="/_content/examples/taglist/taglist-max.vue"></example>

## Close on select

If you would like the taglist's listbox to remain open in between selections, set the `close-on-select` prop to `false`:

<example
name="Taglist"
:min-height="550"
file="/_content/examples/taglist/taglist-close-on-select.vue"></example>

## Slots

Just like the [Dropdown input](/inputs/dropdown) or [Autocomplete input](/inputs/autocomplete), the taglist input allows you to utilize slots to customize the look and feel of the options list and the selected option by leveraging the [renderless component pattern](https://adamwathan.me/renderless-components-in-vuejs/).

In this example, we are going to use the `tag` slot to customize the look of the tags:

<example
name="Taglist"
:min-height="550"
file="/\_content/examples/taglist/taglist-slots.vue"></example>

>

## Loading options

Instead of passing a static list of options to the `options` prop, you can assign it to a function. Doing so is useful when you need to load options from an API or another source.

### Search parameter

In this example, we'll assign the `options` prop the `searchMovies` function. By doing so, `searchMovies` will receive the `context` object as an argument. Within this `context` object is the `search` property, which is the current search value. To perform our search, we'll use the `search` value as the query parameter for our API request:

<example
name="Taglist"
:min-height="550"
file="/_content/examples/taglist/taglist-single-request.vue"></example>

### Page and hasNextPage parameters

A likely scenario you'll encounter is needing to search through a paginated API. This can be done by referencing the same `context` object as before. Within this object, we can utilize the `page` and `hasNextPage` properties. The `page` property is the current page number, and the `hasNextPage` property is a function to be called when there are more pages to load:

<example
name="Taglist"
:min-height="550"
file="/_content/examples/taglist/taglist-pagination.vue"></example>

### Loading Style

Instead of requiring your users to click the <i>Load more</i> button to load additional options, you can set the `loadOnScroll` prop to true, which will paginate options as you scroll to the bottom of the options list.

### Option loader

#### Rehydrating values

FormKit's taglist input also provides an `optionLoader` prop that allows you to rehydrate values that are not in the options list. In this example, we'll provide the taglist an initial value (a movie ID), and assign the optionLoader to a function that will make a request to the API to get the movie:

<example
name="Taglist"
:min-height="550"
file="/_content/examples/taglist/taglist-pagination-option-loader.vue"></example>

Notice in the example above that the optionLoader function is passed two arguments: the `value` of the selected option (in this case, the movie ID) and the `cachedOption`. The cachedOption is used for preventing unnecessary lookups. If the cachedOption is not `null` it means that the selected option has already been loaded, and you can return the cachedOption directly.

#### Fetching additional data

Instead of using the `optionLoader` prop to rehydrate values that are not in the options list, you can use the optionLoader to perform a look-up to fetch additional data, or even just modify the option's current label. In this example, we'll use the optionLoader to fetch the movie's poster image:

<example
name="Taglist"
:min-height="550"
file="/_content/examples/taglist/taglist-option-loader-additional-data.vue"></example>

## Full example

Now let's combine what we've learned so far by leveraging the `tag` slot for custom markup, and setting the `options` prop to a function that will return pages of movies from an API:

<example
name="Taglist"
:min-height="550"
file="/_content/examples/taglist/taglist-full.vue"></example>

## Props & Attributes

<reference-table input="taglist" :data="[
  {
    prop: 'debounce',
    type: 'number',
    default: '200',
    description: 'Number of milliseconds to debounce calls to an options function.'
  },
  {
    prop: 'options',
    type: 'any',
    default: '[]',
    description: 'The list of options the user can select from.'
  },
  {
    prop: 'load-on-scroll',
    type: 'boolean',
    default: 'false',
    description: 'When set to `true`, the dropdown will try loading more options based on the end-user`s scroll position'
  },
  {
    prop: 'open-on-click',
    type: 'boolean',
    default: 'false',
    description: 'The autocomplete is expanded upon focus of the input, as opposed to waiting to expand until a search value is entered.'
  },
  {
    prop: 'filter',
    type: 'function',
    default: 'null',
    description: 'Used to apply your own custom filter function for static options.'
  },
  {
    prop: 'option-loader',
    type: 'function',
    default: 'null',
    description: 'Used for hydrating initial value, or performing an additional request to load more information of a selected option.'
  },
  {
    prop: 'allow-new-values',
    type: 'boolean',
    default: 'false', description: 'Allows end-user to enter a new value that does not exist within the options list.'
  },
  {
    prop: 'disable-drag-and-drop',
    type: 'boolean',
    default: 'true', description: 'Disabled end-user from sorting tags by dragging and dropping.'
  },
  {
    prop: 'empty-message',
    type: 'string',
    default: 'undefined',
    description: 'Renders a message when there are no options to display.'
  },
  {
    prop: 'max',
    type: 'number',
    default: 'undefined',
    description: 'Limits the number of options that can be selected.'
  },
  {
    prop: 'close-on-select',
    type: 'boolean',
    default: 'true',
    description: 'Closes the listbox when an option is selected.'
  }
]">
</reference-table>

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
  },
  {
    'section-key': 'emptyMessage',
    description: 'A list item element that is conditionally rendered when there are no options to display.'
  },
  {
    'section-key': 'emptyMessageInner',
    description: 'A span element that acts as a wrapper for the emptyMessage section.'
  }
]">
</reference-table>-->
