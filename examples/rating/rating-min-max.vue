<template>
<FormKit
  type="form"
  #default="{ value }"
  :actions="false"
>
<!-- %partial%::html:: -->
<FormKit
  type="rating"
  min="1"
  max="10"
  name="rating"
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