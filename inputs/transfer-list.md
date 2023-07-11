---
title: Transfer List Input
description: The transfer list input allows users to transfer values between two lists. It is useful for situations where you need to select multiple values from a large list of options.
---

::InputPageHero
---
type: "Transfer List"
---
::

:PageToc

:ProInstallSnippet

## Introduction

::VideoCard
---
title: "Transfer List Overview"
poster: "https://cdn.formk.it/web-assets/transfer-list-thumbnail.png"
watch-time: "1 min"
youtube-id: "7sl29qqye3A"
---
::

The transfer list input is ideal for situations where the end-user needs to select and sort multiple values from a list of options. In this example, we are allowing the end-user to select from a group of guests and move them to a VIP list:

::Example
---
name: "Transfer List"
min-height: 550
file: [
  '_content/_examples/transfer-list/transfer-list-full-example.vue',
  '_content/_examples/transfer-list/api.js',
  '_content/_examples/transfer-list/utils.js'
]
---
::


## Getting started

In this section, we will be covering the basics of how to replicate the 'Guests vs VIPs' example from above.

### Base input

Below is an example of the transfer list input with the minimum required props. As you can see, there are two list boxes: the source list box and the target list box. The source list box will contain the list of options, and the target list box will contain the selected options:

::Example
---
name: "Transfer List"
min-height: 300
file: "_content/_examples/transfer-list/transfer-list-base.vue"
---
::

### Labels

Let's add some label props to make clear to the end-user how to use the transfer list input. We'll add a `label` prop to explain the directive to the user, and `source-label` and `target-label` props to indicate which list box is the source and which is the target:

::Example
---
name: "Transfer List"
min-height: 300
file: "_content/_examples/transfer-list/transfer-list-labels.vue"
---
::

#### Source and target empty messages

In this state, with no options passed and no values selected, we can display a custom message to the user by setting the `source-empty-message` and `target-empty-message` props:

::Example
---
name: "Transfer List"
min-height: 300
file: "_content/_examples/transfer-list/transfer-list-empty-messages.vue"
---
::

### Defining options

The `options` prop can accept three different formats of values:

- An array of objects with `value` and `label` keys
- An array of strings <code>['A', 'B', 'C']</code>
- An object literal with key-value pairs <code>{ a: 'A', b: 'B', c: 'C' }</code>
- A function that returns any of the above

Let's go ahead and populate the transfer list's options with a list of guest names:

::Example
---
name: "Transfer List"
min-height: 450
file: [
  '_content/_examples/transfer-list/transfer-list-options.vue',
  '_content/_examples/transfer-list/guests.js'
]
---
::

### Values

The _value_ of the transfer list input is an array. Selected option values from the source list will be appended to the array. To show the value changing in the example below, let's wrap the transfer list input in a FormKit form, set the name of the transfer list input to `vips`, and show the value of the form itself in a `<pre>` tag (if you are unfamiliar with FormKit forms, you can read more [here](/getting-started/your-first-form)):

::Example
---
name: "Transfer List"
min-height: 550
file: [
  '_content/_examples/transfer-list/transfer-list-values.vue',
  '_content/_examples/transfer-list/guests.js'
]
---
::

#### Initial values

The transfer list input can be pre-populated with values by setting the `value` prop on the `transferlist` itself or a wrapping `form` or `group`. Remember that the values you pass to the `value` prop need to match the keys of the values in your option list:

::Example
---
name: "Transfer List"
min-height: 550
file: [
  '_content/_examples/transfer-list/transfer-list-initial-values.vue',
  '_content/_examples/transfer-list/guests.js'
]
---
::

### Searchable

The transfer list input can be made searchable by setting the `searchable` prop. In this example we'll set the `searchable` prop and also set a `placeholder` prop for the search input:

::Example
---
name: "Transfer List"
min-height: 550
file: [
  '_content/_examples/transfer-list/transfer-list-searchable.vue',
  '_content/_examples/transfer-list/guests.js'
]
---
::


