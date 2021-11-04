<template>
  <!-- %partial%::html:: -->
  <FormKit
    type="tel"
    label="Phone number"
    placeholder="xxx-xxx-xxxx"
    validation="matches:/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/"
    :validation-messages="{
      matches: 'Phone number must be in the format xxx-xxx-xxxx'
    }"
    validation-behavior="dirty"
  />
  <!-- %partial%::html:: -->
</template>
