<template>
  <FormKit
    label="Favorite type of coffee type?"
    name="coffee"
    help="What is your favorite type of coffee?"
    @node="e => { node = e }"
  />
</template>

<script>
export default {
  data () {
    return {
      node: null,
    }
  },
  mounted () {
    let index = 0
    const coffee = [
      'Latte',
      'Americano',
      'Doppio',
      'Allongé',
      'Macchiato',
    ]
    setInterval(() => {
      this.node.input(this.coffee[index], index)
      if (index < this.coffee.length - 1) index++
      else index = 0
    }, 100)
  }
}
</script>
