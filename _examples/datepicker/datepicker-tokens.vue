<template>
  <FormKit type="form" #default="{ value }" :actions="false">
    <FormKit
      type="datepicker"
      name="launch"
      label="Product launch date"
      format="MMMM D"
      :min-date="new Date()"
      overlay
      popover
    />
    <pre wrap>{{ value }}</pre>
  </FormKit>
</template>
