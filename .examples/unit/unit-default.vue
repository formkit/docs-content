<script setup>
const unitOptions = [
  'acre',
  'bit',
  'byte',
  'celsius',
  'centimeter',
  'day',
  'degree',
  'fahrenheit',
  'fluid-ounce',
  'foot',
  'gallon',
  'gigabit',
  'gigabyte',
  'gram',
  'hectare',
  'hour',
  'inch',
  'kilobit',
  'kilobyte',
  'kilogram',
  'kilometer',
  'liter',
  'megabit',
  'megabyte',
  'meter',
  'microsecond',
  'mile',
  'mile-scandinavian',
  'milliliter',
  'millimeter',
  'millisecond',
  'minute',
  'month',
  'nanosecond',
  'ounce',
  'percent',
  'petabyte',
  'pound',
  'second',
  'stone',
  'terabit',
  'terabyte',
  'week',
  'yard',
  'year',
]

const displayLength = ['short', 'narrow', 'long']

const displayLocales = ['en-US', 'en-GB', 'de-DE', 'fr-FR', 'en-IN', 'zh-CN']
</script>

<template>
  <!-- %partial%::html:: -->
  <FormKit
    v-slot="{ value }"
    type="form"
    :actions="false"
    :value="{
      unitType: 'kilometer',
      displayLength: 'short',
    }"
  >
    <FormKit
      label="Unit type"
      type="select"
      :options="unitOptions"
      name="unitType"
    />
    <FormKit
      label="Display length"
      type="select"
      :options="displayLength"
      name="displayLength"
    />
    <FormKit
      label="Locale"
      type="select"
      :options="displayLocales"
      name="displayLocale"
    />
    <FormKit
      v-if="value.unitType"
      type="unit"
      :unit="value.unitType"
      label="Unit input"
      name="value"
      :unit-display="value.displayLength"
      value="100"
      :display-locale="value.displayLocale"
    />
  </FormKit>
  <!-- %partial%::html:: -->
</template>
