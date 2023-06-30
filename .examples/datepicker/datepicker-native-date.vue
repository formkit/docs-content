<template>
  <FormKit type="form" #default="{ value }" :actions="false">
    <FormKit
      type="datepicker"
      name="closing_date"
      label="Closing date"
      placeholder="Date of closing"
      help="When did you close on your home?"
      overlay
      value-format="MMM DD YYYY"
      value-locale="en"
      :value="new Date('2019-02-28')"
    />
    <pre wrap>{{ value }}</pre>
  </FormKit>
</template>
