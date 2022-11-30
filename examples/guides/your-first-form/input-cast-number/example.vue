<script setup>
const castNumber = (node) => {
  node.hook.input((value, next) => next(Number(value)))
}
</script>

<!-- %partial%::html:: -->
<template>
  <FormKit
    type="range"
    name="vitality"
    id="vitality"
    label="Vitality"
    value="5"
    min="1"
    max="10"
    step="1"
    help="How much vitality points to start with"
    :plugins="[castNumber]"
  />
</template>
<!-- %partial%::html:: -->
