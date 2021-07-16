<template>
  <div class="my-test-component">
    <h1>{{ msg }}</h1>
    <button @click="increment">
      Clicks: {{ count }}
    </button>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const count = ref(0)
    const increment = () => {
      count.value++
    }

    return {
      msg: 'my file name includes `-composition.vue` so I am loaded with the `vue-composition` lang',
      count,
      increment
    }
  }
}
</script>
