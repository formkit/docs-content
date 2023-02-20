<script setup>
const schema = [
  {
    $formkit: 'form',
    actions: false,
    children: [
      /* %partial% */
      {
        $formkit: 'hidden',
        name: 'user_id',
        value: 'user_32135'
      },
      /* %partial% */
      {
        $el: 'pre',
        children: '$stringify($value)'
      }
    ]
  }
]

const data = {
  stringify: JSON.stringify
}
</script>

<template>
  <FormKitSchema :schema="schema" :data="data" />
</template>
