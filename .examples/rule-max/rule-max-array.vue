<template>
  <!-- %partial%::html:: -->
  <FormKit
    type="checkbox"
    :options="['Pepperoni', 'Sausage', 'Olives', 'Feta', 'Mushrooms']"
    label="Pizza toppings"
    help="Select up to three of your favorite toppings."
    validation="max:3"
  />
  <!-- %partial%::html:: -->
</template>
