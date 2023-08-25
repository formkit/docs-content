<script setup>
import carBrands from './car-brands.js'
</script>

<template>
  <FormKit
    type="autocomplete"
    name="autocomplete"
    label="Search and select a car brand"
    placeholder="Example: Toyota"
    :options="carBrands"
    selection-appearance="option"
    value="audi"
  >
    <!--SELECTION SLOT-->
      <template #selection="{ selections, handlers, classes }">
        <div
          v-for="option in selections"
          :key="option.value"
          :class="classes.selection"
        >
          <div :class="classes.option">
            <img
              :src="option.logo"
              :alt="option.label + ' logo'"
            />
            <span>
              {{ option.label }}
            </span>
          </div>
        </div>
        <button
          @click.prevent="handlers.removeSelection()()"
          tabindex="-1"
          type="button"
          aria-controls="input_1"
          class="formkit-remove-selection"
        >
          <span class="formkit-close-icon formkit-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 16">
              <path
                d="M10,12.5c-.13,0-.26-.05-.35-.15L1.65,4.35c-.2-.2-.2-.51,0-.71,.2-.2,.51-.2,.71,0L10.35,11.65c.2,.2,.2,.51,0,.71-.1,.1-.23,.15-.35,.15Z"
                fill="currentColor"
              ></path>
              <path
                d="M2,12.5c-.13,0-.26-.05-.35-.15-.2-.2-.2-.51,0-.71L9.65,3.65c.2-.2,.51-.2,.71,0,.2,.2,.2,.51,0,.71L2.35,12.35c-.1,.1-.23,.15-.35,.15Z"
                fill="currentColor"
              ></path></svg>
          </span>
        </button>
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
<<<<<<< HEAD
    <template #selection="{ selections, handlers }">
      <div
        v-for="option in selections"
        :key="option.value"
        class="formkit-selection"
      >
        <div class="formkit-option">
          <img :src="option.logo" :alt="option.label + ' logo'" />
          <span>
            {{ option.label }}
          </span>
=======
      <template #selection="{ option }">
        <div class="formkit-selection">
          <div class="formkit-option">
            <img
              :src="option.logo"
              :alt="option.label + ' logo'"
            />
            <span>
              {{ option.label }}
            </span>
          </div>
>>>>>>> c50aa43 (Fixes autocomplete selection slot example.)
        </div>
        <button
          @click.prevent="handlers.removeSelection(option)()"
          tabindex="-1"
          type="button"
          aria-controls="input_1"
          class="formkit-remove-selection"
        >
          <span class="formkit-close-icon formkit-icon"
            ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 16">
              <path
                d="M10,12.5c-.13,0-.26-.05-.35-.15L1.65,4.35c-.2-.2-.2-.51,0-.71,.2-.2,.51-.2,.71,0L10.35,11.65c.2,.2,.2,.51,0,.71-.1,.1-.23,.15-.35,.15Z"
                fill="currentColor"
              ></path>
              <path
                d="M2,12.5c-.13,0-.26-.05-.35-.15-.2-.2-.2-.51,0-.71L9.65,3.65c.2-.2,.51-.2,.71,0,.2,.2,.2,.51,0,.71L2.35,12.35c-.1,.1-.23,.15-.35,.15Z"
                fill="currentColor"
              ></path></svg
          ></span>
        </button>
      </div>
    </template>
    <!--/SELECTION SLOT-->
  </FormKit>
</template>

<style>
.formkit-option {
  display: flex;
  align-items: center;
}

.formkit-option img {
  width: 20px;
  height: 20px;
  margin-right: 10px;
}
</style>