<callout type="info" label="Only the options are searched">
The search input only searches through the options in the source options list. It does not return options that have already been transferred to the target list.
</callout>

#### Filtering

The transfer list input will filter options with its own internal search function. You can replace this search function by providing the `filter` prop a function of your own. Your function will receive two arguments, the option being iterated over and the current search value:

::Example
---
name: "Taglist"
min-height: 550
file: [
  '_content/_examples/transfer-list/transfer-list-filter.vue',
  '_content/_examples/transfer-list/guests.js'
]
---
::

#### Clear on select

By default, the transfer list input will clear the search input on select. You can change this behavior by setting the `clear-on-select` prop to `false`:

### Max

The transfer list input can be limited to a maximum number of selected values by setting the `max` prop. For just this example, let's set the max prop to 2 to limit the number of VIPs that can be selected:

::Example
---
name: "Transfer List"
min-height: 550
file: [
  '_content/_examples/transfer-list/transfer-list-max.vue',
  '_content/_examples/transfer-list/guests.js'
]
---
::

### Transfer on select

By default, the transfer list input will add or remove options on click. You can change this behavior by setting the `transfer-on-select` prop to `false`. Now, the transfer list will behave more like a traditional transfer list:

::Example
---
name: "Transfer List"
min-height: 550
file: [
  '_content/_examples/transfer-list/transfer-list-transfer-on-select.vue',
  '_content/_examples/transfer-list/guests.js'
]
---
::

## Asynchrony

### Asynchronous options

Here we have a transfer list input that loads its options from an asynchronous function. The function is called when the component is mounted and the options are subsequently loaded into the source list box:

::Example
---
name: "Transfer List"
min-height: 550
file: [
  '_content/_examples/transfer-list/transfer-list-async-options.vue',
  '_content/_examples/transfer-list/api.js'
]
---
::

#### Pagination

Now let's say that our API request does not fetch all the options we need, but instead returns a paginated response. The transfer list input can handle pagination with minor configuration to the asynchronous function.

When assigning the options prop to an asynchronous function, the function will be called with the FormKit context object as its first argument. This context object contains a `page` property (the current page we are attempting to load) that is tracked by the transfer list input, and `hasNextPage`, which is a callback function we can use to tell the transfer list that there are more options to load:

::Example
---
name: "Transfer List"
min-height: 500
file: [
  '_content/_examples/transfer-list/transfer-list-async-options-pagination.vue',
  '_content/_examples/transfer-list/api.js'
]
---
::

#### Search

The transfer list input can also load options asynchronously when the user searches. In this example, we'll add back the `searchable` prop, and change `getGuests()` to `searchGuests()`. When the user searches, `searchGuests()` will now be called with the same context object as before, but this time, we will destructure just the `search` property. Additionally, we'll modify `getGuests()` to only return guests when a search value is provided:

::Example
---
name: "Transfer List"
min-height: 550
file: [
  '_content/_examples/transfer-list/transfer-list-async-options-search.vue',
  '_content/_examples/transfer-list/api.js'
]
---
::

### Option loader

#### Rehydrating values

The transfer list input also provides an `optionLoader` prop that allows you to rehydrate values that are not in the options list. In this example, we'll provide the transfer list an initial value (a guest ID), and assign the `optionLoader` to a function that will make a request to the API to fetch the individual guest data:

::Example
---
name: "Transfer List"
min-height: 350
file: [
  '_content/_examples/transfer-list/transfer-list-rehydrating-values.vue',
  '_content/_examples/transfer-list/api.js'
]
---
::

Notice in the example above that the optionLoader function `getGuest` is passed two arguments: the value of the selected option (in this case, the movie ID) and the `cachedOption`. The `cachedOption` is used for preventing unnecessary lookups; if the `cachedOption` is not `null` it means the selected option has already been loaded, and you can return the `cachedOption` directly.

