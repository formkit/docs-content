<template>
  <FormKit 
    type="text" 
    label="Floating Text Label" 
  />
  <FormKit 
    type="textarea" 
    label="Floating Textarea Label" 
  />
  <FormKit
    type="text"
    label="I have a standard label via prop"
    :floating-label="false"
  />
</template>
