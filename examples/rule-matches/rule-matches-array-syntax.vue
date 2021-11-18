<template>
<!-- %partial%::html:: -->
<FormKit
  type="text"
  placeholder="#00ff00"
  label="Hexidecimal Color Value"
  :validation="[['matches', /^#[a-fA-F0-9]{6}$/]]"
  validation-behavior="live"
/>
<!-- %partial%::html:: -->
</template>
