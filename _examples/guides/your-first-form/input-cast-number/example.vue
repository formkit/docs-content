<script setup>
const castNumber = (node) => {
  node.hook.input((value, next) => next(Number(value)))
}
</script>

<template>
  <FormKit
    type="range"
    name="strength"
    id="strength"
    label="Strength"
    value="5"
    min="1"
    max="10"
    step="1"
    help="How many strength points should this character have?"
    :plugins="[castNumber]"
  />

  <p>Strength is now a Number instead of a String.</p>
</template>
