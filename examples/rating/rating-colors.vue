<template>
<!--
  FormKit forms auto-collect values of children inputs.
  Wrap the example in a form so we can display the form values.
-->
<FormKit
  type="form"
  #default="{ value }"
  :actions="false"
>
<!-- %partial%::html:: -->
<FormKit
  type="rating"
  off-color="black"
  on-color="#A3C439"
  rating-icon="dollar"
  label="How expensive was the meal?"
  name="priceCategory"
/>
<!-- %partial%::html:: -->
  <pre wrap>{{ value }}</pre>
</FormKit>
</template>
