<script setup>
</script>

<template>
  <FormKit type="form" :actions="false">
  <!-- %partial% -->
  <!-- Use plugin defaults -->
  <FormKit
    type="textarea"
    name=""
    label="Textarea with a Maximum Length"
    maxlength="100"
  />

  <!-- Customize inline for a field -->
  <FormKit
    type="text"
    label="Text field with a Maximum Length"
    maxlength="100"
    maxlength-countdown
    maxlength-remaining-text="letters left"
    help="Even though `text` fields aren't configured in the options, you can still explicitly add them"
  />
  <!-- %partial% -->
  </FormKit>
</template>
