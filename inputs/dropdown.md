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

::Callout
---
type: "warning"
label: "Empty options"
---
If you assign options as an empty array, the input will be rendered in a disabled state.
::

## Basic examples
### Single-select

The dropdown input will render in single-select mode by default.


::Example
---
name: "Dropdown"
min-height: 550
file: "_content/_examples/dropdown/dropdown-single.vue"
---
::

### Multi-select

Dropdown inputs with the prop `multiple` set will render in multi-select mode.

::Example
---
name: "Dropdown"
min-height: 550
file: "_content/_examples/dropdown/dropdown-multiple.vue"
---
::

::Callout
---
type: "info"
label: "Multi-select input value"
---
Notice in the example above that because the `multiple` prop is set, the `value` prop must be an array.

::


## Dynamic options

Instead of passing a static list to the `options` prop, options can be assigned dynamically.


In this example, the function, `loadHorrorMovies`, makes a request to the API for [TMDB](https://www.themovidedb.org) to load a list of horror movies. Assigning the function to the `options` prop will load the options when the end-user opens the listbox.

::Example
---
name: "Dropdown"
min-height: 550
file: "_content/_examples/dropdown/dropdown-single-request.vue"
---
::

#### Always load on open

By default the dropdown will only load options asynchronously once (upon the listbox being expanded). Setting the prop `always-load-on-open`  will cause the dropdown to load options every time the listbox is expanded.

::Example
---
name: "Dropdown"
min-height: 550
file: "_content/_examples/dropdown/dropdown-always-load-on-open.vue"
---
::

#### Load on created

The prop `load-on-created` will cause the dropdown to load options as soon as it is created.

::Example
---
name: "Dropdown"
min-height: 550
file: "_content/_examples/dropdown/dropdown-load-on-created.vue"
---
::

### Pagination

A function assigned the options prop will be passed two arguments: `page` and `hasNextPage`. The page argument indicates the current page number, and hasNextPage is a callback function that indicates whether there are more pages to load.

::Example
---
name: "Dropdown"
min-height: 550
file: "_content/_examples/dropdown/dropdown-pagination.vue"
---
::

#### Load on scroll

If you would rather allow the user to load more options without having to click the <i>Load more</i> option at the bottom of the options list, you can set the `load-on-scroll` prop to true, and our function, `loadCurrentlyPopularMovies` will be called again:

::Example
---
name: "Dropdown"
min-height: 550
file: "_content/_examples/dropdown/dropdown-pagination-load-on-scroll.vue"
---
::

### Option loader

FormKit's dropdown input also provides an `optionLoader` prop that allows you to rehydrate values that are not in the options list. In this example the dropdown is provided an initial value (two movie IDs). The `optionLoader` function is called for each value that is not in the options list.

::Example
---
name: "Dropdown"
min-height: 550
file: "_content/_examples/dropdown/dropdown-option-loader.vue"
---
::

Notice in the example above that the optionLoader function is passed two arguments: the `value` of the selected option (in this case, the movie ID) and the `cachedOption`. The cachedOption prop is used for preventing unnecessary lookups. If the cachedOption is not `null` it means that the selected option has already been loaded, and you can return the cachedOption directly.


## Option appearance

Unlike native select elements, the dropdown input can be customized via. markup.

### Options appearance prop

Setting the prop `options-appearance` to `checkbox` will render a checkbox adjacent to each listitem option. This is useful when you want to allow the user to select multiple options.

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

The dropdown input allows you to customize the look and feel of the selected option(s).

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

If you only want to customize the display of the selected option, use the selection slot (as opposed to the option slot mentioned above):

::Example
---
name: "Dropdown"
min-height: 550
file: "_content/_examples/dropdown/dropdown-selection-slot.vue"
---

::

::Callout
---
type: "warning"
label: "Single-select and tags only"
---
The selection slot does not exist on the multi-select dropdown with selection appearance `truncate`.
::

## Behavioral props

The following props allow you to customize the behavior of the dropdown input.

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

### Selection Removable

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

### Open on remove

By default, when the `selection-removable` prop is set to `true`, the dropdown will not open after the selected value is removed. You can change this behavior by setting the `open-on-remove` prop to `true`:

::Example
---
name: "Dropdown"
min-height: 550
file: "_content/_examples/dropdown/dropdown-open-on-remove.vue"
---
::

### Close on select

By default, when the `multiple` prop is set, the dropdown will not close after an option is selected. You can change this behavior by setting the `close-on-select` prop to `true`:

::Example
---
name: "Dropdown"
min-height: 550
file: "_content/_examples/dropdown/dropdown-close-on-select.vue"
---
::

### Open on focus

If you would like expand the listbox as soon as the dropdown input is focused, you can use the `open-on-focus` prop:

::Example
---
name: "Dropdown"
min-height: 550
file: "_content/_examples/dropdown/dropdown-open-on-focus.vue"
---
::

### Max

If you would like to limit the number of options that can be selected, you can use the `max` prop:

::Example
---
name: "Dropdown"
min-height: 550
file: "_content/_examples/dropdown/dropdown-max.vue"
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
    name: "load-on-created",
    type: "boolean",
    default: "false",
    "description": "When set to `true`, the dropdown will load the options when the node is created."
  },
  {
    "name": "max",
    "type": "number | string",
    "default": "undefined",
    "description": "If you would like to limit the number of options that can be selected, you can use the `max` prop (applies only to multi-select)."
  }
]
---
::


