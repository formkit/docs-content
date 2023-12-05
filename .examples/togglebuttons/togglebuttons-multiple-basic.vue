<script setup>
import { ref } from 'vue'
const value = ref(false)
</script>

<template>
  <!--
    FormKit forms auto-collect values of children inputs.
    Wrap the example in a form so we can display the form values.
  -->
  <FormKit type="form" #default="{ value }" :actions="false">
    <!-- %partial%::html:: -->
    <FormKit
      type="togglebuttons"
      name="transportation"
      label="Travel Preference"
      :options="['Car', 'Airplane', 'Train', 'Hoverboard']"
    />

    <FormKit
      type="togglebuttons"
      name="shirt_size"
      label="T-shirt Size"
      :options="{
        sm: 'Small',
        md: 'Medium',
        lg: 'Large',
        xl: 'X-Large',
      }"
    />

    <FormKit
      type="togglebuttons"
      name="pizza_toppings"
      label="Pizza Toppings"
      :options="[
        'Pepperoni',
        'Sausage',
        'Mushrooms',
        {
          value: 'Pineapple',
          label: 'Pineapple',
          disabled: true,
          help: 'Sorry, pineapple doesn\'t belong on pizza',
        },
      ]"
    />
    <!-- %partial%::html:: -->
    <pre wrap>{{ value }}</pre>
  </FormKit>
</template>
