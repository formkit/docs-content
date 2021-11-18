<template>
<!-- %partial%::html:: -->
<FormKit
  type="text"
  label="Essay"
  validation="min:1000"
  :validation-messages="{
    'min': 'Essay must be at least 1500 words 😱'
  }"
/>
<!-- %partial%::html:: -->
</template>
