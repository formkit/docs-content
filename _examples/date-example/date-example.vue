<template>
  <!-- %partial%::html:: -->
  <FormKit
    type="date"
    value="2011-01-01"
    label="Birthday"
    help="Enter your birth day"
    validation="required|date_before:2010-01-01"
    validation-visibility="live"
  />
  <!-- %partial%::html:: -->
</template>
