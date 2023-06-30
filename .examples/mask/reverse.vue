<template>
<!-- %partial%::html:: -->
<FormKit type="form" :actions="false" #default="{ value }">
  <FormKit
    type="mask"
    reverse
    prefix="€"
    name="bid"
    mask="{#,##|repeat}#.##"
    label="Bid"
    show-mask="false"
    allow-incomplete="true"
    help="Enter your bid for the art piece."
  />
  <pre wrap>{{ value }}</pre>  
</FormKit>
<!-- %partial%::html:: -->
</template>
