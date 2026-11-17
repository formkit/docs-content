import { genesisIcons } from '@formkit/icons'
import { FormKit, defineFormKitConfig } from '@formkit/react'
import { createProPlugin, inputs as proInputs } from '@formkit/pro'

// %partial%
function TaglistAllowDuplicatesExample() {
  return (
    <FormKit type="form" actions={false}>
      <FormKit
        type="taglist"
        name="toppings"
        label="Pizza toppings (doubles welcome)"
        options={['Pepperoni', 'Mushrooms', 'Extra cheese', 'Olives', 'Jalapeños']}
        allowDuplicates
        value={['Extra cheese', 'Extra cheese']}
        popover
      />
    </FormKit>
  )
}
// %partial%

const pro = createProPlugin('fk-52971f34220', proInputs)
export const formkitConfig = defineFormKitConfig({
  plugins: [pro],
  icons: { ...genesisIcons },
})

export default function App() {
  return <TaglistAllowDuplicatesExample />
}
