import { genesisIcons } from '@formkit/icons'
import { FormKit, defineFormKitConfig } from '@formkit/react'
import { createProPlugin, inputs as proInputs } from '@formkit/pro'

const pro = createProPlugin('fk-52971f34220', proInputs)
export const formkitConfig = defineFormKitConfig({
  plugins: [pro],
  icons: { ...genesisIcons },
})

export default function App() {
  return (
    <FormKit type="form" actions={false}>
      {/* %partial% */}
      <FormKit
        type="togglebuttons"
        name="pizza_toppings"
        label="Pizza Toppings"
        options={['Pepperoni', 'Sausage', 'Mushroom', 'Olives']}
        vertical
      />
      {/* %partial% */}
    </FormKit>
  )
}
