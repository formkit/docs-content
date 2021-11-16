<template>
  <p>Reveal one question at a time with schema.</p>
  <FormKitSchema :schema="schema" />
</template>

<script setup>
const schema = [
  {
    $cmp: 'FormKit',
    props: {
      type: 'text',
      id: 'year',
      label: 'What year did WWII end?',
      validationLabel: 'Year',
      validation:'required|is:1945'
    }
  },
  {
    $cmp: 'FormKit',
    if: '$get(year).state.valid',
    props: {
      type: 'radio',
      id: 'surrender',
      label: 'What country surrendered first?',
      validationLabel: 'Country',
      validation:'required|is:Italy',
      options: [
        'Germany',
        'Italy',
        'Japan'
      ]
    }
  },
  {
    $cmp: 'FormKit',
    if: '$get(surrender).state.valid',
    props: {
      type: 'text',
      id: 'moon',
      label: 'When did we land on the moon?',
      validationLabel: 'year',
      validation:'required|is:1969',
    }
  },
  {
    $el: 'h1',
    if: '$get(moon).state.valid',
    attrs: {
      style: { color: 'green' }
    },
    children: '100% 🎉'
  }
]
</script>
