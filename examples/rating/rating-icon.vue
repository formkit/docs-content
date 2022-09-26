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
  rating-icon="android"
  name="ratingAmongUs"
  label="Rate the Android video game: Among Us"
/>
<!-- %partial%::html:: -->
  <pre wrap>{{ value }}</pre>
</FormKit>
</template>
