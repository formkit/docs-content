import { createInput } from '@formkit/react'

const searchFeature = (node) => {
  node.on('created', () => {
    node.props.matches = []
    node.props.selection = ''

    const setValue = async (event) => {
      if (event && typeof event.preventDefault === 'function') {
        event.preventDefault()
      }
      node.input(node.props.selection)
      node.props.selection = ''
      node.props.searchValue = ''
      await new Promise((resolve) => setTimeout(resolve, 50))
      if (document.querySelector('input#' + node.props.id)) {
        document.querySelector('input#' + node.props.id).focus()
      }
    }

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

    Object.assign(node.context.handlers, {
      setValue,
      selection: (event) => {
        switch (event.key) {
          case 'Enter':
            return setValue()
          case 'ArrowDown':
            event.preventDefault()
            return select(1)
          case 'ArrowUp':
            event.preventDefault()
            return select(-1)
        }
      },
      search(event) {
        node.props.searchValue = event.target.value
      },
      hover: (event) => {
        node.props.selection = event.target.textContent
      },
      unhover: (event) => {
        if (event.target.textContent === node.props.selection) {
          node.props.selection = ''
        }
      },
    })
  })

  node.on('prop:searchValue', ({ payload: value }) => {
    const results = node.props.options.filter((option) =>
      option.toLowerCase().startsWith(value.toLowerCase())
    )
    if (!results.length) results.push('No matches')
    node.props.matches = results
  })
}

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

const autocomplete = createInput(schema, {
  props: ['options', 'matches', 'selection', 'searchValue'],
  features: [searchFeature],
  family: 'text',
})

export default autocomplete