#### Fetching additional data

You can also use use the `optionLoader` to fetch additional data on selected values that is not already in the options list. In this example, after selecting an option, we are going to perform a look-up to load the selected guest's age:

::Example
---
name: "Transfer List"
min-height: 550
file: [
  '_content/_examples/transfer-list/transfer-list-additional-data.vue',
  '_content/_examples/transfer-list/api.js'
]
---
::

## Slots

Just like any other FormKit input, the transfer list input allows you to utilize slots to customize its markup.

### Source and target options

Now that we are loading additional data on selected values (the age and email address of the selected guest), let's customize the look of the selected values by using the `target-option` slots:

::Example
---
name: "Transfer List"
min-height: 550
file: [
  '_content/_examples/transfer-list/transfer-list-options-slot.vue',
  '_content/_examples/transfer-list/api.js',
  '_content/_examples/transfer-list/utils.js'
]
---
::

## Examples

### Ranked order

The transfer list input can be used to create a ranked list, let's do that with the greatest NBA players:

::Example
---
name: "Transfer List"
min-height: 550
file: [
  '_content/_examples/transfer-list/transfer-list-ranking.vue',
  '_content/_examples/transfer-list/nba-top-players.js',
  '_content/_examples/transfer-list/utils.js'
]
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
    prop: "source-empty-message",
    type: "string",
    default: "undefined",
    description: "Renders a message when there are no options to display."
  },
  {
    prop: "target-empty-message",
    type: "string",
    default: "undefined",
    description: "Renders a message when there are no values to display"
  },
  {
    prop: "max",
    type: "number",
    default: "undefined",
    description: "Limits the number of options that can be selected."
  },
  {
    prop: "clear-on-select",
    type: "boolean",
    default: "true",
    description: "Clears the search input after selecting an option (only for options that are not loaded via function)."
  },
  {
    prop: "searchable",
    type: "boolean",
    default: "false",
    description: "Enables the search input."
  },
  {
    prop: "source-label",
    type: "string",
    default: "undefined",
    description: "Renders a label for the source list."
  },
  {
    prop: "target-label",
    type: "string",
    default: "undefined",
    description: "Renders a label for the target list."
  },
  {
    prop: "transfer-on-select",
    type: "boolean",
    default: "true",
    description: "Automatically transfers selected options to the target list. If set to false, will render transfer forward and transfer backward buttons."
  }
]
---
::

## Sections

You can target a specific section of an input using that section's "key", allowing you to modify that section's classes, HTML (via `:sections-schema`), or content (via slots). Read more about sections here.

### Wrapper of transfer list


::FormKitInputDiagram
---
hide-on-small: true
class: "input-diagram--autocomplete-outer autocomplete-option-single"
schema: [
  {
    name: "outer",
    children: [
      {
        name: "fieldset",
        children: [
          {
            name: "legend",
            content: "Choose VIPs for the party",
          },
          {
            name: "help",
            content: "You can select up to 3 VIPs.",
          },
          {
            name: "wrapper",
            class: "flex",
            children: [
              {
                content: "Source list",
                name: "source"
              },
              {
                content: "Transfer controls",
                name: "transferControls"
              },
              {
                content: "Target list",
                name: "target"
              }
            ]
          },
          {
            name: "messages",
            children: [
              {
                name: "message",
                content: "Sorry, you may not add more than 3 guests.",
              }
            ]
          }
        ]
      }
    ]
  }
]
---
::

### Source

