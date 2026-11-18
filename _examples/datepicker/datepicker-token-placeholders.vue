<template>
  <FormKit type="form" #default="{ value }" :actions="false">
    <FormKit
      type="datepicker"
      name="geburtsdatum"
      label="Geburtsdatum"
      format="DD.MM.YYYY"
      :token-placeholders="{ DD: 'TT', YYYY: 'JJJJ' }"
      popover
    />
    <pre wrap>{{ value }}</pre>
  </FormKit>
</template>
