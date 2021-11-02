<template>
  <!-- %partial%::html:: -->
  <FormKit
    :classes="{
      outer: 'foo-bar',
      inner: {
        $reset: true
      }
    }"
    outer-class="$reset only-me-please"
  />
  <!-- %partial%::html:: -->
</template>
