<template>
  <FormKit type="form" #default="{ value }" :actions="false">
    <FormKit
      type="datepicker"
      name="cater_date"
      label="Service date"
      placeholder="Select a date"
      help="When would you like to request catering service?"
      overlay
      :value-format="{ date: 'long' }"
      value-locale="en-US"
    />
    <pre wrap>{{ value }}</pre>
  </FormKit>
</template>
