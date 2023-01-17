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
    values: new Array(31).fill(0).map((_, i) => i.toString().padStart(2, '0')),
  },
  year: {
    type: 'enum',
    token: 'year',
    placeholder: 'year',
    selectDirection: 'left',
    values: new Array(200).fill(0).map((_, i) => (1900 + i).toString()),
  },
}
</script>

<template>
  <div class="section-wrapper">
    <h2>Pro - Mask</h2>
    <FormKit
      type="mask"
      name="phone"
      mask="+1 (###) ###-####"
      label="Phone number"
      help="Please enter a phone number"
    />
    <FormKit
      type="mask"
      mode="select"
      mask="month day, year"
      :tokens="tokens"
      label="(Select mode) Social security number"
      help="Select a token and then type to autocomplete, or use the up/down arrows to select a value."
    />
    <FormKit
      type="mask"
      reverse
      prefix="€"
      name="bid"
      mask="{#,##|repeat}#.##"
      label="Bid"
      show-mask="false"
      allow-incomplete="true"
      help="Enter your bid for the art piece."
    />
  </div>
</template>