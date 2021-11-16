<template>
  <h2>Order a beverage</h2>
  <FormKitSchema :schema="schema" />
</template>

<script setup>
const schema = [
  {
    $cmp: 'FormKit',
    props: {
      type: 'select',
      id: 'drink',
      label: 'Drink',
      placeholder: 'Pick your drink',
      options: {
        coffee: 'Drip coffee',
        espresso: 'Espresso shot',
        tea: 'Tea'
      },
      validation:'required'
    }
  },
  {
    $cmp: 'FormKit',
    if: '$get(drink).value',
    props: {
      type: 'radio',
      label: '$: "Drink options (" + $get(drink).value + ")"',
      options: {
        if: '$get(drink).value === coffee',
        then: [
          'Large',
          'Medium',
          'Small'
        ],
        else: {
          if: '$get(drink).value === espresso',
          then: [
            'Single shot',
            'Double shot',
          ],
          else: [
            'Earl grey',
            'Matcha',
            'Green tea',
            'Jasmine'
          ]
        }
      }
    }
  }
]
</script>
