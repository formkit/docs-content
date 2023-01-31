<template>
  <!-- %partial% -->
  <!-- we'll get rid of the default form actions -->
  <FormKit type="form" :actions="false">
    <FormKit type="multi-step" tab-style="tab">
      <FormKit type="step" name="personalInfo">
        <FormKit type="text" label="Name" prefix-icon="avatarMan" />
      </FormKit>

      <FormKit type="step" name="references">
        <FormKit
          type="textarea"
          label="Please supply contact information for 2 references"
          validation="required"
        />
        <!-- 
        normally there is no stepNext section rendered
        on the last step of a multi-step. But we can
        supply our own.
         -->
        <template #stepNext>
          <FormKit type="submit" />
        </template>
      </FormKit>
    </FormKit>
  </FormKit>
  <!-- %partial% -->
</template>

<style>
/* only used for playground support. In your project you should 
import directly from the @formkit/addons package */
@import 'https://cdn.jsdelivr.net/npm/@formkit/addons@dev/dist/css/multistep.css';
</style>
