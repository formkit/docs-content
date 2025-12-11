<template>
  <!-- %partial% -->
  <FormKit type="group" name="account">
    <FormKit
      type="text"
      name="name"
      label="Full Name"
      validation="required"
    />
    <FormKit
      type="email"
      name="email"
      label="Email Address"
      validation="required|email"
    />
    <FormKit
      type="textarea"
      name="bio"
      label="Bio"
      :rows="3"
    />
    <FormKit
      type="checkbox"
      name="proSubscriber"
      label="FormKit Pro subscriber"
    />
  </FormKit>
  <!-- %partial% -->
</template>
