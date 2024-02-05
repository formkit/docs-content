<script setup>
import countries from './countries.js'
</script>

<template>
  <FormKit type="form" #default="{ value }" :actions="false">
    <FormKit
      type="dropdown"
      name="countries"
      label="Choose your favorite countries"
      placeholder="Afghanistan, Albania..."
      :options="countries"
      multiple
      popover
			:value="['US', 'BZ', 'GE', 'IT', 'RU', 'AU', 'CN']"
    />
    <pre wrap>{{ value }}</pre>
  </FormKit>
</template>

<style>

</style>
