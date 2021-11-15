<template>
  <FormKitSchema
    :schema="schema"
    :data="data"
  />
  <button @click="data.count++">Add to cart</button>
</template>

<script setup>
import { reactive } from 'vue'

const schema = [
  {
    $el: 'div',
    // You can use expression to concatenate strings
    children: '$: "Qty: " + $count + " x " + $format($price)'
  },
  {
    $el: 'div',
    children: [
      'Shipping: ',
      '$format($ship)'
    ]
  },
  {
    $el: 'div',
    children: [
      'Total: ',
      // No label needed since $format starts with $
      '$format(($count * $price) + $ship)'
    ]
  }
]
const data = reactive({
  count: 1,
  price: 15.29,
  ship: 9.99,
  format: Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format
})
</script>
