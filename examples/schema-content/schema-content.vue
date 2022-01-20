<template>
  <!-- %partial%::html:: -->
  <FormKit
    type="text"
    label="Your name"
    help="Try entering the name “formkit”."
    :schema="{
      label: {
        children: [
          '$label',
          {
            if: '$value == formkit',
            then: {
              $el: 'span',
              attrs: {
                style: { color: 'green' },
              },
              children: ' Thats our name too!',
            },
          },
        ],
      },
    }"
    validation-visibility="live"
  />
  <!-- %partial%::html:: -->
</template>
