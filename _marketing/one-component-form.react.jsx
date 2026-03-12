import { FormKit } from '@formkit/react'

const units = ['cup', 'lb', 'oz', 'tsp', 'tbsp']

async function handleSubmit() {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  alert('Recipe updated!')
}

function OneComponentForm() {
  return (
    <>
      {/* %partial% */}
      <FormKit type="form" onSubmit={handleSubmit} submitLabel="Save Recipe">
        <div className="grid grid-cols-2 gap-4">
          <FormKit type="text" name="recipe_name" label="Recipe Name" />
          <FormKit type="text" name="cook_time" label="Cook Time" />
          <FormKit type="textarea" name="description" label="Description" outerClass="col-span-2 max-w-none" />
        </div>
        <FormKit type="repeater" name="ingredients" label="Ingredients" draggable addLabel="Add Ingredient">
          <div className="grid grid-cols-3 gap-4">
            <FormKit type="text" name="name" label="Name" />
            <FormKit type="number" name="quantity" label="Quantity" />
            <FormKit type="dropdown" placeholder="Choose" name="unit" label="Unit" options={units} />
          </div>
        </FormKit>
      </FormKit>
      {/* %partial% */}
    </>
  )
}

export default OneComponentForm
