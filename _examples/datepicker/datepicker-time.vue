<template>
  <FormKit type="form" #default="{ value }" :actions="false">
    <FormKit
      type="datepicker"
      name="reservation"
      label="Dinner reservation"
      help="Select a time for your dinner reservation."
      placeholder="Select a time"
      format="MMM D \at hh:mm A"
      :sequence="['day', 'time']"
      picker-only
    />
    <pre wrap>{{ value }}</pre>
  </FormKit>
</template>
