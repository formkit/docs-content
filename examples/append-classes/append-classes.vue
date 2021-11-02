<template>
  <!-- %partial%::html:: -->
  <FormKit
   outer-class="i-will-be-appended"
   :wrapper-class="{
     'i-will-append': true,
     'i-will-not': false
   }"
  />
  <!-- %partial%::html:: -->
</template>
