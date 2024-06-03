<script setup>
import { ref } from 'vue'
import { createInput } from '@formkit/vue'

// Here's our schema, notice we have 2 handlers:
// numberA and numberB. Those are not provided by FormKit by default, they are
// defined in our "feature".
const sum = createInput(
  [
    {
      $el: 'input',
      attrs: {
        class: '$classes.addend', // set in formkit.config.ts
        type: 'number',
        onInput: '$handlers.numberA',
      },
    },
    '+',
    {
      $el: 'input',
      attrs: {
        class: '$classes.addend', // set in formkit.config.ts
        type: 'number',
        onInput: '$handlers.numberB',
      },
    },
    '= ',
    '$_value || 0',
  ],
  {
    features: [addHandlers],
    family: 'text', // inherit theme classes from text family
  }
)

/**
 * Here we add our handlers.
 */
function addHandlers(node) {
  // Features are run very early in the node’s boot — before the context object
  // is fully initialized, so we wait till the node is "created" — this is still
  // before the node is mounted, but after plugins have run.
  let numberA = 0
  let numberB = 0

  node.on('created', () => {
    // Now we define a new handler. Note that context.handlers is the same
    // object available in $handlers in our schema.
    node.context.handlers.numberA = (event) => {
      numberA = Number(event.target.value)
      // We update the value of the input by calling node.input()
      node.input(numberA + numberB)
    }

    // Now a second context handler
    node.context.handlers.numberB = (event) => {
      numberB = Number(event.target.value)
      node.input(numberA + numberB)
    }
  })
}

const groupValues = ref({})
</script>

<template>
  <FormKit type="group" v-model="groupValues">
    <p class="mb-4">
      To illustrate the final value of this input, let's stick it in a group.
    </p>
    <FormKit
      :type="sum"
      name="mySum"
      label="Sum 2 numbers"
      help="Enter two numbers above and their values will be summed!"
    />
  </FormKit>
  <pre wrap>{{ groupValues }}</pre>
</template>
