<template>
  <FormKit type="group">
    <!-- %partial%::html:: -->
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
    <FormKit
      type="text"
      label="Phone Number"
      placeholder="xxx-xxx-xxxx"
      :validation="[
        ['required'],
        ['matches', /^\d{3}-\d{3}-\d{4}$/]
      ]"
      validation-behavior="live"
      :validation-messages="{ matches: 'Phone number must be formatted: xxx-xxx-xxxx' }"
    />
    <!-- %partial% -->
  </FormKit>
</template>
