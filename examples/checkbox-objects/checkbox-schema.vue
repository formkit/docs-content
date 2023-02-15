<script setup>
const schema = [
  {
    $formkit: 'form',
    actions: false,
    children: [
      /* %partial% */
      {
        $formkit: 'checkbox',
        name: 'food',
        label: 'Indian food',
        placeholder: 'Select your favorite Indian dishes.',
        options: '$foods'
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
  foods: [
    {
      value: 'item-2',
      label: 'Bhajji',
      help: 'Fried chickpea batter — spicy.',
    },
    {
      value: 'item-55',
      label: 'Vada Pav (out of stock)',
      help: 'Fried vegetarian dumplings.',
      attrs: { disabled: true }
    },
    {
      value: 'item-22',
      label: 'Paratha',
      help: 'Flatbread layered and pan friend.',
    },
    {
      value: 'item-44',
      label: 'Halwa',
      help: 'Pudding made with flour.',
    }
  ]
}
</script>

<template>
  <FormKitSchema :schema="schema" :data="data" />
</template>

