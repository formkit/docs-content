<!-- %partial%::html:: -->
<template>
  <h1 class="text-2xl font-bold mb-4">Carbon Sequestration Grant</h1>

  <FormKit type="form" #default="{ value }">
    <div class="form-body">
      <h3 class="text-lg font-bold mb-2">Contact info</h3>
      <FormKit
        type="email"
        label="*Email address"
        validation="required|email"
      />

      <h3 class="text-lg font-bold mb-2">Organization info</h3>
      <FormKit
        type="text"
        label="*Organization name"
        validation="required|length:3"
      />

      <h3 class="text-lg font-bold mb-2">Application</h3>
      <FormKit
        type="textarea"
        label="*How will you use the money?"
        validation="required|length:20,500"
      />

      <details>
        <summary>Form data</summary>
        <pre wrap>{{ value }}</pre>
      </details>
    </div>
  </FormKit>
</template>
<!-- %partial%::html:: -->

<style scoped>
/* Styles imported for brevity */
/* CSS for multi-step forms is not included in the default Genesis theme.
   styles were custom-written for this example and you will need to provide
   your own. */
@import 'https://cdn.formk.it/web-assets/multistep-form.css';
</style>
