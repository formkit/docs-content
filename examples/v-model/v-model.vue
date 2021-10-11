<template>
  <FormKit
    type="text"
    label="European city"
    help="What is your favorite European city?"
    v-model="city"
  />
  <button @click="randomCity">Random City</button>
  <pre>City: {{ city }}</pre>
</template>

<script>
export default {
  data () {
    return {
      city: 'Florence',
      cities: [
        'Prauge', 'Rome', 'Berlin',
        'Amsterdam', 'Barcelona', 'London'
      ]
    }
  },
  methods: {
    randomCity () {
      const index = Math.floor(Math.random() * (this.cities.length - 1))
      if (this.cities[index] !== this.city) {
        this.city = this.cities[index]
      } else {
        this.randomCity()
      }
    }
  }
}
</script>
