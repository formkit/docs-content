<template>
  <FormKit
    type="date"
    label="Select a date before or equal to 2020-01-01"
    validation="date_before_or_equal:2020-01-01"
    validation-label="Date"
    help="The selected date must be before 2020-01-01"
  />
</template>
