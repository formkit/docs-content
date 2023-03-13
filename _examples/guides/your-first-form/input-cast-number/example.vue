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
    validation="min:2|max:9"
    validation-visibility="live"
    min="1"
    max="10"
    step="1"
    help="How many strength points should this character have?"
    :plugins="[castNumber]"
  />

  <p><em><small>Strength is now a Number instead of a String.</small></em></p>
</template>
