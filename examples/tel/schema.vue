<script setup>
const schema = [
  {
    $formkit: 'form',
    actions: false,
    children: [
      /* %partial% */
      {
        $formkit: 'tel',
        name: 'phone',
        label: 'Phone number',
        placeholder: 'xxx-xxx-xxxx',
        validation: 'matches:/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/',
        validationVisibility: 'dirty',
        validationMessages: {
          matches: 'Phone number must be in the format xxx-xxx-xxxx',
        }
      },
      /* %partial% */
      {
        $el: 'pre',
        children: '$stringify($value)'
      }
    ]
  }
]

const data = {
  stringify: JSON.stringify
}
</script>

<template>
  <FormKitSchema :schema="schema" :data="data" />
</template>