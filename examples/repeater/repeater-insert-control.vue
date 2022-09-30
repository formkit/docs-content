<template>
  <FormKit
    type="group"
    :actions="false"
    #default="{ value }"
  >
    <FormKit
      id="no-model"
      type="repeater"
      label="Ice cream orders"
      help="Add as many ice cream orders as you want."
      :insert-control="true"
    >
      <FormKit
        name="name"
        label="Person this order is for"
      />
      <FormKit
        type="radio"
        label="Flavors"
        :options="['Vanilla', 'Chocolate', 'Strawberry']"
      />
    </FormKit>
  </FormKit>
</FormKit>