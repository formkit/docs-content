<template>
  <FormKit
    :type="myInput"
    label="Hello world example"
    help="You still cant interact with me, but im here!"
    validation="required"
    validation-behavior="live"
  />
</template>

<script setup>
const myInput = {
  type: 'input',
  schema: [
    {
      $el: 'label',
      if: '$label',
      attrs: {
        class: '$classes.label',
      },
      children: '$label',
    },
    {
      $el: 'div',
      attrs: {
        class: '$classes.inner',
      },
      children: ['Hello world'],
    },
    {
      $el: 'div',
      if: '$help',
      attrs: {
        class: '$classes.help',
      },
      children: '$help',
    },
    {
      $el: 'ul',
      attrs: {
        class: '$classes.messages',
      },
      children: [
        {
          $el: 'li',
          for: ['message', '$messages'],
          attrs: {
            class: '$classes.message',
          },
          children: '$message.value',
        },
      ],
    },
  ],
}
</script>
