import { useState } from 'react'
import { genesisIcons } from '@formkit/icons'
import { FormKit, defineFormKitConfig } from '@formkit/react'

export const formkitConfig = defineFormKitConfig({
  icons: { ...genesisIcons },
})

export default function App() {
  const [value, setValue] = useState([])

  return (
    <>
      {/* %partial% */}
      <FormKit
        modelValue={value}
        onUpdateModelValue={setValue}
        type="checkbox"
        label="Toppings"
        options={['Mushrooms', 'Olives', 'Salami', 'Anchovies']}
        decoratorIcon="happy"
        help="Select your pizza toppings"
        validation="required|min:3"
      />
      <pre>{JSON.stringify(value, null, 2)}</pre>
      {/* %partial% */}
    </>
  )
}
