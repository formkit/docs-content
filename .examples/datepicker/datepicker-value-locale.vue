<template>
  <FormKit type="form" #default="{ value }" :actions="false">
    <FormKit
      type="datepicker"
      name="arrival"
      label="Kyiv arrival time"
      help="When will you be arriving in Kyiv?"
      :sequence="['day', 'time']"
      :format="{ date: 'long', time: 'short' }"
      :value-format="{ date: 'long', time: 'short' }"
      value-locale="uk"
      value="14 березня 2023 р. о 17:02"
      popover
    />
    <pre wrap>{{ value }}</pre>
  </FormKit>
</template>
