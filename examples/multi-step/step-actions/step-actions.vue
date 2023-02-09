<template>
  <!-- %partial% -->
  <!-- we'll get rid of the default form actions -->
  <FormKit type="form" :actions="false">
    <FormKit type="multi-step" tab-style="tab">
      <FormKit type="step" name="personalInfo">
        <FormKit type="text" label="Name" prefix-icon="avatarMan" />

        <template #stepNext="{ handlers, node }">
          <!-- incrementStep returns a callable function -->
          <FormKit
            type="button"
            @click="handlers.incrementStep(1, node.context)()"
            label="Custom Next"
            data-next="true"
          />
        </template>
      </FormKit>

      <FormKit type="step" name="references">
        <FormKit
          type="textarea"
          label="Please supply contact information for 2 references"
          validation="required"
        />

        <template #stepPrevious="{ handlers, node }">
          <!-- incrementStep returns a callable function -->
          <FormKit
            type="button"
            @click="handlers.incrementStep(-1, node.context)()"
            label="Custom Previous"
          />
        </template>
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
