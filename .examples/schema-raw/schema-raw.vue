<!-- %partial% -->
<script setup>
const data = {
  field: 'Username',
}

const schema = [
  {
    $cmp: 'FormKit',
    props: {
      type: 'text',
      // This one will be parsed:
      label: '$field',
      // This object will stay raw and be passed as the sectionsSchema prop:
      __raw__sectionsSchema: {
        prefix: {
          $el: 'div',
          attrs: {
            class:
              '$classes.prefix + " py-0 px-2 text-sm stretch flex items-center bg-gray-200 mr-2 rounded"',
          },
          children: '$label',
        },
      },
    },
  },
]
</script>

<template>
  <FormKitSchema :data="data" :schema="schema" />
</template>
<!-- %partial% -->

<style>
.formkit-prefix {
  padding: 0 0.5em;
  font-size: 0.875em;
  background-color: lightgrey;
  border-radius: 0.25em 0 0 0.25em;
  align-self: stretch;
  display: flex;
  align-items: center;
  line-height: 1;
}
</style>
