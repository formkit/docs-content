<template>
  <!-- %partial%::html:: -->
  <FormKit
    type="date"
    label="Birthday"
    help="Enter your birthday (must be born before 2011)"
    validation="date_before:2011-01-01"
    validation-visibility="live"
  />
  <!-- %partial%::html:: -->
</template>
