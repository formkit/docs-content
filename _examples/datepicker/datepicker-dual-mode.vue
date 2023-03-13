<template>
  <FormKit type="form" #default="{ value }" :actions="false">
    <FormKit
      type="datepicker"
      name="date"
      label="Meeting date"
      :format="{ date: 'short' }"
      help="What date should we schedule the meeting."
    />
    <pre wrap>{{ value }}</pre>
  </FormKit>
</template>
