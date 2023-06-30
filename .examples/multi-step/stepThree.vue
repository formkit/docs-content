<template>
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
</template>
