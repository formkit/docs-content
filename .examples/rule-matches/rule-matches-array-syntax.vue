<template>
  <!-- %partial%::html:: -->
  <FormKit
    type="text"
    placeholder="#00ff00"
    label="Hexidecimal Color"
    :validation="[['matches', /^#[a-fA-F0-9]{6}$/]]"
    validation-visibility="live"
    value="#00ff0"
  />
  <!-- %partial%::html:: -->
</template>
