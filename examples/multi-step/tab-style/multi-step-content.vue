<template>
  <FormKit type="step" name="stepOne">
    <FormKit type="text" label="Name" validation="required" />
  </FormKit>
  <FormKit type="step" name="stepTwo">
    <FormKit type="textarea" label="Your story" validation="required" />
  </FormKit>
  <FormKit type="step" name="stepThree">
    <FormKit type="textarea" label="Something else" validation="required" />
  </FormKit>
</template>
