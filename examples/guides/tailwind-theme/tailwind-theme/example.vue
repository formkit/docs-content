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
    :help="`Help text for the ${type} input`"
    :multiple="type === 'file'"
    :disabled="type === 'date' ? true : undefined"
    :validation="type === 'email' ? 'required|email' : 'required'"
    :validation-visibility="type === 'email' ? 'live' : 'blur'"
    :validation-label="type"
  />
</template>
