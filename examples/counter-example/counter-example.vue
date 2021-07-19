<template>
  <div class="my-test-component">
    <h1>{{ msg }}</h1>
    <button @click="increment">
      Clicks: {{ count }}
    </button>
  </div>
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
