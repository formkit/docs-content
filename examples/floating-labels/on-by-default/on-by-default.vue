<template>
  <h2>Floating labels on by default due to plugin option.</h2>
  <FormKit type="text" label="Floating Text Label" />
  <FormKit type="textarea" label="Floating Textarea Label" />
  <FormKit
    type="text"
    label="I have a standard label"
    :floating-label="false"
  />
</template>
