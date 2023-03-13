<template>
  <!-- %partial%::html:: -->
  <FormKit 
    :outer-class="{
      'formkit-outer': false
    }"
  />
  <FormKit 
    outer-class="!formkit-outer"
  />
  <!-- %partial%::html:: -->
</template>
