<script setup>
const schema = [
  /* %partial% */
  {
    $formkit: 'group',
    children: [
      {
        $formkit: 'text',
        name: 'street',
        label: 'Street address',
        placeholder: 'Your street',
        validation: 'required'
      },
      {
        $el: 'pre',
        children: '$stringify($value)'
      }
    ]
  }
  /* %partial% */
]

const data = {
  stringify: JSON.stringify
}
</script>

<template>
  <FormKitSchema :schema="schema" :data="data" />
</template>