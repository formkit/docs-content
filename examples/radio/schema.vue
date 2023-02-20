<script setup>
const schema = [
  {
    $formkit: 'form',
    actions: false,
    children: [
      /* %partial% */
      {
        $formkit: 'radio',
        name: 'transportation',
        label: 'Preferred transportation',
        help: 'How do you like to get around?',
        options: '$transportations'
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
  stringify: JSON.stringify,
  transportations: ['E-Bike', 'E-Scooter', 'Electric car', 'Walking', 'Space tube']
}
</script>

<template>
  <FormKitSchema :schema="schema" :data="data" />
</template>
