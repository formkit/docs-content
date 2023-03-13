<template>
  <FormKit type="form">
    <FormKit
      type="checkbox"
      label="Shirt style"
      disabled
      :options="['Hawaiian', 'V-Neck', 'Blouse', 'Chambrey']"
      :errors="['Sorry, we are out of shirts.']"
    />
  </FormKit>
</template>
