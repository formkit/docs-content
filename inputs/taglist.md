---
title: Taglist Input
description: A Pro input that allows users to search and select from a customizable options list. Supports single and multi-value selections.
---

::InputPageHero
---
type: "Taglist"
---
::

:PageToc

:ProInstallSnippet

The `taglist` input allows users to search through a list of options and apply any number of tags. Users can also drag and drop tags to re-order:

The `options` prop can accept three different formats of values:

- An array of objects with `value` and `label` keys (see example above)
- An array of strings `['A', 'B', 'C']`
- An object literal with key-value pairs `{ a: 'A', b: 'B', c: 'C' }`
- A function that returns any of the above

::Callout
---
type: "warning"
label: "Empty options"
---
If you assign options as an empty array, the input will be rendered in a disabled state.
::

## Basic example

The `taglist` input allows users to search through a list of options and apply any number of tags. Users can also drag and drop tags to re-order:

::Example
---
name: "Taglist"
min-hight: 550
file: "_content/_examples/taglist/taglist-base.vue"
---
::

## Filtering

The taglist input will filter options with its own internal search function. You can replace this search function by providing the `filter` prop a function of your own. Your function will receive two arguments, the `option` being iterated over and the current `search` value:

::Example
---
name: "Taglist"
min-hight: 550
file: "_content/_examples/taglist/taglist-filter.vue"
---
::

## Allow new values

The taglist input, unlike the dropdown or autocomplete inputs, allows you to enter an arbitrary value (a value not in the list of options). This is useful for creating new tags on the fly. To enable this feature, set the `allow-new-values` prop to `true`.

::Example
---
name: "Taglist"
min-hight: 550
file: "_content/_examples/taglist/taglist-allow-new-values.vue"
---
::

## Dynamic options

Instead of passing a static list of options to the `options` prop, you can assign it to a function. Doing so is useful when you need to load options from an API or another source.

### Search parameter

In this example, we'll assign the `options` prop the `searchMovies` function. By doing so, `searchMovies` will receive the `context` object as an argument. Within this `context` object is the `search` property, which is the current search value. To perform our search, we'll use the `search` value as the query parameter for our API request:

::Example
---
name: "Taglist"
min-hight: 550
file: "_content/_examples/taglist/taglist-single-request.vue"
---
::


### Page and hasNextPage parameters

A likely scenario you'll encounter is needing to search through a paginated API. This can be done by referencing the same `context` object as before. Within this object, we can utilize the `page` and `hasNextPage` properties. The `page` property is the current page number, and the `hasNextPage` property is a function to be called when there are more pages to load:

::Example
---
name: "Taglist"
min-hight: 550
file: "_content/_examples/taglist/taglist-pagination.vue"
---
::

### Loading Style

Instead of requiring your users to click the <i>Load more</i> button to load additional options, you can set the `loadOnScroll` prop to true, which will paginate options as you scroll to the bottom of the options list.

### Option loader

#### Rehydrating values

FormKit's taglist input also provides an `optionLoader` prop that allows you to rehydrate values that are not in the options list. In this example, we'll provide the taglist an initial value (a movie ID), and assign the optionLoader to a function that will make a request to the API to get the movie:

::Example
---
name: "Taglist"
min-hight: 550
file: "_content/_examples/taglist/taglist-pagination-option-loader.vue"
---
::

### Loading Style

Instead of requiring your users to click the <i>Load more</i> button to load additional options, you can set the `loadOnScroll` prop to true, which will paginate options as you scroll to the bottom of the options list.

### Load on created

If you would rather load options when the taglist is created, you can set the `load-on-created` prop to true, and our function, `loadCurrentlyPopularMovies` will be called without the user needing to expand the listbox:

::Example
---
name: "Taglist"
min-height: 550
file: "_content/_examples/taglist/taglist-load-on-created.vue"
---
::

Notice in the example above that the optionLoader function is passed two arguments: the `value` of the selected option (in this case, the movie ID) and the `cachedOption`. The cachedOption is used for preventing unnecessary lookups. If the cachedOption is not `null` it means that the selected option has already been loaded, and you can return the cachedOption directly.

## Tag appearance

