---
title: Autocomplete Input
description: A Pro input that allows users to search and select from a customizable options list. Supports single and multi-value selections.
---

::InputPageHero
---
type: "Autocomplete"
---
::

:PageToc

:ProInstallSnippet

## Basic example

The autocomplete input allows you to search through a list of options. In this first example, let's provide the `options` prop a list of countries:

::Example
---
name: "Autocomplete"
min-height: 550
file: "_content/_examples/autocomplete-pro/autocomplete-base.vue"
---
::

## Defining options

The `options` prop can accept three different formats of values:

- An array of objects with `value` and `label` keys (see example above)
- An array of strings <code>['A', 'B', 'C']</code>
- An object literal with key-value pairs <code>{ a: 'A', b: 'B', c: 'C' }</code>
- A function that returns any of the above

::Callout
---
type: "warning"
label: "Empty options"
---
If you assign options as an empty array, the input will be rendered in a disabled state.
::

## Filtering

The autocomplete input will filter options with its own internal search function. You can replace this search function by providing the `filter` prop a function of your own. Your function will receive two arguments, the `option` being iterated over and the current `search` value:

::Example
---
name: "Autocomplete"
min-height: 550
file: "_content/_examples/autocomplete-pro/autocomplete-filter.vue"
---
::

## Empty message

The autocomplete input, by default, will close the listbox when no search results are found while filtering. You can change this behavior by assigning the `empty-message` prop a message to display when no results are found:

::Example
---
name: "Autocomplete"
min-height: 550
file: "_content/_examples/autocomplete-pro/autocomplete-empty-message.vue"
---
::

## Selection appearance

The autocomplete input has a `selectionAppearance` prop that determines the way a selected option is displayed.

### Text input

The autocomplete input will default to the `text-input` selection appearance. When an option is selected, the text input will display the selected option's label:

::Example
---
name: "Autocomplete"
min-height: 300
file: "_content/_examples/autocomplete-pro/autocomplete-text-input.vue"
---
::

### Option

Alternatively, you can set the selection appearance of the autocomplete to `option`. In this mode, when a selection is made the text input is removed and will be replaced with a div containing the selected option's label. Additionally, the `option` selection appearance will render a `removeSelection` button that will clear the selection when clicked:

::Example
---
name: "Autocomplete"
min-height: 300
file: "_content/_examples/autocomplete-pro/autocomplete-option.vue"
---
::

## Slots

