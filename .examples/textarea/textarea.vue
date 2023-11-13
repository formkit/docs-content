<template>
  <FormKit
    type="form"
    #default="{ value }"
    :actions="false"
  >
  <!-- %partial%::html:: -->
    <FormKit
      type="textarea"
      name="instructions"
      label="Your Essay"
      placeholder="Remember to write in complete sentences."
      :help="`${value.instructions ? value.instructions.length : 0} / 120`"
      validation="length:0,120"
      validation-visibility="live"
      :validation-messages="{
        length: 'Instructions cannot be more than 120 characters.',
      }"
    />
  <!-- %partial%::html:: -->
  </FormKit>
</template>
