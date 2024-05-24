<template>
  <FormKit type="form" #default="{ value }" :actions="false">
    <FormKit
      type="datepicker"
      name="date"
      label="Reservation time"
      help="Select a date and time to reserve your scuba equipment."
      :format="{ date: 'short', time: 'short' }"
      :sequence="['day', 'time']"
      overlay
      popover
    />
    <pre wrap>{{ value }}</pre>
  </FormKit>
</template>
