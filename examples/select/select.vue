<template>
  <!-- %partial%::html:: -->
  <FormKit
    type="select"
    label="What planet is the largest?"
    placeholder="Select a planet"
    name="planet"
    :options="{
      mercury: 'Mercury',
      venus: 'Venus',
      earth: 'Earth',
      mars: 'Mars',
      jupiter: 'Jupiter',
      saturn: 'Saturn',
      uranus: 'Uranus',
      neptune: 'Neptune',
    }"
    validation="required|is:jupiter"
    validation-behavior="dirty"
    :validation-messages="{
      is: 'Nope! Jupiter is the largest planet'
    }"
  />
  <!-- %partial%::html:: -->
</template>
