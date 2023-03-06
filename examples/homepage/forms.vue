<script>
export default {
  data() {
    return {
      data: {
        name: '',
        favorite_food: '',
        instructions: '',
      },
    }
  },
  methods: {
    async handleSubmit() {
      await new Promise((r) => setTimeout(r, 2000))
      alert('Thank you!')
    },
  },
}
</script>

<template>
  <!-- %partial%::html:: -->
  <FormKit type="form" #default="{ value }" @submit="handleSubmit">
    <FormKit
      type="text"
      label="Your Email"
      name="email"
      prefix-icon="email"
      placeholder="email@domain.com"
      validation="required|email"
      help="Order confirmation will be sent to your address"
    />
    <FormKit
      type="select"
      label="Favorite Food"
      name="favorite_food"
      placeholder="Choose a food"
      :options="['Pizza', 'Ice Cream', 'Burger']"
    />
    <FormKit
      type="textarea"
      name="instructions"
      label="Special Instructions"
      placeholder="Allergies? No-contact delivery? Let us know."
      :help="`${data.instructions.length} / 120`"
      validation="length:0,120"
      validation-visibility="live"
      :validation-messages="{
        length: 'Instructions cannot be more than 120 characters.',
      }"
    />

    <pre wrap>{{ value }}</pre>
  </FormKit>
  <!-- %partial% -->
</template>

<style>
pre[wrap] {
  margin-bottom: 1em !important;
}
</style>
