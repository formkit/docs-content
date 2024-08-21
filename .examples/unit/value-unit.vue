<template>
  <FormKit v-slot="{ value }" type="form" :actions="false">
    <FormKit
      type="unit"
      unit="mile"
      label="Miles"
      name="value"
      value-unit="kilometer"
    />
    <pre wrap>In kilometers: {{ value && value.value }}</pre>
  </FormKit>
</template>
