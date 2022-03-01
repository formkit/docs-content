<script setup>
const inputTypes = ['button', 'checkbox', 'color', 'date', 'datetime-local', 'email', 'file', 'month', 'number', 'password', 'radio', 'range', 'search', 'select', 'submit', 'tel', 'text', 'textarea', 'time', 'url', 'week']
const inputOptions = {
  checkbox: ['I like Tailwind', 'I also like FormKit', 'I like other things too'],
  radio: ['I like Tailwind', 'I like FormKit', 'I like everything'],
  select: ['I like Tailwind', 'I like FormKit', 'I like everything'],
}
</script>

<template>
  <FormKit
    v-for="type in inputTypes"
    :key="type"
    :label="`This is a ${type} input`"
    :type="type"
    :placeholder="`${type} input placeholder`"
    :options="inputOptions[type] ? inputOptions[type] : null"
    :help="`help text for the ${type} input`"
    :multiple="type === 'file'"
    validation="required"
    :validation-label="type"
  />
</template>

<style>
/* some styling for pseudo-elements requires
us to use @apply rules to reach them */

input[type="color"]::-webkit-color-swatch-wrapper {
  @apply p-0;
}
input[type="color"]::-webkit-color-swatch {
  @apply border-none rounded-sm;
}
input[type='file']::-webkit-file-upload-button,
input[type='file']::file-selector-button {
  @apply text-white bg-blue-500 hover:bg-blue-600 font-medium text-sm cursor-pointer border-0 py-3 pl-8 pr-5;
  margin-inline-start: -1rem;
  margin-inline-end: 1rem;
}
</style>
