<template>
  <!-- %partial%::html:: -->
  <FormKit
    type="mask"
    name="promo_code"
    mask="zzz-#### ####"
    :tokens="{
      z: {
        type: 'char',
        token: 'z',
        pattern: /[A-Za-z0-9]/,
        placeholder: '_',
        selectDirection: 'left',
      },
    }"
    value="a6d-7789 4398"
    label="Promo code"
    help="Enter a promo code in the format: fkt-1234 5678"
  />
  <!-- %partial%::html:: -->
</template>
