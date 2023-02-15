<script setup>
const schema = [
  /* %partial% */
  {
    $formkit: 'form',
    onSubmit: '$submitForm',
    submitLabel: 'Signup for newsletter',
    children: [
      {
        $formkit: 'email',
        name: 'email',
        label: 'Email address',
        validation: 'required|email',
        help: 'What email address should we send our newsletter to?'
      },
    ]
  }
  /* %partial% */
]

const data = {
  stringify: JSON.stringify,
  submitForm: (fields) => {
    alert(`Submitted ${fields.email} successfully!`)
  }
}
</script>

<template>
  <FormKitSchema :schema="schema" :data="data" />
</template>
