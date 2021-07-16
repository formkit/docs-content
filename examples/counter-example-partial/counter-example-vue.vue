<template>
  <div class="counter">
    <p>I am an example that only shows a relevant subsection of code.</p>
    %inject%
    <p>There is more to my template but it's not revealed in the editor.</p>
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
