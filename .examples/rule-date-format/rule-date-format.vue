<template>
  <!-- %partial%::html:: -->
  <FormKit
    type="text"
    label="Birthday"
    help="Enter your birthday in the format: MM/DD/YYYY"
    validation="date_format:MM/DD/YYYY"
    validation-visibility="live"
    value="1988-05-14"
  />
  <!-- %partial%::html:: -->
</template>
