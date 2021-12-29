<template>
  <FormKit :plugins="[euroInputs]" type="form" v-model="formData">
    <FormKit type="italy" name="nome" />
    <FormKit type="france" name="nom" />
  </FormKit>
  <pre wrap>{{ formData }}</pre>
</template>

<script setup>
import { ref } from 'vue'
const formData = ref({})
// We not actually going to do anything in the body of this plugin
const euroInputs = () => {}
// But we do want to attach a “library”
euroInputs.library = (node) => {
  // we'll just let both inputs use the same text element
  const text = {
    $el: 'input',
    attrs: {
      onInput: '$handlers.DOMInput',
      value: '$_value',
    },
  }
  switch (node.props.type) {
    case 'italy':
      return node.define({
        type: 'input',
        schema: ['🇮🇹', text],
      })
    case 'france':
      return node.define({
        type: 'input',
        schema: ['🇫🇷', text],
      })
  }
}
</script>
