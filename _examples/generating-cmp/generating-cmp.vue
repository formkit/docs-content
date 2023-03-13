<template>
  <!-- %partial%::html:: -->
  <FormKitSchema
    :schema="[
      {
        $cmp: 'FormKit',
        props: {
          type: 'email',
          label: 'Email address',
        }
      }
    ]"
  />
  <!-- %partial%::html:: -->
</template>
