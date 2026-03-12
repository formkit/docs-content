import { genesisIcons } from '@formkit/icons'
import { FormKit, defineFormKitConfig } from '@formkit/react'
import { createProPlugin, inputs as proInputs } from '@formkit/pro'

const swatches = [
  '#79B2D6',
  'hsla(240, 75%, 35%, 0.75)',
  'rgba(240, 75, 35, 0.75)',
  {
    label: 'Really Red!',
    value: '#DE1B1B',
  },
]

const pro = createProPlugin('fk-52971f34220', proInputs)
export const formkitConfig = defineFormKitConfig({
  plugins: [pro],
  icons: { ...genesisIcons },
})

export default function App() {
  return (
    <>
      {/* %partial% */}
      <FormKit type="colorpicker" inline options={swatches} />
      {/* %partial% */}
    </>
  )
}
