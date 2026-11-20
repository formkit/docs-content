<template>
  <FormKit type="form" :actions="false" :value="{ load: 12.5, trucks: 3 }">
    <!-- %partial%::html:: -->
    <FormKit
      type="unit"
      name="load"
      label="Load"
      unit="ton"
      :unit-labels="{ short: 't', long: { one: 'ton', other: 'tons' } }"
    />
    <FormKit
      type="unit"
      name="trucks"
      label="Trucks"
      unit="truck"
      unit-display="long"
      :decimals="0"
      :unit-labels="{ long: { one: 'truck', other: 'trucks' } }"
    />
    <!-- %partial%::html:: -->
  </FormKit>
</template>
