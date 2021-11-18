<template>
<!-- %partial%::html:: -->
<FormKit
  type="checkbox"
  :options="[
	'Pepperoni',
	'Sausage',
	'Olives',
	'Feta',
	'Mushrooms'
  ]"
  label="Select up to 3 pizza toppings"
  validation="max:3"
/>
<!-- %partial%::html:: -->
</template>
