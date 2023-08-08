<template>
  <!-- %partial% -->
  <FormKit
    type="barcode"
    label="UPC-A Scanner"
    help="I only scan UPC-A barcodes"
    :formats="['UPC_A']"
  />
  <FormKit
    type="barcode"
    label="QR Code Scanner"
    help="I only scan QR codes"
    :formats="['QR_CODE']"
  />
  <!-- %partial% -->
</template>

<style>
/* this import is only neccessary for the playground */
@import 'https://cdn.jsdelivr.net/npm/@formkit/barcode@latest/dist/assets/barcodeReader.css';
</style>
