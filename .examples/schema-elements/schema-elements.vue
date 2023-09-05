<script>
export default {
  data() {
    return {
      schema:
        // %partial%::javascript::
        [
          {
            $el: 'div', // try an h1!
            attrs: {
              style: { color: 'red' },
              'data-foo': 'bar',
            },
            children: 'Hello world',
          },
        ]
      // %partial%
    }
  },
}
</script>

<template>
  <FormKitSchema :schema="schema" />
</template>
