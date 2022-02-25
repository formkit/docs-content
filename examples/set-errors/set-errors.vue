<script>
export default {
  methods: {
    async order(data) {
      try {
        await fakeApiCall(data)
      } catch (inputErrors) {
        this.$formkit.setErrors(
          'order-form', // You must use the ID of the form
          ['There was an error with your order!'], // (optional) An array of form level errors
          inputErrors // (optional) input level errors
        )
      }
    },
  },
}

/**
 * This is just to illustrate how you might handle an XHR call with fetch or
 * with axios.
 */
function fakeApiCall(data) {
  return new Promise((_, reject) => {
    setTimeout(
      () =>
        reject({
          flavor: 'Sorry, that type is now sold out!',
        }),
      1000
    )
  })
}
</script>

<template>
  <FormKit
    type="form"
    id="order-form"
    submit-label="Order chips"
    @submit="order"
  >
    <h2>Bulk order</h2>
    <FormKit
      type="select"
      name="flavor"
      label="Chip flavor"
      validation="required"
      :options="{
        bbq: 'Barbecue',
        pickle: 'Dill pickle',
        habanero: 'Habanero',
        boring: 'Original',
        vinegar: 'Salt & Vinegar',
      }"
    />
    <FormKit
      type="number"
      step="1"
      name="quantity"
      label="Quantity"
      value="500"
      validation="required|min:100"
      :validation-messages="{
        min: 'Minimum order is 100 units.',
      }"
    />
  </FormKit>
</template>
