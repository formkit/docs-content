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

<!-- %partial%::html:: -->
<template>
  <FormKit
    type="mask"
    mode="select"
    mask="month day, year"
    :tokens="tokens"
    label="Birthday (with overlay)"
    help="Notice the placeholder text is a lighter gray color."
    overlay
  />
  <FormKit
    type="mask"
    name="phone"
    mask="+1 (###) ###-####"
    label="Phone number (with overlay)"
    help="Let’s add some crazy colors to the overlay."
    overlay-placeholder-class="yellow"
    overlay-literal-class="blue"
    overlay-char-class="red"
    overlay
  />
</template>

<style>
.red {
  color: red;
}
.yellow {
  color: #d1c813;
}
.blue {
  color: blue;
}
</style>
<!-- %partial%::html:: -->
