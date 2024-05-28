<template>
  <!-- %partial%::html:: -->
  <FormKit name="social" type="list">
    <template #default="{ state: { valid } }">
      <h2 class="text-2xl font-bold mb-2">Social media handles</h2>
      <p class="text-base mb-4">
        Please provide a your twitter and facebook social media profiles.
      </p>
      <div v-if="!valid" class="not-valid">
        Your social profile is not complete!
      </div>
      <div v-else class="valid">It all looks good 👍</div>
      <FormKit
        label="Twitter handle"
        placeholder="@your_profile"
        validation="required|starts_with:@"
        help="Enter your twitter profile handle"
      />
      <FormKit
        label="Facebook profile"
        placeholder="https://facebook.com/your-profile"
        validation="required|starts_with:https://www.facebook.com/"
        help="Enter the URL to your facebook profile."
      />
    </template>
  </FormKit>
  <!-- %partial%::html:: -->
</template>

<style scoped>
.valid,
.not-valid {
  padding: 0.5em;
  color: white;
  margin: 1em 0;
  border-radius: 5px;
}
.not-valid {
  background-color: darkred;
}
.valid {
  background-color: green;
}
</style>
