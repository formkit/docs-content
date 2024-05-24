<template>
  <FormKit type="form" #default="{ value }" :actions="false">
    <FormKit
      type="datepicker"
      name="closing_date"
      label="Closing date"
      placeholder="Date of closing"
      help="When did you close on your home?"
      overlay
      popover
      value-format="MMM DD YYYY"
      value-locale="en"
      value="Feb 28 2019"
    />
    <pre wrap>{{ value }}</pre>
  </FormKit>
</template>
