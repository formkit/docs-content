<template>
  <!-- %partial%::html:: -->
  <FormKit
    type="text"
    label="Language"
    validation="matches:node,php,java,python"
    validation-visibility="live"
    help="Which is your favorite server-side language?"
    value="vue"
  />
  <!-- %partial%::html:: -->
</template>
