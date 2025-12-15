<template>
  <FormKit type="form" #default="{ value }" :actions="false">
    <!-- %partial% -->
    <FormKit
      type="colorpicker"
      name="color"
      value="rgba(255, 0, 0, 0.5)"
      alpha="false"
      popover
      value-format="rgba"
    />
    <!-- %partial% -->

    <pre wrap>{{ value }}</pre>
  </FormKit>
</template>
