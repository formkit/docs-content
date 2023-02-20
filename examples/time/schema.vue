<script setup>
const schema = [
  {
    $formkit: 'form',
    actions: false,
    children: [
      /* %partial% */
      {
        $formkit: 'time',
        name: 'time',
        label: 'Time',
        value: '23:15',
        help: 'What time will go home today?'
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