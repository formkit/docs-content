<template>
  <FormKit type="form" #default="{ value }" :actions="false">
    <FormKit
      type="datepicker"
      name="conference_date"
      label="Conference date"
      placeholder="Select a date"
      help="When are you hosting your next conference?"
      popover
      picker-only
    />
    <pre wrap>{{ value }}</pre>
  </FormKit>
</template>
