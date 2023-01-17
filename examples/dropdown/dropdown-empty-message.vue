<template>
  <FormKit
    type="form"
    #default="{ value }"
    :actions="false"
  >
  <FormKit
    label="Dropdown with no options."
    :options="[]"
    type="dropdown"
  />
  <FormKit
    label="Dropdown with no options, and with empty message prop"
    :options="[]"
    type="dropdown"
    empty-message="No options here!"
  />
  <pre wrap>{{ value }}</pre>
  </FormKit>
</template>

