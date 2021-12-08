<template>
<!-- %partial%::html:: -->
<FormKit
  type="textarea"
  label="Essay"
  validation="min:1000"
  :validation-messages="{
    'min': 'Essay must be at least 1000 characters 😱'
  }"
/>
<!-- %partial%::html:: -->
</template>
