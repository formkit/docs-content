<template>
  <FormKit
    type="datepicker"
    name="pickup"
    label="A future date"
    validation-visibility="live"
    placeholder="Some date in the future"
    picker-only
    popover
    :min-date="new Date()"
  />
</template>
