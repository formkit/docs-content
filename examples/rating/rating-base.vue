<template>
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
