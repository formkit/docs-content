<script setup>
import { reactive } from 'vue'

const schema = [
  {
    $el: 'div',
    // You can use expressions to concatenate strings
    children: '$: "Qty: " + $count + " x " + $format($price)',
  },
  {
    $el: 'div',
    children: ['Shipping: ', '$format($ship)'],
  },
  {
    $el: 'div',
    children: [
      'Total: ',
      // No label needed since $format starts with $
      '$format(($count * $price) + $ship)',
    ],
  },
]
const data = reactive({
  count: 1,
  price: 15.29,
  ship: 9.99,
  format: Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
    .format,
})
</script>

<template>
  <FormKitSchema :schema="schema" :data="data" />
  <FormKit type="button" @click="data.count++" outer-class="mt-6">
    Add to cart
  </FormKit>
</template>
