<template>
  <FormKit
    type="select"
    label="Letters or numbers"
    :options="[
      {
        group: 'Letters',
        options: ['A', 'B', 'C'],
      },
      {
        group: 'Numbers',
        options: [1, 2, 3],
      },
    ]"
  ></FormKit>
</template>
