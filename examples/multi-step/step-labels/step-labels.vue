<template>
  <FormKit type="multi-step">
    <!-- %partial% -->
    <FormKit
      type="step"
      name="stepOne"
      label="My Custom Label"
      next-label="Continue to next step"
    >
      <FormKit type="text" label="Name" />
    </FormKit>

    <FormKit 
      type="step" 
      name="stepTwo" 
      prev-label="Go back to previous step"
    >
      <FormKit type="textarea" label="Your story" />
    </FormKit>
    <!-- %partial% -->
  </FormKit>
</template>

<style>
/* only used for playground support. In your project you should 
import directly from the @formkit/addons package */
@import 'https://cdn.jsdelivr.net/npm/@formkit/addons@dev/dist/css/multistep.css';
</style>
