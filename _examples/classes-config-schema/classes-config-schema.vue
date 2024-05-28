<script setup>
import { FormKitSchema } from '@formkit/vue'

const schema = [
  {
    $formkit: 'group',
    name: 'group',
    // adds 'half' class to all children
    config: { outerClass: 'half' },
    children: [
      {
        $formkit: 'email',
        label: 'Email',
      },
      {
        $formkit: 'email',
        label: "Your spouse's email",
      },
    ],
  },
]
</script>

<template>
  <div class="wrapper">
    <FormKitSchema :schema="schema" />
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
}
.half {
  flex: 0 0 50%;
  padding-right: 20px;
}
</style>
