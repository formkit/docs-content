<template>
  <div>
    <FormKit
      label="No options"
      :options="[]"
      type="dropdown"
      popover
    />
    <FormKit
      label="No options, empty message set."
      :options="[]"
      type="dropdown"
      popover
      empty-message="No options here!"
    />
  </div>
</template>

<style>
</style>
