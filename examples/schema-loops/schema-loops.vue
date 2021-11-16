<template>
  <FormKit
    type="text"
    label="Add a city"
    help="Add a city and hit enter"
    v-model="city"
    @keyup.enter="addCity"
  />
  <FormKitSchema
    :schema="schema"
    :data="data"
  />
</template>

<script setup>
import { reactive, ref } from 'vue'
const schema = [
  {
    $el: 'ul',
    attrs: {
      class: 'city-list'
    },
    children: [
      {
        $el: 'li',
        for: ['item', 'key', '$cities'],
        children: '$: ($key * 1 + 1) + ": " + $item'
      }
    ]
  }
]

const data = reactive({
  cities: [
    'Boston',
    'Amsterdam',
    'Nairobi'
  ]
})

const city = ref('')

const addCity = () => {
  data.cities.push(city.value)
  city.value = ''
}
</script>
