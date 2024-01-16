<script setup>
import { createInput } from '@formkit/vue'

const myInput = createInput(
  {
    $el: 'button',
    for: ['option', '$options'],
    attrs: {
      class: '$classes.input',
      placeholder: '$: "Hello " + $location',
      onClick: '$handlers.setValue($option)',
      ariaSelected: '$: $option === $value',
    },
    children: ['$currency', '$option'],
  },
  {
    props: {
      // 👀 A boolean prop — these can be added as attributes to the component
      capitalize: {
        boolean: true,
      },
      // 👀 Here we have a prop with a default value
      currency: {
        default: '',
      },
      // 👀 This prop has a setter that transforms the prop value anytime it is set
      options: {
        setter(value, node) {
          let options
          if (typeof value === 'string') {
            options = value.split(',')
          } else {
            options = value
          }
          if (node.props.capitalize) {
            options = options.map(
              (option) => option[0].toUpperCase() + option.slice(1)
            )
          }
          return options
        },
      },
    },
    features: [
      function setValues(node) {
        node.on('created', () => {
          // Notice the currying here bind the value into the callback
          node.context.handlers.setValue = (value) => () => node.input(value)
        })
      },
    ],
  }
)
</script>

<template>
  <FormKit type="group" #default="{ value }">
    <FormKit
      :type="myInput"
      name="planet"
      label="Select a hospitable planet"
      capitalize
      options="earth,mars,venus"
      input-class="border-2 border-gray-300 mr-2 px-2 py-1 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm aria-[selected=true]:bg-gray-200"
    />
    <FormKit
      :type="myInput"
      name="price"
      label="Price"
      currency="$"
      :options="['10.00', '12.99', '15.00']"
      help="How much are you willing to pay?"
      input-class="border-2 border-gray-300 mr-2 px-2 py-1 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm aria-[selected=true]:bg-gray-200"
    />
    <pre>{{ value }}</pre>
  </FormKit>
</template>
