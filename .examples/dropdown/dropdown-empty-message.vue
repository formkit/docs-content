<template>
  <div>
    <FormKit
      label="No"
      :options="[]"
      type="dropdown"
    />
    <FormKit
      label="No options, empty message set."
      :options="[]"
      type="dropdown"
      empty-message="No options here!"
    />
  </div>
</template>

<style>
</style>
