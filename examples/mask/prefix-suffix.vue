<template>
  <!-- %partial%::html:: -->
  <FormKit
    type="mask"
    name="list_price"
    prefix="€"
    suffix=".00"
    mask="{#,##|repeat}#"
    label="List Price"
    help="Only whole Euros are allowed."
  />
  <!-- %partial%::html:: -->
</template>
