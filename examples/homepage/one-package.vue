<template>
  <!-- %partial%::html:: -->
  <FormKit
    type="form"
    v-model="data"
    @submit="handleSubmit"
  >
    <FormKit
      type="text"
      label="You Name"
      name="name"
      validation="required"
      validation-behavior="live"
    />
    <FormKit
      type="select"
      label="Favorite Food"
      name="favorite_food"
      :options="{
        pizza: 'Pizza',
        iceCream: 'Ice Cream',
        burger: 'Burger'
      }"
    />
    <FormKit
      type="textarea"
      name="instructions"
      label="Special Instructions"
      :help="`${data.instructions.length} / 120`"
      validation="length:0,120"
      validation-behavior="live"
      :validation-messages="{
        length: 'Instructions cannot be more than 120 characters.'
      }"
    />
  </FormKit>
  <!-- %partial% -->
  <pre wrap>{{ data }}</pre>
</template>

<script>
export default {
  data () {
    return {
      data: {
        name: '',
        favorite_food: '',
        instructions: ''
      }
    }
  },
  methods: {
    async handleSubmit() {
      await new Promise((r) => setTimeout(r, 2000))
      alert('Thank you!')
    }
  }
}
</script>
