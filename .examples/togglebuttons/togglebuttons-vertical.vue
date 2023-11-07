<template>
  <!--
    FormKit forms auto-collect values of children inputs.
    Wrap the example in a form so we can display the form values.
  -->
  <FormKit
    type="form"
    :actions="false"
  >
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@formkit/pro@dev/genesis.min.css" />
    <!-- %partial%::html:: -->
      <FormKit
        type="togglebuttons"
        name="pizza_toppings"
        label="Pizza Toppings"
        :options="['Pepperoni', 'Sausage', 'Mushroom', 'Black Olives']"
        vertical
      />
    <!-- %partial%::html:: -->
  </FormKit>
</template>
