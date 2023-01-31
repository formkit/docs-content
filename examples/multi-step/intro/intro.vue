<!-- %partial% -->
<template>
  <FormKit type="form" :actions="false">
    <!-- try changing tab-style to 'progress' -->
    <FormKit 
      type="multi-step"
      tab-style="tab"
    >
      <FormKit type="step" name="personalInfo">
        <FormKit
          type="text"
          label="Name"
          prefix-icon="avatarMan"
          validation="required"
        />
        <FormKit
          type="email"
          label="Email"
          prefix-icon="email"
          validation="required|email"
        />
        <FormKit
          type="mask"
          name="phone"
          mask="(###) ###-####"
          label="Phone"
          prefix-icon="telephone"
          validation="required"
        />
      </FormKit>

      <FormKit type="step" name="references">
        <FormKit
          type="textarea"
          label="Please supply contact information for 2 references"
          validation="required"
        />
      </FormKit>

      <FormKit type="step" name="Supplemental">
        <FormKit
          type="textarea"
          label="Why do you want to work here?"
          validation="required"
        />
        <FormKit
          type="radio"
          label="How did you hear about us"
          validation="required"
          :options="[
            { label: 'Google', value: 'google' },
            { label: 'Facebook', value: 'facebook' },
            { label: 'Twitter', value: 'twitter' },
            { label: 'Friend', value: 'friend' },
          ]"
        />

        <!-- example of providing a submit button on the last step -->
        <template #stepNext>
          <FormKit type="submit" />
        </template>
      </FormKit> 
    </FormKit><!-- multi-step --> 
  </FormKit><!-- form -->
</template>
<!-- %partial% -->

<style>
/* only used for playground support. In your project you should 
import directly from the @formkit/addons package */
@import 'https://cdn.jsdelivr.net/npm/@formkit/addons@dev/dist/css/multistep.css';
</style>
