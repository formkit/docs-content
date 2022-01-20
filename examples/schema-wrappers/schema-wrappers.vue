<template>
  <!-- %partial%::html:: -->
  <FormKit
    type="checkbox"
    :schema="{
      outer: { $el: null },
      inner: { $el: null },
      messages: { $el: null },
      message: { $el: 'div' },
    }"
    validation="+accepted"
    validation-visibility="live"
    label="Terms and conditions"
    help="Do you accept our terms and conditions?"
  />
  <!-- Remove the "inner" property of the schema object
      and see the inner wrapper reappear. -->
  <!-- %partial%::html:: -->
</template>
