<template>
  <!-- %partial%::html:: -->
  <FormKit
    :classes="{
      outer: '$reset my-class',
      help: {
        'bg-red-500': true
      }
    }"
    help="Please enter your name above."
  />
  <!-- %partial%::html:: -->
</template>
