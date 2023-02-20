<script setup>
const schema = [
  /* %partial% */
  {
    $formkit: 'list',
    value: [
      'john@formkit.com',
      'sasha@formkit.com',
    ],
    children: [
      {
        $el: 'p',
        children: 'Please provide a list of emails.'
      },
      {
        $formkit: 'email',
        label: 'Email address',
        validation: 'required|email'
      },
      {
        $formkit: 'email',
        label: 'Email address',
        validation: 'required|email'
      },
      {
        $el: 'pre',
        children: '$stringify($value)'
      }
    ]
  }
  /* %partial% */
]

const data = {
  stringify: JSON.stringify
}
</script>

<template>
  <FormKitSchema :schema="schema" :data="data" />
</template>