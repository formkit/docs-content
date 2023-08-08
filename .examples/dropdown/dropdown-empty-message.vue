<template>
  <div>
    <FormKit
      label="No options."
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
@import 'https://cdn.jsdelivr.net/npm/@formkit/pro@dev/genesis.css';
</style>
