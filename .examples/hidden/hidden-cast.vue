<template>
  <FormKit type="form" :actions="false" #default="{ value }">
    <!-- %partial%::html:: -->
    <FormKit
      type="hidden"
      number="integer"
      name="account_id"
      value="98213321"
    />
    <pre wrap>{{ JSON.stringify(value) }}</pre>
    <!-- %partial%::html:: -->
  </FormKit>
</template>
