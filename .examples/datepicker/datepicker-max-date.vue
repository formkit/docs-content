<template>
  <FormKit
    type="datepicker"
    name="pickup"
    label="A past date"
    placeholder="Some date in the past"
    picker-only
    popover
    :max-date="new Date()"
  />
</template>
