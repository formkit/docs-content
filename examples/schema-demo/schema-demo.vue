<script>
export default {
  data () {
    return {
      // %partial%::js::
      data: {
        value: 100000,
        format: (value) => "$" + value.toLocaleString()
      },
      schema: [ // Capsule Schema Format
        {
          $el: 'label',
          children: 'What is your salary?'
        },
        {
          if: '$value >= 90000',
          then: [{ $el: 'h1', children: ['$format($value)'], attrs: { 'data-range': 'high' } }],
          else: {
            if: '$value >= 10000',
            then: [{ $el: 'h2', children: ['$format($value)'], attrs: { 'data-range': 'medium' } }],
            else: [{ $el: 'h3', children: 'You need a new job!', attrs: { 'data-range': 'low' } }],
          },
        },
        {
          $el: 'footer',
          children: [
            {
              $el: 'small',
              children: '© All rights reserved.'
            }
          ]
        }
      ]
      // %partial%::js::
    }
  }
}
</script>

<template>
  <FormKitSchema
    :data="data"
    :schema="schema"
  />
</template>
