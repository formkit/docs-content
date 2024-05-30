<template>
  <FormKit type="form" #default="{ value }" :actions="false">
    <!-- %partial%::html:: -->
    <FormKit
      type="range"
      name="strength"
      id="strength"
      label="Strength"
      value="5"
      min="1"
      max="10"
      step="1"
      help="How many strength points should this character have?"
    />

    <!-- %partial%::html:: -->
    <pre wrap>{{ value.strength }}</pre>
  </FormKit>
</template>
