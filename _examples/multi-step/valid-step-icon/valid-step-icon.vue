<template>
  <!-- %partial% -->
  <!-- on multi-step we set all icons to 'star' -->
  <FormKit type="multi-step" valid-step-icon="star" tab-style="progress">
    <FormKit type="step" name="stepOne">
      <FormKit type="text" label="Name" />
    </FormKit>
    <FormKit type="step" name="stepTwo">
      <FormKit type="textarea" label="Your story" />
    </FormKit>
    <!-- on this step we set the icon to 'submit' -->
    <FormKit type="step" valid-step-icon="submit" name="stepThree">
      <FormKit type="textarea" label="Something else" />
    </FormKit>
  </FormKit>
  <!-- %partial% -->
</template>
