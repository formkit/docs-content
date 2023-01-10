
<template>
  <div class="section-wrapper">
    <h2>Pro - Repeater</h2>
    <FormKit
        type="repeater"
        label="Ice cream orders"
        help="Add as many ice cream orders as you want."
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
  </div>
</template>