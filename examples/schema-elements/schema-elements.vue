<template>
<FormKitSchema
  :schema="schema"
/>
</template>

<script>
export default {
  data () {
    return {
      schema:
      // %partial%::js::
      [
        {
          $el: 'div', // try an h1!
          children: 'Hello world'
        }
      ]
      // %partial%
    }
  }
}
</script>
