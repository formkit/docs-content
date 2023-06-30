<template>
  <FormKit type="form" #default="{ value }" :actions="false">
    <FormKit
      type="datepicker"
      name="date"
      label="Appointment date"
      placeholder="Select a date"
      help="Select a date to book your appointment."
      overlay
    />
    <pre wrap>{{ value }}</pre>
  </FormKit>
</template>
