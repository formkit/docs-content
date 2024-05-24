<template>
  <FormKit type="form" #default="{ value }" :actions="false">
    <!-- %partial%::html:: -->
    <FormKit
      type="range"
      name="strength"
      id="strength"
      label="Strength"
      value="5"
      validation="min:2|max:9"
      validation-visibility="live"
      min="1"
      max="10"
      step="1"
      help="How many strength points should this character have?"
    />
  
    <!-- %partial%::html:: -->
    <p><em><small class="mb-4">Slide the strength above 9 or below 2.</small></em></p>
    <pre wrap>{{ value.strength }}</pre>
  </FormKit>
  </template>
  