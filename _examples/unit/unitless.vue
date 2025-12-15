<template>
  <FormKit v-slot="{ value }" type="form" :actions="false">
    <FormKit type="unit" label="No units" name="value" />
    <pre wrap>{{ value && value.value }}</pre>
  </FormKit>
</template>
