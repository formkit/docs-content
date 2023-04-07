<template>
  <FormKit type="form" #default="{ value }" :actions="false">
    <FormKit
      type="datepicker"
      name="birthday"
      label="Birthday"
      help="Select your birthday"
      placeholder="Select a birthday"
      format="full"
      :sequence="['year', 'month', 'day']"
      picker-only
    />
    <pre wrap>{{ value }}</pre>
  </FormKit>
</template>
