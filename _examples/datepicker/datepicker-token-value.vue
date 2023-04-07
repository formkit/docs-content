<template>
  <FormKit type="form" #default="{ value }" :actions="false">
    <FormKit
      type="datepicker"
      name="sig_date"
      label="Signature date"
      placeholder="Date of signature"
      overlay
      value-format="\D\ay D of MMMM in t\he ye\ar YYYY"
    />
    <pre wrap>{{ value }}</pre>
  </FormKit>
</template>
