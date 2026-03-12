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
    <>
      {/* %partial% */}
      <FormKit
        type="colorpicker"
        defaultValue="#DE1B1B"
        label="A default colorpicker input"
        popover
        help="Just the way it comes out of the box."
      />

      <FormKit
        type="colorpicker"
        inline
        defaultValue="hsla(240, 75%, 35%, 0.75)"
        label="An inline colorpicker input"
        help="Shows the colorpicker inline."
      />
      {/* %partial% */}
    </>
  )
}
