import { useState } from 'react'
import { genesisIcons } from '@formkit/icons'
import { FormKit, defineFormKitConfig } from '@formkit/react'
import { createProPlugin, inputs as proInputs } from '@formkit/pro'

const pro = createProPlugin('fk-52971f34220', proInputs)
export const formkitConfig = defineFormKitConfig({
  plugins: [pro],
  icons: { ...genesisIcons },
})

export default function App() {
  const [color, setColor] = useState('#79B2D6')

  return (
    <>
      {/* %partial% */}
      <FormKit
        type="colorpicker"
        format="hex"
        modelValue={color}
        onUpdateModelValue={setColor}
        delay={0}
        popover
      />
      <FormKit
        type="colorpicker"
        format="hsla"
        modelValue={color}
        onUpdateModelValue={setColor}
        delay={0}
        popover
      />
      <FormKit
        type="colorpicker"
        format="rgba"
        modelValue={color}
        onUpdateModelValue={setColor}
        delay={0}
        popover
      />
      {/* %partial% */}
    </>
  )
}
