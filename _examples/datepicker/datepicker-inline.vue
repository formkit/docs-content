<template>
  <FormKit type="form" #default="{ value }" :actions="false">
    <FormKit
      type="datepicker"
      name="launch_date"
      label="Launch date"
      help="The calendar is always open — no popup."
      inline
    />
    <pre wrap>{{ value }}</pre>
  </FormKit>
</template>
