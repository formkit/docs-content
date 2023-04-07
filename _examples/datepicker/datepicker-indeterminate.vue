<template>
  <FormKit type="form" #default="{ value }" :actions="false">
    <FormKit
      type="datepicker"
      name="alarm"
      label="Set an alarm"
      help="When should your alarm ring?"
      :format="{ time: 'short' }"
      value-format="HH:mm"
      :sequence="['time']"
      :sections-schema="{
        // disable the header since we don’t need it.
        panelHeader: {
          $el: null,
          children: [],
        },
      }"
      overlay
    />
    <pre wrap>{{ value }}</pre>
  </FormKit>
</template>