## Sections

:SectionKeysIntro

### Selector structure

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
                    name: "placeholder",
                    content: "Select t-shirt color",
                  },
                  {
                    name: "selectIcon",
                    content: "⌄",
                  },
                  {
                    name: "loaderIcon",
                    content: "⌛",
                  },
                  {
                    name: "closeIcon",
                    content: "×",
                  }
                ]
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

### Listbox structure

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

### Selection structure

#### Dropdown Single

::FormKitInputDiagram
---
hide-on-small: true
class: "input-diagram--dropdown-outer"
schema: [
  {
    name: "selector",
    class: "flex flex-grow",
    children: [
      {
        name: "selection",
        class: "flex flex-grow",
        children: [
          {
            name: "option",
            content: "Gray",
            class: "flex flex-grow border-solid",
          },
        ]
      },
    ]
  }
]
---
::

#### Dropdown Truncate

::FormKitInputDiagram
---
hide-on-small: true
class: "input-diagram--dropdown-outer"
schema: [
  {
    name: "selector",
    class: "flex flex-grow",
    children: [
      {
        name: "selectorSelectionsWrapper",
        class: "flex flex-grow",
        children: [
          {
            name: "selectorSelections",
            class: "flex flex-grow border-solid",
            children: [
              {
                name: "selectorSelectionsItem",
                content: 'Gray'
              },
              {
                name: "selectorSelectionsItem",
                content: 'Blue'
              }
            ]
          },
        ]
      },
      {
        name: "truncationCount",
        content: '+1',
        class: 'grow-0 center-vert'
      }
    ]
  }
]
---
::

#### Dropdown Tags

::FormKitInputDiagram
---
hide-on-small: true
class: "input-diagram--dropdown-outer"
schema: [
  {
    name: "selector",
    class: "flex flex-grow",
    children: [
      {
        name: "tagsWrapper",
        class: "flex flex-grow",
        children: [
          {
            name: "tags",
            class: "flex flex-grow border-solid",
            children: [
              {
                name: "tagWrapper",
                children: [
                  {
                    name: "tag",
                    class: 'flex',
                    children: [
                      {
                        name: "tagLabel",
                        content: 'Gray'
                      },
                      {
                        name: "removeSelection",
                        content: '×'
                      }
                    ]
                  },
                ]
              },
              {
                name: "tagWrapper",
                children: [
                  {
                    name: "tag",
                    class: 'flex',
                    children: [
                      {
                        name: "tagLabel",
                        content: 'Blue'
                      },
                      {
                        name: "removeSelection",
                        content: '×'
                      }
                    ]
                  },
                ]
              }
            ],
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
  },
  {
    "section-key": "tagsWrapper",
    "description": "A div element that wraps the tags section."
  },
  {
    "section-key": "tags",
    "description": "A div element that contains the tags."
  },
  {
    "section-key": "tagWrapper",
    "description": "A div element that wraps the tag."
  },
  {
    "section-key": "tag",
    "description": "A div element that contains the tag label and removeSelection section."
  },
  {
    "section-key": "tagLabel",
    "description": "A span element that contains the tag label."
  },
  {
    "section-key": "removeSelection",
    "description": "A span element that contains the removeSelection icon."
  },
  {
    "section-key": "selectorSelectionsWrapper",
    "description": "A div element that wraps the selectorSelections section."
  },
  {
    "section-key": "selectorSelections",
    "description": "A div element that contains the selectorSelectionsItem sections."
  },
  {
    "section-key": "selectorSelectionsItem",
    "description": "A div element that contains the selectorSelectionsItem content."
  },
  {
    "section-key": "truncationCount",
    "description": "A div element that contains the truncationCount content."
  }
]
---
::