Just like the [Dropdown input](/inputs/dropdown) or [Autocomplete input](/inputs/autocomplete), the taglist input allows you to utilize slots to customize the look and feel of the options list and the selected option by leveraging the [renderless component pattern](https://adamwathan.me/renderless-components-in-vuejs/).

In this example, we are going to use the `tag` slot to customize the look of the tags:

::Example
---
name: "Taglist"
min-hight: 550
file: "_content/_examples/taglist/taglist-slots.vue"
---
::
## Behavioral props

### Empty message

The taglist input, by default, will not expand the listbox when no search results are found while filtering. You can change this behavior by assigning the `empty-message` prop a message to display when no results are found:

::Example
---
name: "taglist"
min-height: 550
file: "_content/_examples/taglist/taglist-empty-message.vue"
---
::

### Max

The `max` prop allows you to limit the number of options that can be selected. When the `max` limit is reached, the taglist input will disable the listbox:

::Example
---
name: "Taglist"
min-hight: 550
file: "_content/_examples/taglist/taglist-max.vue"
---
::

### Close on select

If you would like the taglist's listbox to remain open in between selections, set the `close-on-select` prop to `false`:

::Example
---
name: "Taglist"
min-hight: 550
file: "_content/_examples/taglist/taglist-close-on-select.vue"
---
::

### (NEW) Reload on commit

If you want the options to be reloaded (with static options, this would filter the options with the value of empty string, and with dynamic options, this would make a request to the options loader with the value of empty string) when the user commits a selection, use the `reload-on-commit` prop:

::Example
---
name: "Autocomplete"
min-height: 550
file: "_content/_examples/taglist/taglist-reload-on-commit.vue"
---
::

### (NEW) Open on click

To enable opening the taglist's listbox on click of its search input, set the `open-on-click` prop to `true`:

::Example
---
name: "taglist"
min-height: 550
file: "_content/_examples/taglist/taglist-open-on-click.vue"
---
::

### (NEW) Open on focus

If you would like to open the taglist's listbox anytime its search input is focused, set the `open-on-focus` prop to `true`:

::Example
---
name: "taglist"
min-height: 550
file: "_content/_examples/taglist/taglist-open-on-focus.vue"
---
::

::Callout
---
type: "warning"
label: "Open on focus vs Open on click"
---
Open on focus encompasses open on click.
::

### (NEW) Open on remove

If you want the listbox to expand when an selection is removed, use the `open-on-remove` prop:

::Example
---
name: "Autocomplete"
min-height: 550
file: "_content/_examples/taglist/taglist-open-on-remove.vue"
---
::


## Full example

Now let's combine what we've learned so far by leveraging the `tag` slot for custom markup, and setting the `options` prop to a function that will return pages of movies from an API:

::Example
---
name: "Taglist"
min-hight: 550
file: "_content/_examples/taglist/taglist-full.vue"
---
::


## Props & Attributes

::ReferenceTable
---
input: "taglist"
data: [
  {
    prop: "debounce",
    type: "number",
    default: "200",
    description: "Number of milliseconds to debounce calls to an options function."
  },
  {
    prop: "options",
    type: "any",
    default: "[]",
    description: "The list of options the user can select from."
  },
  {
    prop: "load-on-scroll",
    type: "boolean",
    default: "false",
    description: "When set to `true`, the dropdown will try loading more options based on the end-user`s scroll position"
  },
  {
    prop: "open-on-click",
    type: "boolean",
    default: "false",
    description: "The autocomplete is expanded upon focus of the input, as opposed to waiting to expand until a search value is entered."
  },
  {
    prop: "filter",
    type: "function",
    default: "null",
    description: "Used to apply your own custom filter function for static options."
  },
  {
    prop: "option-loader",
    type: "function",
    default: "null",
    description: "Used for hydrating initial value, or performing an additional request to load more information of a selected option."
  },
  {
    prop: "allow-new-values",
    type: "boolean",
    default: "false", description: "Allows end-user to enter a new value that does not exist within the options list."
  },
  {
    prop: "disable-drag-and-drop",
    type: "boolean",
    default: "true", description: "Disabled end-user from sorting tags by dragging and dropping."
  },
  {
    prop: "empty-message",
    type: "string",
    default: "undefined",
    description: "Renders a message when there are no options to display."
  },
  {
    prop: "max",
    type: "number",
    default: "undefined",
    description: "Limits the number of options that can be selected."
  },
  {
    prop: "close-on-select",
    type: "boolean",
    default: "true",
    description: "Closes the listbox when an option is selected."
  },
  {
    "prop": "open-on-remove",
    type: "boolean",
    default: "false",
    "description": "When the `selection-removable` prop is set to `true`, the dropdown will not open after the selected value is removed. You can change this behavior by setting the `open-on-remove` prop to `true`."
  },
  {
    "prop": "open-on-focus",
    "type": "boolean",
    "default": "false"
  },
  {
    "prop": "options-appearance",
    type: "string",
    default: "undefined",
    "description": "For multi-select dropdowns, this prop allows you to customize the look and feel of the selected options. Possible values are `default` (the default) or `checkbox`."
  },
  {
    "prop": "always-load-on-open",
    type: "boolean",
    default: "false",
    "description": "When set to `true`, the dropdown will always load the options when the listbox is opened."
  },
  {
    name: "load-on-created",
    type: "boolean",
    default: "false",
    "description": "When set to `true`, the dropdown will load the options when the node is created."
  }
]
---
::


::ReferenceTable
---
type: "sectionKeys"
primary: "section-key"
data: [
  {
    "section-key": "selector",
    description: "The selector section is a button element that opens the dropdown options list."
  },
  {
    "section-key": "selections",
    description: "Contains individual selection sections."
  },
  {
    "section-key": "selection",
    description: "Contains the selected option."
  },
  {
    "section-key": "listitem",
    description: "A list item element that contains the option section."
  },
  {
    "section-key": "option",
    description: "A div that contains the option content."
  },
  {
    "section-key": "listbox",
    description: "The listbox section is a ul element that contains the options list."
  },
  {
    "section-key": "dropdownWrapper",
    description: "Wraps the listbox section. A div that handles scrolling the listbox."
  },
  {
    "section-key": "optionLoading",
    description: "A span element that is conditionally rendered within the selected option when loading is occurring."
  },
  {
    "section-key": "loaderIcon",
    description: "An element for outputting an icon in the selector element when loading is occurring."
  },
  {
    "section-key": "selectIcon",
    description: "An element for outputting an icon in the selector element when the dropdown is closed."
  },
  {
    "section-key": "loadMore",
    description: "A list item element that is conditionally rendered at the bottom of the options list when there are more pages to load."
  },
  {
    "section-key": "loadMoreInner",
    description: "A span element that acts as a wrapper for the loaderIcon within the loadMore section."
  },
  {
    "section-key": "removeSelection",
    description: "A button element used for removing a specific selection."
  },
  {
    "section-key": "closeIcon",
    description: "An element for outputting an icon within the removeSelection button."
  },
  {
    "section-key": "listboxButton",
    description: "A button element that is used to open the dropdown."
  },
  {
    "section-key": "emptyMessage",
    description: "A list item element that is conditionally rendered when there are no options to display."
  },
  {
    "section-key": "emptyMessageInner",
    description: "A span element that acts as a wrapper for the emptyMessage section."
  }
]
---
::

