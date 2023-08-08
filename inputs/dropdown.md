---
title: Dropdown Input
description: A Pro input that allows users to select from a customizable options list.
---

::InputPageHero
---
type: "Dropdown"
---
::

:PageToc

:ProInstallSnippet

The `dropdown` input allows users to select a value from a list of options. Unlike native select elements, the dropdown input allows you to customize both its appearance and behavior.

The `options` prop can accept three different formats of values:

- An array of objects with `value` and `label` keys (see example above)
- An array of strings `['A', 'B', 'C']`
- An object literal with key-value pairs `{ a: 'A', b: 'B', c: 'C' }`
- A function that returns any of the above

## Basic examples
### Single-select

By default, the dropdown input will render in single-select mode:


::Example
---
name: "Dropdown"
min-height: 550
file: "_content/_examples/dropdown/dropdown-single.vue"
---
::

### Multi-select

By setting the `multiple` prop the dropdown input will render in multi-select mode:

::Example
---
name: "Dropdown"
min-height: 550
file: "_content/_examples/dropdown/dropdown-multiple.vue"
---
::

Notice in the example above that because the `multiple` prop is set, the `value` prop must be an array.

## Dynamic options

Instead of passing a static list of options to the `options` prop, you can assign them dynamically.

Let's say we had an API endpoint that returned all the options we needed for a given `dropdown` input. Here is an example of how we could write the `dropdown` input to load options from a single request:

::Example
---
name: "Dropdown"
min-height: 550
file: "_content/_examples/dropdown/dropdown-single-request.vue"
---
::

### Multiple pages

What about loading options from an API where you need to be able to make multiple requests to perform pagination? When a function is set to the `options` prop it is passed FormKit node's `context` object as an argument. Within this context object are `page` and `hasNextPage` properties. The page property is the current page number, and the hasNextPage property is a function to be called when there are more pages to load:

::Example
---
name: "Dropdown"
min-height: 550
file: "_content/_examples/dropdown/dropdown-pagination.vue"
---
::

### Option loader

FormKit's dropdown input also provides an `optionLoader` prop that allows you to rehydrate values that are not in the options list. In this example, we'll provide the autocomplete an initial value (two movie IDs), and assign the optionLoader to a function that will make a request to the API to load the movie titles:

::Example
---
name: "Dropdown"
min-height: 550
file: "_content/_examples/dropdown/dropdown-option-loader.vue"
---
::

Notice in the example above that the optionLoader function is passed two arguments: the `value` of the selected option (in this case, the movie ID) and the `cachedOption`. The cachedOption prop is used for preventing unnecessary lookups. If the cachedOption is not `null` it means that the selected option has already been loaded, and you can return the cachedOption directly.


### Load on scroll

If you would rather allow the user to load more options without having to click the <i>Load more</i> option at the bottom of the options list, you can set the `load-on-scroll` prop to true, and our function, `loadCurrentlyPopularMovies` will be called again:

::Example
---
name: "Dropdown"
min-height: 550
file: "_content/_examples/dropdown/dropdown-pagination-load-on-scroll.vue"
---
::

### (NEW) Load on created

If you would rather load options when the dropdown is created, you can set the `load-on-created` prop to true, and our function, `loadCurrentlyPopularMovies` will be called without the user needing to expand the listbox:

::Example
---
name: "Dropdown"
min-height: 550
file: "_content/_examples/dropdown/dropdown-load-on-created.vue"
---
::

### (NEW) Always load on open

By default the dropdown will only load options asynchronously once (upon the listbox being expanded). If you would like to load options every time the listbox is expanded, you can set the `always-load-on-open` prop to true:

::Example
---
name: "Dropdown"
min-height: 550
file: "_content/_examples/dropdown/dropdown-always-load-on-open.vue"
---
::

## Option appearance

Unlike native select elements, the dropdown input allows you to customize the options list with markup.

### Options appearance prop

If you would like to render each listitem option with a checkbox next to each, you can do so by setting the `options-appearance` prop to `checkbox`:

::Example
---
name: "Dropdown"
min-height: 550
file: "_content/_examples/dropdown/dropdown-checkbox.vue"
---
::

::Callout
---
type: "warning"
label: "Multi select only"
---
Setting `options-appearance` to `checkbox` can only be done when the prop `multiple` is set.
::

### Option slot

The dropdown input allows you to customize the look and feel of each option by using the option slot. In this example, we are using the option slot to display each option's asset; logo and name:

::Example
---
name: "Dropdown"
min-height: 550
file: "_content/_examples/dropdown/dropdown-option-slot.vue"
---
::

## Selection appearance

The dropdown input allows you to customize the look and feel of the selected option.

### Selection appearance prop

When using the dropdown input as a `multi-select`, you can customize the look and feel of the selected options by setting the `selection-appearance` prop to either `truncate` (the default) or `tags`.


::Example
---
name: "Dropdown"
min-height: 550
file: "_content/_examples/dropdown/dropdown-selection-appearance.vue"
---
::


### Selection slot

If you only want to customize the display of the selected option, use the selection slot:

::Example
---
name: "Dropdown"
min-height: 550
file: "_content/_examples/dropdown/dropdown-selection-slot.vue"
---

::

## Behavioral props

### Empty Message

The dropdown input, by default, will be rendered in a disabled state if no options are passed. Optionally, you may pass the `empty-message` prop a message to display when no options are available:

