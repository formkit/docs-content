---
title: Dropdown Input
description: A Pro input that allows users to select from a customizable options list.
---

:InputPageHero{title="Dropdown"}

:PageToc

:ProInstallSnippet

## Basic example

The `dropdown` input allows users to select a value from a customizable list of options:

::Example
---
name: "Dropdown"
min-height: 550
file: "_content/_examples/dropdown/dropdown-base.vue"
---
::


## Defining options

The `options` prop can accept three different formats of values:

- An array of objects with `value` and `label` keys (see example above)
- An array of strings `['A', 'B', 'C']`
- An object literal with key-value pairs `{ a: 'A', b: 'B', c: 'C' }`
- A function that returns any of the above

## Empty message

The dropdown input, by default, will be rendered in a disabled state if no options are passed. Optionally, you may pass the `empty-message` prop a message to display when no options are available:

::Example
---
name: "Dropdown"
min-height: 550
file: "_content/_examples/dropdown/dropdown-empty-message.vue"
---
::


## Slots

Unlike native select elements, the `dropdown` input allows you to customize the options list with markup.

### Option slot

The `dropdown` input allows you to customize the look and feel of each option by using the `option` slot. In this example, we are using the `option` slot to display each option's asset; logo and name:

::Example
---
name: "Dropdown"
min-height: 550
file: "_content/_examples/dropdown/dropdown-option-slot.vue"
---
::


### Selection slot

If you only want to customize the display of the selected option, use the `selection` slot:

::Example
---
name: "Dropdown"
min-height: 550
file: "_content/_examples/dropdown/dropdown-selection-slot.vue"
---
::


## Loading options

Instead of passing a static list of options to the `options` prop, you can assign it to a function. Doing so is useful when you need to load options from an API or another source.

<!-- Example of loading options via API without pagination. -->

### Single request

Let's say we had an API endpoint that returned all the options we needed for a given `dropdown` input. Here is an example of how we could write the `dropdown` input to load options from a single request:

::Example
---
name: "Dropdown"
min-height: 550
file: "_content/_examples/dropdown/dropdown-single-request.vue"
---
::


In the example above, we are assigning the `options` prop to the `loadHorrorMovies` function. After the request, we're iterating over the results to ensure that we return an array of objects with explicit `value` and `label` properties.

### Multiple pages

What about loading options from an API where you need to be able to make multiple requests to perform pagination? When a function is set to the `options` prop it is passed FormKit node's `context` object as an argument. Within this `context` object are `page` and `hasNextPage` properties. The `page` property is the current page number, and the `hasNextPage` property is a function to be called when there are more pages to load:

::Example
---
name: "Dropdown"
min-height: 550
file: "_content/_examples/dropdown/dropdown-pagination.vue"
---
::


In the above example, we are calling `hasNextPage` when we determine there are more pages to load. When this is done, FormKit appends a `Load more` option at the end of the rendered options list and automatically increments its `page` property. When the user selects the `Load more` option, the function assigned to the `options` prop is called again, and the process repeats.

### Option loader

#### Rehydrating values

FormKit's dropdown input also provides an `optionLoader` prop that allows you to rehydrate values that are not in the options list. In this example, we'll provide the autocomplete an initial value (a movie ID), and assign the optionLoader to a function that will make a request to the API to get the movie:

::Example
---
name: "Dropdown"
min-height: 550
file: "_content/_examples/dropdown/dropdown-option-loader.vue"
---
::


Notice in the example above that the optionLoader function is passed two arguments: the `value` of the selected option (in this case, the movie ID) and the `cachedOption`. The cachedOption prop is used for preventing unnecessary lookups. If the cachedOption is not `null` it means that the selected option has already been loaded, and you can return the cachedOption directly.

#### Fetching additional data

Instead of using the `optionLoader` prop to rehydrate values that are not in the options list, you can use the optionLoader to perform a look-up to fetch additional data. In this example, after selecting an option, we are going to perform a look-up to load the selected option's movie review:

::Example
---
name: "Dropdown"
min-height: 550
file: "_content/_examples/dropdown/dropdown-option-loader-review.vue"
---
::


### Load on scroll

If you would rather allow the user to load more options without having to click the <i>Load more</i> option at the bottom of the options list, you can set the `load-on-scroll` prop to true, and our function, `loadCurrentlyPopularMovies` will be called again:

::Example
---
name: "Dropdown"
min-height: 550
file: "_content/_examples/dropdown/dropdown-pagination-load-on-scroll.vue"
---
::


## Full example

Now let's combine what we've learned so far by leveraging the `option` slot for custom markup and setting the `options` prop to a function that will return pages of movies from an API:

::Example
---
name: "Dropdown"
min-height: 550
file: "_content/_examples/dropdown/dropdown-full.vue"
---
::


## Overscroll

When using the dropdown with static options, FormKit's dropdown also comes with a unique feature called `overscroll`. In this example, we'll see what the behavior is when setting `overscroll` to true:

::Example
---
name: "Dropdown"
min-height: 550
file: "_content/_examples/dropdown/dropdown-overscroll.vue"
---
::


## Props & Attributes

