<template>
  <!-- %partial%::html:: -->
  <FormKit
    type="date"
    label="Birthday"
    help="Enter your birthday (must be born after 1999)"
    validation="date_after:1999-12-31"
    validation-visibility="live"
    :validation-messages="{
      date_after: 'Sorry — no olds allowed.',
    }"
    value="1988-05-14"
  />
  <!-- %partial%::html:: -->
</template>
