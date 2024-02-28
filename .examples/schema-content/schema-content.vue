<template>
  <!-- %partial%::html:: -->
  <FormKit
    type="text"
    label="Your name"
    help="Try entering the name “formkit”."
    :sections-schema="{
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
              children: [
                {
                  $el: 'span',
                  children: 'That\'s our name too!',
                  attrs: {
                    class: 'ml-2',
                  },
                },
              ],
            },
          },
        ],
      },
    }"
    validation-visibility="live"
  />
  <!-- %partial%::html:: -->
</template>
