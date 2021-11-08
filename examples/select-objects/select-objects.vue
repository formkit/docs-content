<template>
  <!-- %partial%::html:: -->
  <FormKit
    type="select"
    label="What country makes the best food?"
    name="planet"
    placeholder="Select a planet"
    :options="[
      { label: 'France', value: 'fr', attrs: { disabled: true } },
      { label: 'Germany', value: 'de', attrs: { disabled: true } },
      { label: 'Spain', value: 'es', attrs: { disabled: true } },
      { label: 'Italy', value: 'ie' },
      { label: 'Greece', value: 'gr', attrs: { disabled: true } },
    ]"
    help="Don’t worry, you can’t get this one wrong."
  />
  <!-- %partial%::html:: -->
</template>
