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
  label="Did we provide good service?"
/>
<!-- %partial%::html:: -->
  <pre wrap>{{ value }}</pre>
</FormKit>
</template>
