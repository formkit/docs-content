<template>
  <!-- %partial%::html:: -->
  <FormKit 
    type="text" 
    label="Floating Text Label" 
  />
  <FormKit 
    type="textarea" 
    label="Floating Textarea Label" 
  />
  <FormKit
    type="text"
    label="I have a standard label via prop"
    :floating-label="false"
  />
  <!-- %partial% -->
</template>

<style>
@import "https://cdn.jsdelivr.net/npm/@formkit/addons@1.4.0/dist/css/floatingLabels.css";
</style>
