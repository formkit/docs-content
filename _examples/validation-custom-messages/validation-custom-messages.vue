<template>
  <!-- %partial%::html:: -->
  <FormKit
    label="NBA G.O.A.T?"
    placeholder="Jordan, LeBron, Curry etc..."
    validation="is:Jordan,jordan"
    validation-visibility="live"
    :validation-messages="{
      is: 'The correct answer is: Jordan.',
    }"
  />
  <!-- %partial%::html:: -->
</template>
