<template>
  <FormKit
    type="checkbox"
    :schema="{
      outer: { $el: null },
      inner: { $el: null },
      messages: { $el: null },
      message: { $el: 'div' },
    }"
    validation="+accepted"
    validation-behavior="live"
    label="Terms and conditions"
    help="Do you accept our terms and conditions?"
  />
</template>
