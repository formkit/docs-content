<template>
  <FormKit
    type="select"
    id="manufacture"
    label="Manufacture"
    :options="['Sony', 'Apple', 'Samsung', 'Lenovo']"
    help="Select your favorite tech manufacture."
  />
</template>

<script>
export default {
  mounted() {
    const node = this.$formkit.get('manufacture')
    node.input('Samsung', false)
  },
}
</script>
