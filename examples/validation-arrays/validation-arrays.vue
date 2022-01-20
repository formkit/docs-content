<template>
  <!-- %partial%::html:: -->
  <FormKit
    type="text"
    label="Phone"
    placeholder="xxx-xxx-xxxx"
    :validation="[['required'], ['matches', /^\d{3}-\d{3}-\d{4}$/]]"
    validation-visibility="live"
    :validation-messages="{
      matches: 'Phone number must be formatted: xxx-xxx-xxxx',
    }"
  />
  <!-- %partial%::html:: -->
</template>
