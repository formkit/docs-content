<script setup>
import { reactive } from 'vue'

const data = reactive({
  addItem: (node) => () => node.input(node._value.concat([''])),
  stringify: JSON.stringify,
})

const schema = {
  $formkit: 'form',
  children: [
    {
      $formkit: 'list',
      name: 'links',
      value: [''], // 👈 Starts with an empty item
      dynamic: true,
      children: [
        {
          $formkit: 'text',
          for: ['item', 'index', '$items'], // 👈 $items is in the slot’s scope
          key: '$item', // 👈 Use $item as the key
          index: '$index', // 👈 Pass the $index to the FormKit component
          label: 'Link',
          validation: 'required|url',
          validationVisibility: 'submit',
        },
        {
          $el: 'button',
          attrs: {
            type: 'button',
            onClick: '$addItem($node)', // 👈 Call $addItem from data
          },
          children: 'Add a link',
        },
      ],
    },
    {
      $el: 'pre',
      children: '$stringify($value)',
    },
  ],
}
</script>

<template>
  <FormKitSchema :schema="schema" :data="data" />
</template>
