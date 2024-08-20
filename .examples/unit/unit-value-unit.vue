<template>
  <FormKit v-slot="{ value }" type="form" :actions="false">
    <FormKit
      type="unit"
      unit="mile"
      label="Miles"
      name="value"
      value-unit="kilometer"
    />
    <span style="display: flex">
      <pre>In kilometers: {{ value && value.value }}</pre>
    </span>
  </FormKit>
</template>
