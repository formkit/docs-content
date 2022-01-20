<!-- %partial% -->
<template>
  <FormKitSchema :data="data" :schema="schema" />
</template>

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
            class: '$classes.prefix',
          },
          children: '$label',
        },
      },
    },
  },
]
</script>
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
