<template>
  <FormKit
    label="Favorite type of coffee type?"
    id="coffee"
    help="What is your favorite type of coffee?"
  />
</template>

<script>
export default {
  mounted() {
    const node = this.$formkit.get('coffee')
    let index = 0
    const coffee = ['Latte', 'Americano', 'Doppio', 'Allongé', 'Macchiato']
    setInterval(() => {
      node.input(coffee[index])
      if (index < coffee.length - 1) index++
      else index = 0
    }, 250)
  },
}
</script>
