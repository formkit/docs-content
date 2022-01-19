<template>
  <input
    v-for="i in digits"
    maxlength="1"
    :class="context.classes.digit"
    :value="props.context._value"
    @input="handleInput"
  />
</template>

<script setup>
const props = defineProps({
  context: Object,
})

const digits = Number(props.context.digits)

function handleInput(e) {
  props.context.node.input(e.target.value)
}
</script>
