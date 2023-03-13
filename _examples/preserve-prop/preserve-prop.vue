<template>
  <!-- %partial%::html:: -->
  <FormKit type="form" #default="{ value }" :actions="false">
    <FormKit
      type="checkbox"
      :value="true"
      name="beverage"
      label="Include a beverage?"
      help="Select a beverage, then uncheck me to see if data is preserved."
    />
    <!-- Try adding/removing preserve -->
    <FormKit
      v-if="value.beverage"
      preserve
      type="radio"
      name="beverage_type"
      :options="['Tea', 'Coffee']"
      label="Beverage"
      help="Select a beverage please."
    />

    <pre wrap>{{ value }}</pre>
  </FormKit>
  <!-- %partial%::html:: -->
</template>