Just like the [Dropdown input](/inputs/dropdown), the autocomplete input allows you to utilize slots to customize the look and feel of the options list and the selected option by leveraging the [renderless component pattern](https://adamwathan.me/renderless-components-in-vuejs/).

### Option slot

In this example, we'll use the options slot to display car brands and their logos:

::Example
---
name: "Autocomplete"
min-height: 550
file: "_content/_examples/autocomplete-pro/autocomplete-option-slot.vue"
---
::

### Selection slot

If you only want to customize the display of the selected option, use the `selection` slot:

::Example
---
name: "Autocomplete"
min-height: 550
file: "_content/_examples/autocomplete-pro/autocomplete-selection-slot.vue"
---
::

## Multi-select

The autocomplete supports multi-select and is available for either the `text-input` or `option` selection appearance. To enable multi-select, simply set the `multiple` prop.

::Callout
---
type: "warning"
label: "Using the multiple prop"
---
When setting the <code>multiple</code> prop, the autocomplete's value must always be an array.
::

### Text-input multi-select

For the `text-input` selection appearance, the selected options display as a comma-separated list:

::Example
---
name: "Autocomplete"
min-height: 550
file: "_content/_examples/autocomplete-pro/autocomplete-selection-appearance-text-multiple.vue"
---
::

### Option multi-select

For the `option` selection appearance, the selected options display as a list of `divs` which render below the text input:

::Example
---
name: "Autocomplete"
min-height: 550
file: "_content/_examples/autocomplete-pro/autocomplete-selection-appearance-option-multiple.vue"
---
::

### Max

The `max` prop allows you to limit the number of options that can be selected. When the `max` limit is reached, the autocomplete input will disable the listbox:

::Example
---
name: "Autocomplete"
min-height: 550
file: "_content/_examples/autocomplete-pro/autocomplete-max.vue"
---
::

### Close on select

If you would like the autocomplete's listbox to remain open in between selections, set the `close-on-select` prop to `false`:

::Example
---
name: "Autocomplete"
min-height: 550
file: "_content/_examples/autocomplete-pro/autocomplete-close-on-select.vue"
---
::

## Loading options

Instead of passing a static list of options to the `options` prop, you can assign it to a function. Doing so is useful when you need to load options from an API or another source.

### Search parameter

In this example, we'll assign the `options` prop the `searchMovies` function. By doing so, `searchMovies` will receive the `context` object as an argument. Within this `context` object is the `search` property, which is the current search value. To perform our search, we'll use the `search` value as the query parameter for our API request:

::Example
---
name: "Autocomplete"
min-height: 550
file: "_content/_examples/autocomplete-pro/autocomplete-single-request.vue"
---
::

### Page and hasNextPage parameters

A likely scenario you'll encounter is needing to search through a paginated API. This can be done by referencing the same `context` object as before. Within this object, we can utilize the `page` and `hasNextPage` properties. The `page` property is the current page number, and the `hasNextPage` property is a function to be called when there are more pages to load:

::Example
---
name: "Autocomplete"
min-height: 550
file: "_content/_examples/autocomplete-pro/autocomplete-pagination.vue"
---
::

### Loading Style

Instead of requiring your users to click the <i>Load more</i> button to load additional options, you can set the `loadOnScroll` prop to true, which will paginate options as you scroll to the bottom of the options list.

### Option loader

#### Rehydrating values

FormKit's autocomplete input also provides an `optionLoader` prop that allows you to rehydrate values that are not in the options list. In this example, we'll provide the autocomplete an initial value (a movie ID), and assign the optionLoader to a function that will make a request to the API to get the movie:

::Example
---
name: "Autocomplete"
min-height: 550
file: "_content/_examples/autocomplete-pro/autocomplete-pagination-option-loader.vue"
---
::

Notice in the example above that the optionLoader function is passed two arguments: the `value` of the selected option (in this case, the movie ID) and the `cachedOption`. The cachedOption prop is used for preventing unnecessary lookups. If the cachedOption is not `null` it means that the selected option has already been loaded, and you can return the cachedOption directly.

#### Fetching additional data

Instead of using the `optionLoader` prop to rehydrate values that are not in the options list, you can use the optionLoader to perform a look-up to fetch additional data. In this example, after selecting an option, we are going to perform a look-up to load the selected option's movie review:

::Example
---
name: "Autocomplete"
min-height: 550
file: "_content/_examples/autocomplete-pro/autocomplete-option-loader-additional-data.vue"
---
::

## Full example

Now let's combine what we've learned so far by leveraging the `option` slot for custom markup, and setting the `options` prop to a function that will return pages of movies from an API:

::Example
---
name: "Dropdown"
min-height: 550
file: "_content/_examples/autocomplete-pro/autocomplete-full.vue"
---
::

<!-- ## Accessibility -->

## Props & Attributes

::ReferenceTable
---
input: "autocomplete"
data: [
  {
    prop: "debounce",
    type: "number",
    default: "200",
    description: "Number of milliseconds to debounce calls to an options function.",
  },
  {
    prop: "options",
    type: "any",
    default: "[]",
    description: "The list of options the user can select from.",
  },
  {
    prop: "load-on-scroll",
    type: "boolean",
    default: "false",
    description: "When set to `true`, the dropdown will try loading more options based on the end-user`s scroll position",
  },
  {
    prop: "selection-appearance",
    type: "string",
    default: "text-input",
    description: "Changes the way the option label is display.",
  },
  {
    prop: "multiple",
    type: "boolean",
    default: "false",
    description: "Allows for multiple selections.",
  },
  {
    prop: "open-on-click",
    type: "boolean",
    default: "false",
    description: "The autocomplete is expanded upon focus of the input, as opposed to waiting to expand until a search value is entered.",
  },
  {
    prop: "filter",
    type: "function",
    default: "null",
    description: "Used to apply your own custom filter function for static options.",
  },
  {
    prop: "option-loader",
    type: "function",
    default: "null",
    description: "Used for hydrating initial value, or performing an additional request to load more information of a selected option.",
  },
  {
    prop: "empty-message",
    type: "string",
    default: "undefined",
    description: "Renders a message when there are no options to display.",
  },
  {
    prop: "max",
    type: "number",
    default: "undefined",
    description: "Limits the number of options that can be selected.",
  },
  {
    prop: "close-on-select",
    type: "boolean",
    default: "true",
    description: "Closes the listbox when an option is selected.",
  },
]
---
::

## Sections

:SectionKeysIntro

The autocomplete's structure changes depending on a few different scenarios:

- Whether `selection-appearance` has been set to `text-input` (the default) or `option`.
- Whether multiple selections are enabled via the `multiple` attribute.

### Selection appearance `text-input`

::FormKitInputDiagram
---
hide-on-small: true
class: "input-diagram--autocomplete-outer autocomplete-text-input"
schema: [
  {
    name: "outer",
    position: "right",
    children: [
      {
        name: "wrapper",
        children: [
          {
            name: "label",
            content: "Your favorite athletes",
            class: "center-vert",
          },
          {
            name: "inner",
            children: [
              {
                name: "prefixIcon",
                class: "tiny-section",
              },
              {
                name: "prefix",
                class: "tiny-section",
              },
              {
                name: "input",
                content: "Serena, Pelé",
              },
              {
                name: "loaderIcon",
                position: "right",
              },
              {
                name: "listboxButton",
                position: "right",
                class: "small-pad center-vert",
                children: [
                  {
                    name: "selectIcon",
                    content: "⌄",
                    position: "right",
                  },
                ],
              },
              {
                name: "listbox",
                content: "Tiger Pelé",
                class: "wrap-text",
                position: "right",
              },
              {
                name: "suffix",
                position: "right",
                class: "tiny-section",
              },
              {
                name: "suffixIcon",
                position: "right",
                class: "tiny-section",
              },
            ],
          },
        ],
      },
      {
        name: "help",
        content: "Search for your favorite athletes.",
        position: "right",
      },
      {
        name: "messages",
        children: [
          {
            name: "message",
            content: "Sorry, that athlete could not be found.",
          },
        ],
      },
    ],
  },
]
---
::

### Selection appearance `option`, single selection

::FormKitInputDiagram
---
hide-on-small: true
class: "input-diagram--autocomplete-outer autocomplete-option-single"
schema: [
  {
    name: "outer",
    position: "right",
    children: [
      {
        name: "wrapper",
        children: [
          {
            name: "label",
            content: "Your favorite athlete",
            class: "center-vert",
            position: "right"
          },
          {
            name: "inner",
            children: [
              {
                name: "prefixIcon",
                class: "tiny-section"
              },
              {
                name: "prefix",
                class: "tiny-section"
              },
              {
                name: "input",
                class: "flex-grow-0"
              },
              {
                name: "selections",
                class: "flex flex-grow small-pad",
                children: [
                  {
                    name: "selection",
                    class: "flex flex-grow small-pad",
                    children: [
                      {
                        name: "option",
                        content: "Pelé",
                        class: "flex flex-grow small-pad",
                        children: [
                          {
                            name: "optionLoading",
                            class: "flex-grow-0"
                          }
                        ]
                      },
                      {
                        name: "removeSelection",
                        class: "small-pad",
                        children: [
                          {
                            name: "closeIcon",
                            content: "X",
                            class: "small-pad"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                name: "loaderIcon",
                position: "right"
              },
              {
                name: "listboxButton",
                position: "right",
                class: "small-pad center-vert",
                children: [
                  {
                    name: "selectIcon",
                    content: "⌄",
                    position: "right"
                  }
                ]
              },
              {
                name: "listbox",
                content: "Tiger Pelé",
                class: "wrap-text",
                position: "right"
              },
              {
                name: "suffix",
                position: "right",
                class: "tiny-section"
              },
              {
                name: "suffixIcon",
                position: "right",
                class: "tiny-section"
              },
            ]
          },
        ]
      },
      {
        name: "help",
        content: "Search for your favorite athlete.",
        position: "right"
      },
      {
        name: "messages",
        position: "right",
        children: [
          {
            name: "message",
            content: "Sorry, that athlete could not be found.",
            position: "right"
          }
        ]
      }
    ]
  }
]
---
::

### Selection appearance `option`, multiple selection

::FormKitInputDiagram
---
hide-on-small: true
class: "input-diagram--autocomplete-outer autocomplete-option-single"
schema: [
  {
    name: "outer",
    position: "right",
    children: [
      {
        name: "wrapper",
        children: [
          {
            name: "label",
            content: "Your favorite athlete",
            class: "center-vert",
            position: "right"
          },
          {
            name: "inner",
            children: [
              {
                name: "prefixIcon",
                class: "tiny-section"
              },
              {
                name: "prefix",
                class: "tiny-section"
              },
              {
                name: "input",
              },
              {
                name: "loaderIcon",
                position: "right"
              },
              {
                name: "listboxButton",
                position: "right",
                class: "center-vert small-pad",
                children: [
                  {
                    name: "selectIcon",
                    content: "⌄",
                    position: "right"
                  }
                ]
              },
              {
                name: "listbox",
                content: "Tiger Pelé",
                class: "wrap-text",
                position: "right"
              },
              {
                name: "suffix",
                position: "right",
                class: "tiny-section"
              },
              {
                name: "suffixIcon",
                position: "right",
                class: "tiny-section"
              },
            ]
          },
          {
            name: "selections",
            class: "flex flex-grow",
            children: [
              {
                name: "selection",
                class: "flex flex-grow",
                children: [
                  {
                    name: "option",
                    content: "Pelé",
                    class: "flex flex-grow",
                    children: [
                      {
                        name: "optionLoading",
                        class: "flex-grow-0",
                        position: "right"
                      }
                    ]
                  },
                  {
                    name: "removeSelection",
                    class: "small-pad",
                    position: "right",
                    children: [
                      {
                        name: "closeIcon",
                        content: "X",
                        class: "small-pad",
                        position: "right"
                      }
                    ]
                  }
                ]
              }
            ]
          },
        ]
      },
      {
        name: "help",
        content: "Search for your favorite athlete.",
      },
      {
        name: "messages",
        children: [
          {
            name: "message",
            content: "Sorry, that athlete could not be found.",
          }
        ]
      }
    ]
  }
]
---
::

### Inner listbox structure

Below is the inner options list (`listbox`) structure from the diagrams above:

::FormKitInputDiagram
---
hide-on-small: true
class: "input-diagram--autocomplete"
schema: [
  {
    name: "dropdownWrapper",
    position: "right",
    children: [
      {
        name: "listbox",
        position: "right",
        children: [
        {
            name: "emptyMessage",
            children: [
              {
                name: "emptyMessageInner",
                content: "No options to display.",
              }
            ]
          },
          {
            name: "listitem",
            class: "flex flex-grow",
            position: "right",
            children: [
              {
                name: "selectedIcon",
                content: "✔️"
              },
              {
                name: "option",
                content: "Serena",
                position: "right",
                class: "flex flex-grow"
              },
            ]
          },
          {
            name: "loadMore",
            children: [
              {
                name: "loadMoreInner",
                children: [
                  {
                    name: "loaderIcon",
                    content: "⏳",
                    class: "text-center"
                  }
                ]
              },
            ]
          },
        ]
      },
    ]
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
