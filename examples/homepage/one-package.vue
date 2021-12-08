<template>
  <!-- %partial%::html:: -->
  <FormKit type="form">
    <FormKit
      type="text"
      label="You Name"
      validation="required"
      validation-behavior="live"
    />
    <FormKit
      type="select"
      label="Favorite Food"
      value="pizza"
      :options="{
        pizza: 'Pizza',
        iceCream: 'Ice Cream',
        burger: 'Burger'
      }"
    />
    <FormKit
      type="textarea"
      label="Special Instructions"
      help="Got something to say?"
    />
  </FormKit>
  <!-- %partial% -->
</template>
