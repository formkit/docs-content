<script setup lang="ts">
async function handleSubmit() {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  alert('Recipe updated!')
}
</script>

<template>
  <!-- %partial% -->
  <FormKit type="form" @submit="handleSubmit" submit-label="Save Recipe">
    <div class="grid grid-cols-2 gap-4">
      <FormKit type="text" name="recipe_name" label="Recipe Name" />
      <FormKit type="text" name="cook_time" label="Cook Time" />
      <FormKit type="textarea" name="description" label="Description" outer-class="col-span-2 max-w-none" />
    </div>
    <FormKit type="repeater" name="ingredients" label="Ingredients" draggable add-label="Add Ingredient">
      <div class="grid grid-cols-3 gap-4">
        <FormKit type="text" name="name" label="Name" />
        <FormKit type="number" name="quantity" label="Quantity" />
        <FormKit type="dropdown" placeholder="Choose" name="unit" label="Unit" :options="['cup', 'lb', 'oz', 'tsp', 'tbsp']" />
      </div>
    </FormKit>
  </FormKit>
  <!-- %partial% -->
</template>