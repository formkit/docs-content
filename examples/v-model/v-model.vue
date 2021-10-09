<template>
  <FormKit
    type="text"
    label="European city"
    help="What is your favorite European city?"
    v-model="city"
  />
  <button
    @click="reset"
    v-if="city !== 'Florence'"
  >
    Change “{{ city }}” to Florence
  </button>
</template>

<script>
export default {
  data () {
    return {
      city: 'Florence'
    }
  },
  methods: {
    reset () {
      this.city = 'Florence'
    }
  }
}
</script>
