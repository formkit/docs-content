<template>
  <!-- %partial%::html:: -->
  <FormKit
    type="text"
    label="Floating Text Label via prop"
    :floating-label="true"
  />
  <FormKit
    type="textarea"
    label="Floating Textarea Label via prop"
    :floating-label="true"
  />
  <FormKit type="text" label="I have a standard label" />
  <!-- %partial% -->
</template>

<style scoped>
@import 'https://cdn.jsdelivr.net/npm/@formkit/addons@latest/dist/css/floatingLabels.css';
</style>
