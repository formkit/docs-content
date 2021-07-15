<template>
  <div class="my-test-component">
    <h1>{{ msg }}</h1>
    <button @click="increment">Clicks: {{ count }}</button>
  </div>
</template>

<script>
 export default {
  data () {
    return {
      msg: 'my file name includes `-options.vue` so I am loaded with the `vue-options` lang',
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