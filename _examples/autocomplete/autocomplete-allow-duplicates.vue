<template>
  <FormKit type="form" #default="{ value }" :actions="false">
    <FormKit
      type="autocomplete"
      name="toppings"
      label="Pizza toppings (doubles welcome)"
      :options="['Pepperoni', 'Mushrooms', 'Extra cheese', 'Olives', 'Jalapeños']"
      multiple
      selection-appearance="tags"
      allow-duplicates
      :value="['Extra cheese', 'Extra cheese']"
      popover
    />
    <pre wrap>{{ value }}</pre>
  </FormKit>
</template>
