<template>
  <FormKit type="form" #default="{ value }" :actions="false">
    <!-- %partial%::html:: -->
    <FormKit
      type="slider"
      name="slider"
      label="Multiple Values"
      :value="[50, 350]"
      min="0"
      max="500"
      help="I now render two control handles"
    />
    <!-- %partial%::html:: -->
    <pre wrap>{{ value.slider }}</pre>
  </FormKit>
</template>
