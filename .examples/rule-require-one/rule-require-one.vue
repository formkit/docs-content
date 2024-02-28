<template>
  <!-- %partial%::html:: -->
  <FormKit type="group">
    <FormKit
      label="Meat"
      type="text"
      name="meats"
      validation="require_one:veggies"
      validation-visibility="live"
    />
    <FormKit
      label="Veggies"
      type="checkbox"
      name="veggies"
      validation="require_one:meats"
      validation-visibility="live"
      :options="[
        { label: 'Mushroom', value: 3 },
        { label: 'Onion', value: 4 },
      ]"
    />
  </FormKit>
  <!-- %partial%::html:: -->
</template>
