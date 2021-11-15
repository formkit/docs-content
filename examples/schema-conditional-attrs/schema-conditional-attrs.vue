<template>
  <FormKit
    type="select"
    v-model="data.drink"
    label="Select a spirit"
    placeholder="Select a spirit"
    :options="['Vodka', 'Whisky', 'Rum']"
    help="Select your favorite base for cocktails."
  />
  <FormKitSchema
    :schema="schema"
    :data="data"
  />
</template>

<script setup>
import { reactive } from 'vue'
const data = reactive({ drink: undefined })
const schema = [
  {
    $el: 'h1',
    if: '$drink',
    attrs: {
      style: {
        color: {
          if: '$drink == Vodka',
          then: 'blue',
          else: {
            if: '$drink == Whisky',
            then: 'brown',
            else: 'tan'
          }
        }
      }
    },
    children: '$drink'
  }
]
</script>