::FormKitInputDiagram
---
hide-on-small: true
class: "input-diagram--transfer-list"
schema: [
  {
    name: "source",
    children: [
      {
        name: "sourceHeader",
        class: "flex",
        children: [
          {
            name: "sourceHeaderLabel",
            content: "Guests"
          },
          {
            name: "sourceHeaderItemCount",
            content: "97"
          }
        ]
      },
      {
        name: "sourceControls",
        children: [
          {
            name: "sourceSearch",
            class: "flex",
            children: [
              {
                name: "sourceSearchInput",
                class: "large"
              },
              {
                name: "sourceSearchClear",
                class: "small",
                children: [
                  {
                    name: "closeIcon",
                    content: "✕"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        name: "sourceListItems",
        children: [
          {
            name: "sourceEmptyMessage",
            children: [
              {
                name: "emptyMessageInner",
                content: "No guests found"
              }
            ]
          }
        ]
      },
      {
        name: "sourceListItem",
        class: "flex",
        children: [
          {
            name: "selectedIcon",
            content: "✓",
            class: "small"
          },
          {
            name: "sourceOption",
            content: "John Doe",
            class: "large"
          }
        ]
      },
      {
        name: "sourceLoadMore",
        class: "flex",
        children: [
          {
            name: "loadMoreInner",
            children: [
              {
                name: "loaderIcon",
                content: "⌛",
              }
            ]
          }
        ]
      },
    ]
  },
]
---
::

### Transfer controls

::FormKitInputDiagram
---
hide-on-small: true
class: "input-diagram--transfer-list"
schema: [
  {
    name: "transferControls",
    children: [
      {
        name: "transferButtonForwardAll",
        class: "flex",
        children: [
          {
            name: "controlLabel",
            class: "small",
          },
          {
            name: "fastForwardIcon",
            content: "⇥",
            class: "large"
          }
        ]
      },
      {
        name: "transferButtonForward",
        class: "flex",
        children: [
          {
            name: "controlLabel",
            class: "small"
          },
          {
            name: "forwardIcon",
            content: "⇒",
            class: "large"
          }
        ]
      },
      {
        name: "transferButtonBackward",
        class: "flex",
        children: [
          {
            name: "controlLabel",
            class: "small"
          },
          {
            name: "backwardIcon",
            content: "⇐",
            class: "large"
          }
        ]
      },
      {
        name: "transferButtonBackwardAll",
        class: "flex",
        children: [
          {
            name: "controlLabel",
            class: "small"
          },
          {
            name: "fastBackwardIcon",
            content: "⇤",
            class: "large"
          }
        ]
      }
    ]
  },
]
---
::

### Target

::FormKitInputDiagram
---
hide-on-small: true
class: "input-diagram--transfer-list"
schema: [
    {
    name: "target",
    children: [
      {
        name: "targetHeader",
        class: "flex",
        children: [
          {
            name: "targetHeaderLabel",
            content: "VIPs",
            class: "large"
          },
          {
            name: "targetHeaderItemCount",
            content: "3",
            class: "small"
          }
        ]
      },
      {
        name: "targetListItems",
        children: [
          {
            name: "targetEmptyMessage",
            children: [
              {
                name: "emptyMessageInner",
                content: "No VIPs selected"
              }
            ]
          },
          {
            name: "targetListItem",
            class: "flex",
            children: [
              {
                name: "selectedIcon",
                content: "✓",
                class: "small"
              },
              {
                name: "targetOption",
                content: "John Doe",
                class: "large"
              }
            ]
          },
          {
            name: "targetLoadMore",
            class: "flex",
            children: [
              {
                name: "loadMoreInner",
                children: [
                  {
                    name: "loaderIcon",
                    content: "⌛"
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
]
---
::

::ReferenceTable
---
type: "sectionKeys"
primary: "section-key"
data: [
  {
    "section-key": "fieldset",
    description: "A fieldset element that acts as the root element for the transfer list input."
  },
  {
    "section-key": "legend",
    description: "A legend element that renders the label."
  },
  {
    "section-key": "source",
    description: "A div element that contains the sourceHeader, sourceControls, and sourceListItems sections."
  },
  {
    "section-key": "sourceHeader",
    description: "A div element that contains the sourceHeaderLabel and sourceHeaderItemCount sections"
  },
  {
    "section-key": "sourceHeaderLabel",
    description: "A label element that renders the sourceLabel prop."
  },
  {
    "section-key": "sourceHeaderItemCount",
    description: "A span element that renders the number of items and number of items selected in the source list."
  },
  {
    "section-key": "sourceControls",
    description: "A div element that contains the sourceSearchINput and sourceSearchClear sections"
  },
  {
    "section-key": "sourceSearch",
    description: "A div element that contains the sourceSearchInput and sourceSearchClear sections"
  },
  {
    "section-key": "sourceSearchInput",
    description: "A text input element used for searching."
  },
  {
    "section-key": "sourceSearchClear",
    description: "A button element that clears the search input."
  },
  {
    "section-key": "closeIcon",
    description: "The span used containing the icon for the clear search input."
  },
  {
    "section-key": "sourceListItems",
    description: "A ul element that contains the sourceListItems."
  },
  {
    "section-key": "sourceEmptyMessage",
    description: "A li element that contains the emptyMessageInner section."
  },
  {
    "section-key": "emptyMessageInner",
    description: "A span element that renders the provided empty message text."
  },
  {
    "section-key": "sourceListItem",
    description: "A li element for the sourceListItems section that contains the sourceOption section."
  },
  {
    "section-key": "selectIcon",
    description: "A span elemenet that renders the selected icon when the sourceListItem is set to selected."
  },
  {
    "section-key": "sourceOption",
    description: "A div element that renders the option label."
  },
  {
    "section-key": "sourceLoadMore",
    description: "A li element that contains the loadMoreInner section."
  },
  {
    "section-key": "loadMoreInner",
    description: "A span element that renders the loading icon."
  },
  {
    "section-key": "loaderIcon",
    description: "A span element that outputs an icon when loading is occurring."
  },
  {
    "section-key": "transferControls",
    description: "A div element that contains the transferButtonForwardAll, transferButtonForward, transferButtonBackward, and transferButtonBackwardAll sections."
  },
  {
    "section-key": "transferButtonForwardAll",
    description: "A button element that transfers all options to the target list."
  },
  {
    "section-key": "transferButtonForward",
    description: "A button element that transfers selected options to the target list."
  },
  {
    "section-key": "transferButtonBackward",
    description: "A button element that transfers selected options to the source list."
  },
  {
    "section-key": "transferButtonBackwardAll",
    description: "A button element that transfers all options to the source list."
  },
  {
    "section-key": "controlLabel",
    description: "A span element that renders the control label."
  },
  {
    "section-key": "fastForwardIcon",
    description: "A span element that renders the fast forward icon."
  },
  {
    "section-key": "moveRightIcon",
    description: "A span element that renders the move right icon."
  },
  {
    "section-key": "moveLeftIcon",
    description: "A span element that renders the move left icon."
  },
  {
    "section-key": "rewindIcon",
    description: "A span element that renders the rewind icon."
  },
  {
    "section-key": "target",
    description: "A div element that contains the targetHeader, targetControls, and targetListItems sections."
  },
  {
    "section-key": "targetHeader",
    description: "A div element that contains the targetHeaderLabel and targetHeaderItemCount sections"
  },
  {
    "section-key": "targetHeaderLabel",
    description: "A label element that renders the targetLabel prop."
  },
  {
    "section-key": "targetHeaderItemCount",
    description: "A span element that renders the number of items and number of items selected in the target list."
  },
  {
    "section-key": "targetListItems",
    description: "A ul element that contains the targetListItems."
  },
  {
    "section-key": "targetEmptyMessage",
    description: "A li element that contains the emptyMessageInner section."
  },
  {
    "target-key": "targetListItem",
    description: "A li element for the targetListItems section that contains the targetOption section."
  },
  {
    "section-key": "targetLoadMore",
    description: "A li element that contains the loadMoreInner section."
  }
]
---
::
