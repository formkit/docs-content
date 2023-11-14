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
      inner-class="!w-[250px]"
      on-item-wrapper-class="!basis-[25px]"
      off-item-wrapper-class="!basis-[25px]"
    />
    <!-- %partial%::html:: -->
    <pre wrap>{{ value }}</pre>
  </FormKit>
</template>
