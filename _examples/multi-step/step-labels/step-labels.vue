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

    <FormKit type="step" name="stepTwo" previous-label="Go back to previous step">
      <FormKit type="textarea" label="Your story" />
    </FormKit>
    <!-- %partial% -->
  </FormKit>
</template>
