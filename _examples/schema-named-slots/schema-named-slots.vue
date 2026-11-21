<script setup>
import { markRaw, ref } from 'vue'

// A custom component with a default slot and two named slots.
// The header and footer slots expose scoped slot props.
const Card = {
  setup() {
    const likes = ref(0)
    return { likes }
  },
  template: `
    <div style="border: 1px solid #ccc; border-radius: 6px; padding: 1em;">
      <header>
        <slot name="header" title="Schema cards" :likes="likes" />
      </header>
      <main><slot /></main>
      <footer>
        <button @click="likes++">👍 Like</button>
        <slot name="footer" :likes="likes" />
      </footer>
    </div>
  `,
}

const library = markRaw({ Card })

const data = { author: 'Jane' }

const schema = [
  {
    $cmp: 'Card',
    // The default slot (children works too)
    children: [{ $el: 'p', children: 'Named slots work just like children.' }],
    slots: {
      // $title comes from the slot props, $author from the schema data
      header: [{ $el: 'h3', children: '$: $title + " by " + $author' }],
      // Slot content can be a string, expression, array, or conditional
      footer: {
        if: '$likes > 0',
        then: '$: " " + $likes + " like(s)"',
        else: ' No likes yet',
      },
    },
  },
]
</script>

<template>
  <FormKitSchema :schema="schema" :data="data" :library="library" />
</template>
