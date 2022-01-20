<!-- %partial% -->
<template>
  <FormKit
    label="U.S. State"
    :type="autocomplete"
    placeholder="Search for a state"
    help="What is your favorite U.S. state?"
    value="Virginia"
    :options="stateList"
  />
</template>

<script setup>
import { createInput } from '@formkit/vue'

/**
 * This is an input "feature" — a function that accepts a node and exposes
 * some additional functionality to an input. When using schemas, this can
 * take the place of a traditional "script" block in a Vue component. In this
 * example, we expose:
 *
 *   - An input handler `search`.
 *   - An input handler `selections`.
 *   - Commit middleware to place filtered options into the `matches` prop.
 *
 * Once written, input features are added via the input declaration.
 */
const searchFeature = (node) => {
  // We wait for our node to be fully  "created" before we start to add our
  // handlers to ensure the core Vue plugin has added its context object:
  node.on('created', () => {
    // Ensure our matches prop starts as an array.
    node.props.matches = []
    node.props.selection = ''
    // When we actually have an value to set:
    const setValue = async (e) => {
      if (e && typeof e.preventDefault === 'function') e.preventDefault()
      node.input(node.props.selection)
      node.props.selection = ''
      node.props.searchValue = ''
      await new Promise((r) => setTimeout(r, 50)) // "next tick"
      if (document.querySelector('input#' + node.props.id)) {
        document.querySelector('input#' + node.props.id).focus()
      }
    }

    // Perform a soft selection, this is shown as a highlight in the dropdown
    const select = (delta) => {
      const available = node.props.matches
      let idx = available.indexOf(node.props.selection) + delta
      if (idx >= available.length) {
        idx = 0
      } else if (idx < 0) {
        idx = available.length - 1
      }
      node.props.selection = available[idx]
    }

    // Add some new "handlers" for our autocomplete. The handlers object is
    // just a conventionally good place to put event handlers. Auto complete
    // inputs always have to deal with lots of keyboard events, so that logic
    // is registered here.
    Object.assign(node.context.handlers, {
      setValue,
      selection: (e) => {
        // This handler is called when entering data into the search input.
        switch (e.key) {
          case 'Enter':
            return setValue()
          case 'ArrowDown':
            e.preventDefault()
            return select(1)
          case 'ArrowUp':
            e.preventDefault()
            return select(-1)
        }
      },
      search(e) {
        node.props.searchValue = e.target.value
      },
      hover: (e) => {
        node.props.selection = e.target.textContent
      },
      unhover: (e) => {
        if (e.target.textContent === node.props.selection) {
          node.props.selection = ''
        }
      },
    })
  })

  // Perform filtering when the search value changes
  node.on('prop:searchValue', ({ payload: value }) => {
    const results = node.props.options.filter((option) =>
      option.toLowerCase().startsWith(value.toLowerCase())
    )
    if (!results.length) results.push('No matches')
    node.props.matches = results
  })
}

/**
 * This is our input schema responsible for rendering the inner “input”
 * section. In our example, we render an text input which will be used
 * to filter search results, and an unordered list that shows all remaining
 * matches.
 */
const schema = {
  if: '$value',
  then: [
    {
      $el: 'a',
      attrs: {
        id: '$id',
        href: '#',
        class: '$classes.value',
        onClick: '$handlers.setValue',
      },
      children: '$value',
    },
  ],
  else: [
    {
      $el: 'input',
      bind: '$attrs',
      attrs: {
        id: '$id',
        class: '$classes.input',
        onKeydown: '$handlers.selection',
        onInput: '$handlers.search',
        value: '$searchValue',
      },
    },
    {
      $el: 'ul',
      if: '$matches.length < $options.length',
      attrs: {
        class: '$classes.dropdown',
      },
      children: [
        {
          $el: 'li',
          for: ['match', '$matches'],
          attrs: {
            'data-selected': {
              if: '$selection === $match',
              then: 'true',
              else: 'false',
            },
            class: '$classes.dropdownItem',
            onClick: '$handlers.setValue',
            onMouseenter: '$handlers.hover',
            onMouseleave: '$handlers.unhover',
          },
          children: '$match',
        },
      ],
    },
  ],
}

/**
 * Finally we create our actual input declaration by using `createInput` this
 * places our schema into a "standard" FormKit schema feature set with slots,
 * labels, help, messages etc. The return value of this function is a proper
 * input declaration.
 */
const autocomplete = createInput(schema, {
  props: ['options', 'matches', 'selection', 'searchValue'],
  features: [searchFeature],
})

// The states are a long list, so we'll burry them down here:
const stateList = [
  'Alabama',
  'Alaska',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'Florida',
  'Georgia',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Pennsylvania',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming',
]
</script>
<!-- %partial% -->

<style>
.formkit-dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 15em;
  background-color: white;
  box-shadow: 0 0 0.5em rgba(0 0 0 / 10%);
  margin: 0;
  padding: 0;
  list-style-type: none;
  overflow: hidden;
  border-radius: 0.25em;
}
.formkit-dropdown-item {
  padding: 0.5em;
  border-bottom: 1px solid #e4e4e4;
}
.formkit-dropdown-item[data-selected='true'] {
  background-color: #cfe8fc;
}
.formkit-value {
  align-items: center;
  background-color: #f5f5f5;
  border-radius: 0.25em;
  box-sizing: border-box;
  color: black;
  display: flex;
  justify-content: space-between;
  padding: 0.55em 0.5em;
  text-decoration: none;
  width: 100%;
}
.formkit-value::after {
  content: '\00D7';
  margin-left: 0.5em;
  font-size: 1.1em;
}
</style>
