<script>
export default {
  // %partial%::javascript::
  data() {
    return {
      count: 0,
    }
  },
  // %partial%
  methods: {
    increment() {
      this.count++
    },
  },
}
</script>

<template>
  <div class="counter">
    <p>I am an example that only shows a relevant subsection of code.</p>
    <button @click="increment">Clicks: {{ count }}</button>
    <p>There is more to my template but it's not revealed in the editor.</p>
  </div>
</template>
