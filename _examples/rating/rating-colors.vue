<template>
  <!--
  FormKit forms auto-collect values of children inputs.
  Wrap the example in a form so we can display the form values.
-->
  <FormKit type="form" #default="{ value }" :actions="false">
    <!-- %partial%::html:: -->
    <FormKit
      type="rating"
      off-color="#AAAAAA"
      on-color="#DA012D"
      rating-icon="heart"
      label="How much love do you have for FormKit?"
      name="love"
    />
    <!-- %partial%::html:: -->
    <pre wrap>{{ value }}</pre>
  </FormKit>
</template>
