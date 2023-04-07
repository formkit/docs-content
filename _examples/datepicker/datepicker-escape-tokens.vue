<template>
  <FormKit type="form" #default="{ value }" :actions="false">
    <FormKit
      type="datepicker"
      name="checkin"
      format="C\heckin: MMM D, YYYY"
      :min-date="new Date()"
      overlay
    />
    <pre wrap>{{ value }}</pre>
  </FormKit>
</template>
