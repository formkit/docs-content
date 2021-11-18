<template>
<!-- %partial%::html:: -->
<FormKit
  type="text"
  label="What's a food you might find in a breakfast buffet?"
  validation="is:eggs,bacon,sausage,coffee"
  validation-behavior="live"
  validation-label="year"
  :validation-messages="{ is: 'Not this buffet — try another.' }"
/>
<!-- %partial%::html:: -->
</template>
