<template>
  <!-- %partial%::html:: -->
  <FormKit
    type="mask"
    mask="###-###-####"
    value="123-456-7890"
    label="(Shift mode) Social security number"
    help="Notice when you type new numbers the characters shift to the right."
  />
  <FormKit
    type="mask"
    mode="replace"
    mask="###-###-####"
    value="123-456-7890"
    label="(Replace mode) Social security number"
    help="Notice when you type new numbers the characters are replaced."
  />
  <!-- %partial%::html:: -->
</template>
