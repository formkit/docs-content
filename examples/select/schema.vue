<script setup>
const schema = [
  {
    $formkit: 'form',
    actions: false,
    children: [
      /* %partial% */
      {
        $formkit: 'select',
        name: 'planet',
        label: 'What planet is the largest?',
        options: '$planets',
        placeholder: 'Select a planet',
        validation: 'required|is:jupiter',
        validationVisibility: 'dirty',
        validationMessages: {
          is: 'Nope! Jupiter is the largest planet'
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
  stringify: JSON.stringify,
  planets: {
    mercury: 'Mercury',
    venus: 'Venus',
    earth: 'Earth',
    mars: 'Mars',
    jupiter: 'Jupiter',
    saturn: 'Saturn',
    uranus: 'Uranus',
    neptune: 'Neptune',
  }
}
</script>

<template>
  <FormKitSchema :schema="schema" :data="data" />
</template>