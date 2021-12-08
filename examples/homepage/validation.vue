<template>
  <FormKit type="group">
    <!-- %partial%::html:: -->
    <FormKit
      type="text"
      label="Username"
      placeholder="FormKitFan9000"
      validation="required|length:5,20|alphanumeric"
      validation-behavior="live"
      autocomplete="off"
    />
    <div class="double">
      <FormKit
        type="password"
        name="password"
        label="Password"
        validation="required"
        validation-behavior="live"
      />
      <FormKit
        type="password"
        name="password_confirm"
        label="Confirm password"
        validation="required|confirm"
        validation-behavior="live"
        validation-label="Password confirmation"
      />
    </div>
    <FormKit
      type="text"
      name="phone"
      label="Phone Number"
      placeholder="xxx-xxx-xxxx"
      :validation="[
        ['required'],
        ['matches', /^\d{3}-\d{3}-\d{4}$/]
      ]"
      validation-behavior="live"
      :validation-messages="{ matches: 'Phone number must be formatted: xxx-xxx-xxxx' }"
    />
    <FormKit
      type="text"
      label="Twitter Handle"
      placeholder="@username"
      validation-behavior="live"
      validation="required|starts_with:@"
    />
    <!-- %partial% -->
  </FormKit>
</template>

<style>
.double {
  display: flex;
}
.double .formkit-outer {
  margin-right: 1em;
}
</style>
