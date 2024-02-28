<template>
  <FormKit type="form" #default="{ value }" :actions="false">
    <FormKit
      type="datepicker"
      name="vacation_date"
      label="Time off request"
      help="Please select the date you would like to start your vacation."
      placeholder="Select a date"
      :value="new Date()"
      popover
      clearable
    />
    <pre wrap>{{ value }}</pre>
  </FormKit>
</template>
