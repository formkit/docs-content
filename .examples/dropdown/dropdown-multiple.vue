<script setup>
const sandwichToppings = [{ label: 'Lettuce', value: 'lettuce' }, { label: 'Tomato', value: 'tomato' }, { label: 'Onion', value: 'onion' }, { label: 'Pickles', value: 'pickles' }, { label: 'Cheese', value: 'cheese' }, { label: 'Mayo', value: 'mayo' }, { label: 'Mustard', value: 'mustard' }, { label: 'Ketchup', value: 'ketchup' }, { label: 'Avocado', value: 'avocado' }, { label: 'Bacon', value: 'bacon' }, { label: 'Ham', value: 'ham' }, { label: 'Turkey', value: 'turkey' }, { label: 'Chicken', value: 'chicken' }, { label: 'Roast Beef', value: 'roast-beef' }, { label: 'Salami', value: 'salami' }, { label: 'Pastrami', value: 'pastrami' }, { label: 'Tuna', value: 'tuna' }, { label: 'Egg Salad', value: 'egg-salad' }]
</script>

<template>
  <FormKit type="form" #default="{ value }" :actions="false">
    <FormKit
      type="dropdown"
      name="sandwich_toppings"
      label="Sandwich toppings"
      placeholder="Select as many toppings as you would like"
      :options="sandwichToppings"
      multiple
      :value="['lettuce', 'tomato']"
    />
    <pre wrap>{{ value }}</pre>
  </FormKit>
</template>

<style>
@import 'https://cdn.jsdelivr.net/npm/@formkit/pro@dev/genesis.css';
</style>
