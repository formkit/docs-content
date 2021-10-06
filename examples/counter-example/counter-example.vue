<template>
  <FormKit
    type="text"
  />
</template>

<script>
 export default {
  data () {
    return {
      msg: 'I am not specific about being options or composition API',
      count: 0
    }
  },
  methods: {
    increment () {
      this.count++
    }
  }
}
</script>
