<template>
<FormKit
  type="group"
  name="address"
  :value="{
    street: '456 Mangrove St',
    city: 'Franklin',
    state: 'ny'
  }"
>
  <FormKit
    label="Street"
    name="street"
  />
  <FormKit
    name="city"
    label="City"
  />
  <FormKit
    type="select"
    name="state"
    label="State"
    :options="{
      ca: 'California',
      ny: 'New York',
      va: 'Virginia'
    }"
  />
</FormKit>
</template>
