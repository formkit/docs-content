<script setup>
import countries from './countries.js'

function getFlagEmoji(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split('')
    .map((char) => 127397 + char.charCodeAt())
  return String.fromCodePoint(...codePoints)
}
</script>

<template>
<FormKit
  type="form"
  #default="{ value }"
  :actions="false"
>
  <FormKit
    type="autocomplete"
    name="autocomplete"
    label="Search for a country"
    :options="countries"
    value="US"
    popover
    selection-appearance="option"
  >
    <!--OPTION SLOT-->
    <template #option="{ option, classes }">
      <div :class="classes.option">
        <span class="decorator">
          {{ getFlagEmoji(option.value) }}
        </span>
        <span>
          {{ option.label }}
        </span>
      </div>
    </template>
    <!--/OPTION SLOT-->
  </FormKit>
  </FormKit>
</template>

<style>
.decorator {
  margin-right: 10px;
}
</style>
