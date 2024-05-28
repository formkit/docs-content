<script setup>
import carBrands from '@content/_examples/_data/car-brands.js'
</script>

<template>
  <FormKit
    type="autocomplete"
    name="autocomplete"
    label="Search and select a car brand"
    placeholder="Example: Toyota"
    :options="carBrands"
    popover
    selection-appearance="option"
    value="audi"
  >
    <!--SELECTION SLOT-->
    <template #selection="{ option, classes }">
      <div :class="classes.selection">
        <div :class="`${classes.option} flex items-center`">
          <img
            :src="option.logo"
            :alt="option.label + ' logo'"
            class="w-10 h-10 p-2"
          />
          <span>
            {{ option.label }}
          </span>
        </div>
      </div>
    </template>
    <!--/SELECTION SLOT-->
  </FormKit>
  <FormKit
    type="autocomplete"
    name="autocomplete"
    label="Search and select a car brand"
    placeholder="Example: Toyota"
    :options="carBrands"
    selection-appearance="option"
    multiple
    :value="['toyota', 'honda']"
  >
    <!--SELECTION SLOT-->
    <template #selection="{ option, classes }">
      <div :class="`${classes.selection} !p-0`">
        <div :class="`${classes.option} flex items-center`">
          <img
            :src="option.logo"
            :alt="option.label + ' logo'"
            class="w-10 h-10 p-2"
          />
          <span>
            {{ option.label }}
          </span>
        </div>
      </div>
    </template>
    <!--/SELECTION SLOT-->
  </FormKit>
</template>

<style scoped>
.formkit-option {
  display: flex;
  align-items: center;
}
</style>
