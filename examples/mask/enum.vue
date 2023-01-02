<script setup>
const tokens = {
  month: {
    type: 'enum',
    token: 'month',
    placeholder: 'month',
    selectDirection: 'left',
    values: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
  },
  day: {
    type: 'enum',
    token: 'day',
    placeholder: 'day',
    selectDirection: 'left',
    values: new Array(31).fill(0).map((_, i) => `${i}`.padStart(2, '0')),
  },
  year: {
    type: 'enum',
    token: 'year',
    placeholder: 'year',
    selectDirection: 'left',
    values: new Array(200).fill(0).map((_, i) => `${1900 + i}`),
  },
}
</script>

<template>
  <FormKit
    type="mask"
    mode="select"
    mask="month day, year"
    :tokens="tokens"
    label="(Select mode) Social security number"
    help="Select a token and then type to autocomplete, or use the up/down arrows to select a value."
  />
</template>
