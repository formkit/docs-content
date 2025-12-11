<template>
  <!-- %partial% -->
  <FormKit
    type="repeater"
    name="networks"
    label="Connected Networks"
    :min="1"
  >
    <FormKit type="text" name="name" label="Network" />
    <FormKit type="text" name="username" label="Username" />
  </FormKit>
  <!-- %partial% -->
</template>
