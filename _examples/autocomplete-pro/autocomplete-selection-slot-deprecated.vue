<script setup>
import countries from './countries.js'

function getFlagEmoji(countryCode) {
  if (!countryCode) return
  const codePoints = countryCode
    .toUpperCase()
    .split('')
    .map((char) => 127397 + char.charCodeAt())
  return String.fromCodePoint(...codePoints)
}
</script>

<template>
  <FormKit type="form" #default="{ value }" :actions="false">
    <!-- %partial% -->
    <FormKit
      type="autocomplete"
      name="autocomplete"
      label="Search and select a country"
      :options="countries"
      value="US"
      popover
      selection-appearance="option"
    >
      <!--SELECTION SLOT-->
      <template #selection="{ selections, handlers }">
        <div
          v-for="option in selections"
          :key="option.value"
          class="formkit-selection"
        >
          <div class="formkit-option">
            <span class="decorator">
              {{ getFlagEmoji(option.value) }}
            </span>
            <span>
              {{ option.label }}
            </span>
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
    <!-- %partial% -->
    <pre wrap>{{ value }}</pre>
  </FormKit>
</template>

<style>
.decorator {
  margin-right: 10px;
}
</style>
