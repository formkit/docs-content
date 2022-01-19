<template>
  <input @input="handleInput" :value="props.context._value" />
</template>

<script setup>
const props = defineProps({
  context: Object,
})

function handleInput(e) {
  props.context.node.input(e.target.value)
}
</script>
