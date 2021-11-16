<template>
  <FormKitSchema
    :schema="schema"
    :data="data"
  >
    <template #default="{ label }">
      <span style="color: green">{{ label }}</span>
    </template>
  </FormKitSchema>
</template>

<script setup>
import { reactive, onMounted } from 'vue'

const schema = [
  {
    $el: 'h1',
    children: 'Fast click game'
  },
  {
    $el: 'button',
    attrs: {
      onClick: '$handleClick'
    },
    children: '$slots.default'
  },
  {
    $el: 'p',
    children: [
      {
        if: '$state === "won"',
        then: {
          $el: 'span',
          attrs: {
            style: { color: 'green' }
          },
          children: 'You won!!!!'
        },
        else: {
          if: '$state === "lost"',
          then: {
            $el: 'span',
            attrs: {
              style: { color: 'red' },
            },
            children: 'Sorry, you lost — try again!'
          },
          else: 'Try to click when the button reads between 500 and 600!'
        }
      }
    ]
  }
]

const handleClick = () => {
  if (data.label >= 500 && data.label <= 600) {
    data.state = 'won'
  } else {
    data.state = 'lost'
  }
  setTimeout(() => {
    data.state = 'play'
    tick()
  }, 2000)
}

const data = reactive({
  state: 'play',
  label: 0,
  handleClick
})

const tick = () => {
  if (data.state === 'play') {
    data.label = data.label >= 1000 ? 0 : data.label + 10
    setTimeout(tick, 10)
  }
}
onMounted(tick)
</script>
