<template>
  <h2>Floating labels off by default.</h2>
  <FormKit type="text" label="Floating Text Label" :floating-label="true" />
  <FormKit
    type="textarea"
    label="Floating Textarea Label"
    :floating-label="true"
  />
  <FormKit type="text" label="I have a standard label" />
</template>
