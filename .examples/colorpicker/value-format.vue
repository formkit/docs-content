<template>
  <FormKit type="form" #default="{ value }" :actions="false">
    <!-- %partial% -->
    <FormKit
      type="colorpicker"
      name="color"
      value="hsla(324, 62%, 58%, 1)"
      format="hex"
      value-format="rgba"
    />
    <!-- %partial% -->

    <pre wrap>{{ value }}</pre>
  </FormKit>
</template>
