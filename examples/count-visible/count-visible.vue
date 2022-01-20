<template>
  <FormKit
    label="Count some errors"
    validation="required|is:foo,baz|*length:3,3"
    validation-visibility="live"
    @node="countVisible"
  />
  Visible: {{ visibleCount }} messages
</template>

<script setup>
import { ref } from 'vue'

const visibleCount = ref(0)

function countVisible(node) {
  // First we establish our counter
  node.ledger.count('visible', (message) => message.visible)

  // Then we can get the value of the counter anytime
  visibleCount.value = node.ledger.value('visible')

  // Or we can listen to changes for that counter
  node.on('count:visible', ({ payload: count }) => {
    visibleCount.value = count
  })
}
</script>
