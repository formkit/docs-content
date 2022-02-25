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
  <FormKit type="form" v-model="data" @submit="handleSubmit">
    <FormKit
      type="text"
      label="Your Name"
      name="name"
      placeholder="Your name"
      validation="required"
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
  </FormKit>
  <!-- %partial% -->
  <pre wrap>{{ data }}</pre>
</template>
