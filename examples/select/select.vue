<template>
  <!-- %partial%::html:: -->
  <FormKit
    type="select"
    label="What planet is the largest?"
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
    value="jupiter"
  />
  <!-- %partial%::html:: -->
</template>
