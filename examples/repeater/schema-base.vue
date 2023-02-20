<script setup>
const schema = [
  {
    $formkit: 'form',
    actions: false,
    children: [
      /* %partial% */
      {
        $formkit: 'repeater',
        name: 'users',
        label: 'Users',
        children: [
          {
            $formkit: 'email',
            name: 'email',
            label: 'Email',
            placeholder: 'Add email address...',
            validations: 'required|email'
          }
        ]
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