::ReferenceTable
---
input: "dropdown" 
data: [
  {
    "prop": "options",
    "type": "any",
    "default": "[]",
    "description": "The list of options the user can select from."
  },
  {
    "prop": "load-on-scroll",
    "type": "boolean",
    "default": "false",
    "description": "When set to `true`, the dropdown will try loading more options based on the end-user`s scroll position"
  },
  {
    "prop": "option-loader",
    "type": "function",
    "default": "null",
    "description": "Used for hydrating initial value, or performing an additional request to load more information of a selected option."
  },
  {
    "prop": "empty-message",
    "type": "string",
    "default": "undefined",
    "description": "Renders a message when there are no options to display."
  }
]
---
::


## Sections

:SectionKeysIntro

### Outer structure

::FormKitInputDiagram
---
hide-on-small: true
class: "input-diagram--dropdown-outer"
schema: [
  {
    name: 'outer',
    position: 'right',
    children: [
      {
        name: 'wrapper',
        position: 'right',
        children: [
          {
            name: 'label',
            position: 'right',
            content: 'Select t-shirt color',
            class: 'center-vert'
          },
          {
            name: 'inner',
            children: [
              {
                name: 'prefixIcon',
                class: 'tiny-section'
              },
              {
                name: 'prefix',
                class: 'tiny-section'
              },
              {
                name: 'selector',
                class: 'flex flex-grow',
                children: [
                  {
                    name: 'selection',
                    class: 'flex-grow',
                    children: [
                      {
                        name: 'option',
                        content: 'Gray',
                        class: 'flex border-solid',
                        children: [
                          {
                            name: 'optionLoading',
                            class: 'flex-grow-0'
                          }
                        ]
                      }
                    ]
                  },
                  {
                      name: 'loaderIcon'
                  },
                  {
                    name: 'selectIcon',
                    content: '⌄',
                    class: 'center-vert'
                  }
                ]
              },
              {
                name: 'listbox',
                content: 'Blue Gray Tan',
                class: 'wrap-text',
                position: 'right'
              },
              {
                name: 'suffix',
                position: 'right',
                class: 'tiny-section'
              },
              {
                name: 'suffixIcon',
                position: 'right',
                class: 'tiny-section'
              },
            ]
          },
        ]
      },
      {
        name: 'help',
        content: 'Turn sound effects on and off.',
        position: 'right'
      },
      {
        name: 'messages',
        position: 'right',
        children: [
          {
            name: 'message',
            content: 'Something wrong happened.',
            position: 'right'
          }
        ]
      }
    ]
  }
]
---
::

### Inner listbox structure

Below is the inner options list (`listbox`) structure from the diagram above:

::FormKitInputDiagram
---
hide-on-small: true
class: "input-diagram--dropdown"
schema: [
  {
    name: 'dropdownWrapper',
    position: 'right',
    children: [
      {
        name: 'listbox',
        position: 'right',
        children: [
        {
            name: 'emptyMessage',
            children: [
              {
                name: 'emptyMessageInner',
                content: 'No options to display.',
              }
            ]
          },
          {
            name: 'listitem',
            class: 'flex flex-grow',
            position: 'right',
            children: [
              {
                name: 'selectedIcon',
                content: '✔️'
              },
              {
                name: 'option',
                content: 'Gray',
                position: 'right',
                class: 'flex flex-grow'
              },
            ]
          },
          {
            name: 'loadMore',
            children: [
              {
                name: 'loadMoreInner',
                children: [
                  {
                    name: 'loaderIcon',
                    content: '⏳',
                    class: 'text-center'
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
    "description": "The selector section is a button element that opens the dropdown options list."
  },
  {
    "section-key": "selection",
    "description": "Contains the selected option."
  },
  {
    "section-key": "listitem",
    "description": "A list item element that contains the option section."
  },
  {
    "section-key": "option",
    "description": "A div that contains the option content."
  },
  {
    "section-key": "listbox",
    "description": "The listbox section is a ul element that contains the options list."
  },
  {
    "section-key": "dropdownWrapper",
    "description": "Wraps the listbox section. A div that handles scrolling the listbox."
  },
  {
    "section-key": "optionLoading",
    "description": "A span element that is conditionally rendered within the selected option when loading is occurring."
  },
  {
    "section-key": "loaderIcon",
    "description": "An element for outputting an icon in the selector element when loading is occurring."
  },
  {
    "section-key": "selectIcon",
    "description": "An element for outputting an icon in the selector element when the dropdown is closed."
  },
  {
    "section-key": "selectedIcon",
    "description": "An element for outputting an icon next to the selected option when inside the listbox."
  },
  {
    "section-key": "loadMore",
    "description": "A list item element that is conditionally rendered at the bottom of the options list when there are more pages to load."
  },
  {
    "section-key": "loadMoreInner",
    "description": "A span element that acts as a wrapper for the loaderIcon within the loadMore section."
  },
  {
    "section-key": "emptyMessage",
    "description": "A list item element that is conditionally rendered when there are no options to display."
  },
  {
    "section-key": "emptyMessageInner",
    "description": "A span element that acts as a wrapper for the emptyMessage section."
  }
]
---
::
