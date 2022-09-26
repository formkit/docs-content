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
  name="rating"
  value="3"
  label="Rate our t-rex exhibit!"
>
  <template #offItem>
    <img src="https://cdn.formk.it/example-assets/t-rex-outline-s.png" />
  </template>
  <template #onItem>
    <img src="https://cdn.formk.it/example-assets/dino-s.png" />
  </template>
</FormKit>
<!-- %partial%::html:: -->
<pre wrap>{{ value }}</pre>
</FormKit>
</template>