::Example
---
name: "Dropdown"
min-height: 550
file: "_content/_examples/dropdown/dropdown-empty-message.vue"
---
::

### Overscroll

When using the dropdown with static options, FormKit's dropdown also comes with a unique feature called `overscroll`. In this example, we'll see what the behavior is when setting `behavior` to overscroll:

::Example
---
name: "Dropdown"
min-height: 550
file: "_content/_examples/dropdown/dropdown-overscroll.vue"
---
::

## (NEW) Selection Removable

If you would like to allow users to remove the selected value, simply set the `selection-removable` prop to true. This will render a close icon next to the selected value:

::Callout
---
type: "warning"
label: "Single select only"
---
The <code>selection-removable</code> prop can only be used in `single-select` mode.
::

::Example
---
name: "Dropdown"
min-height: 550
file: "_content/_examples/dropdown/dropdown-selection-removable.vue"
---
::

## (NEW) Open on remove

By default, when the `selection-removable` prop is set to `true`, the dropdown will not open after the selected value is removed. You can change this behavior by setting the `open-on-remove` prop to `true`:

::Example
---
name: "Dropdown"
min-height: 550
file: "_content/_examples/dropdown/dropdown-open-on-remove.vue"
---
::


### (NEW) Close on select

By default, when the `multiple` prop is set, the dropdown will not close after an option is selected. You can change this behavior by setting the `close-on-select` prop to `true`:

::Example
---
name: "Dropdown"
min-height: 550
file: "_content/_examples/dropdown/dropdown-close-on-select.vue"
---
::

## (NEW) Open on focus

If you would like expand the listbox as soon as the dropdown input is focused, you can use the `open-on-focus` prop:

::Example
---
name: "Dropdown"
min-height: 550
file: "_content/_examples/dropdown/dropdown-open-on-focus.vue"
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
  },
  {
    "prop": "selection-appearance",
    type: "string",
    default: "truncate",
    "description": "For multi-select dropdowns, this prop allows you to customize the look and feel of the selected options. Possible values are `truncate` (the default) or `tags`."
  },
  {
    "prop": "selection-removable",
    type: "boolean",
    default: "false",
    "description": "For single-select dropdowns, this prop allows you to remove the selected value."
  },
  {
    "prop": "open-on-remove",
    type: "boolean",
    default: "false",
    "description": "When the `selection-removable` prop is set to `true`, the dropdown will not open after the selected value is removed. You can change this behavior by setting the `open-on-remove` prop to `true`."
  },
  {
    "prop": "close-on-select",
    type: "boolean",
    default: "false",
    "description": "When the `multiple` prop is set, the dropdown will not close after an option is selected. You can change this behavior by setting the `close-on-select` prop to `true`."
  },
  {
    "prop": "open-on-focus",
    type: "boolean",
    default: "false",
    "description": "If you would like expand the listbox as soon as the dropdown input is focused, you can use the `open-on-focus` prop."
  },
  {
    "prop": "options-appearance",
    type: "string",
    default: "undefined",
    "description": "For multi-select dropdowns, this prop allows you to customize the look and feel of the selected options. Possible values are `default` (the default) or `checkbox`."
  },
  {
    "prop": "multiple",
    type: "boolean",
    default: "false",
    "description": "When set to `true`, the dropdown will allow the user to select multiple options."
  },
  {
    "prop": "behavior",
    type: "string",
    default: "undefined",
    "description": "When set to `overscroll`, the dropdown will allow the user to select multiple options."
  },
  {
    "prop": "always-load-on-open",
    type: "boolean",
    default: "false",
    "description": "When set to `true`, the dropdown will always load the options when the listbox is opened."
  },
  {
    "load-on-created",
    type: "boolean",
    default: "false",
    "description": "When set to `true`, the dropdown will load the options when the node is created."
  }
]
---
::


## Sections

:SectionKeysIntro

### Dropdown single-select

#### Dropdown single-select Outer structure

::FormKitInputDiagram
---
hide-on-small: true
class: "input-diagram--dropdown-outer"
schema: [
  {
    name: "outer",
    position: "right",
    children: [
      {
        name: "wrapper",
        position: "right",
        children: [
          {
            name: "label",
            position: "right",
            content: "Select t-shirt color",
            class: "center-vert"
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
                name: "selector",
                class: "flex flex-grow",
                children: [
                  {
                    name: "selection",
                    class: "flex-grow",
                    children: [
                      {
                        name: "option",
                        content: "Gray",
                        class: "flex border-solid",
                        children: [
                          {
                            name: "optionLoading",
                            class: "flex-grow-0"
                          }
                        ]
                      }
                    ]
                  },
                  {
                      name: "loaderIcon"
                  },
                  {
                    name: "selectIcon",
                    content: "⌄",
                    class: "center-vert"
                  }
                ]
              },
              {
                name: "listbox",
                content: "Blue Gray Tan",
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
        content: "Turn sound effects on and off.",
        position: "right"
      },
      {
        name: "messages",
        position: "right",
        children: [
          {
            name: "message",
            content: "Something wrong happened.",
            position: "right"
          }
        ]
      }
    ]
  }
]
---
::

#### Inner listbox structure

Below is the inner options list (`listbox`) structure from the diagram above:

::FormKitInputDiagram
---
hide-on-small: true
class: "input-diagram--dropdown"
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
                content: "Gray",
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
