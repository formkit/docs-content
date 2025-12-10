<template>
  <!-- %partial% -->
  <!-- 🪄 grouped inputs -->
  <FormKit type="group" name="address">
    <div class="flex gap-2">
      <!-- 🤯 no data modeling -->
      <FormKit label="Street Address" name="street" />
      <FormKit label="Unit" name="unit" />
    </div>
    <div class="flex gap-2">
      <FormKit label="City" name="city" />
      <FormKit type="autocomplete" name="state" :options="states" />
      <FormKit label="Zip Code" name="zip" />
    </div>
  </FormKit>
  <!-- %partial% -->
</template>
