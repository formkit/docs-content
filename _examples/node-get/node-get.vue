<script>
export default {
  mounted() {
    const node = this.$formkit.get('manufacturer')
    node.input('Samsung', false)
  },
}
</script>

<template>
  <FormKit
    type="select"
    id="manufacturer"
    label="Manufacturer"
    :options="['Sony', 'Apple', 'Samsung', 'Lenovo']"
    help="Select your favorite tech manufacturer."
  />
</template>
