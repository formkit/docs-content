<template>
  <FormKit
    type="text"
    label="Health insurance group"
    placeholder="G-XXXXX"
    validation="required|matches:/^G-\d{5}$/"
    validation-visibility="live"
    :validation-messages="{
      matches: 'Must be in the format G-12345',
    }"
  />
</template>
