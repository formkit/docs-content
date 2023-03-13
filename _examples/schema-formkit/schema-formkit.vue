<script setup>
const schema = [
  {
    $cmp: 'FormKit',
    props: {
      type: 'radio',
      label: 'Income',
      help: 'Select your household income',
      options: [
        { value: 20000, label: '<= $20,000' },
        { value: 40000, label: '$21k - $40k' },
        { value: 80000, label: '$41k - $80k' },
        { value: 130000, label: '$81k - $130k' },
        { value: 250000, label: '$131k - $250k' },
      ],
      validation: 'required|min:250000',
      validationVisibility: 'dirty',
      validationMessages: {
        min: 'Sorry, only wealthy people can get loans from the bank.'
      }
    }
  },
  {
    $cmp: 'FormKit',
    props: {
      type: 'select',
      label: 'Marital status',
      options: [
        'Married',
        'Single',
        'Divorced',
        'Engaged'
      ]
    }
  }
]
</script>

<template>
  <h2>Loan application</h2>
  <FormKitSchema :schema="schema" />
</template>
