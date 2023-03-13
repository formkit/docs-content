<template>
  <!-- %partial% -->
  <FormKit
    type="text"
    label="Text Input"
    validation="required"
  />
  <FormKit
    type="select"
    label="Select Input"
    :choices="{
      pizza: 'Pizza',
      iceCream: 'Ice Cream',
      burger: 'Burger'
    }"
  />
  <FormKit
    type="textarea"
    label="Text Area"
    help="Helpful message goes here"
  />
  <!-- %partial% -->
</template>
