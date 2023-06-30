<script setup>
const schema = [
  /* %partial%::js:: */
  {
    $formkit: 'repeater',
    name: 'users',
    children: [
      {
        $formkit: 'text',
        name: 'email',
        // $index is available to children.
        label: '$: ($index + 1) + ". Email"',
        validation: 'required|email',
      },
    ],
  }
  /* %partial%::js:: */
]
</script>


<template>
  <FormKit
    #default="{ value }"
    type="form"
    :actions="false"
    :value="{ users: [{ email: 'justin@formkit.com ' }] }"
  >
    <FormKitSchema :schema="schema" />
    <pre wrap>{{ value }}</pre>
  </FormKit>
</template>
