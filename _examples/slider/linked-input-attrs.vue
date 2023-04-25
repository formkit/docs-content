<template>
  <!-- %partial%::html:: -->
  <FormKit
    type="slider"
    max="1000"
    :value="[300, 800]"
    label="Linked input attrs"
    show-input
    :input-attrs="{
      sectionsSchema: {
        prefix: {
          $el: 'span',
          children: '&dollar;',
        },
      },
    }"
    :min-input-attrs="{
      label: 'Minimum Price',
    }"
    :max-input-attrs="{
      label: 'Maximum Price',
    }"
  />
  <!-- %partial%::html:: -->
</template>

<style>
[data-type='slider'] .formkit-linked-values .formkit-inner {
  padding-left: 0.5em;
}
[data-type='slider'] .formkit-linked-values .formkit-inner > span {
  margin-top: 3px;
}
[data-type='slider'] .formkit-linked-values .formkit-inner .formkit-input {
  padding-left: 0.25em;
}
</style>
