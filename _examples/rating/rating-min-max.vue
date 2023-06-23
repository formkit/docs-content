<template>
  <!--
  FormKit forms auto-collect values of children inputs.
  Wrap the example in a form so we can display the form values.
-->
  <FormKit type="form" #default="{ value }" :actions="false">
    <!-- %partial%::html:: -->
    <FormKit
      type="rating"
      :min="1"
      :max="10"
      label="Rate the durability of the Vitamix 5200 Blender"
      name="ratingVitamix"
      id="rating-max"
    />
    <!-- %partial%::html:: -->
    <pre wrap>{{ value }}</pre>
  </FormKit>
</template>

<style>
#rating-max_inner {
  width: 270px !important;
}
</style>
