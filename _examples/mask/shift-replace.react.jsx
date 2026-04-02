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
        type="mask"
        mask="###-###-####"
        defaultValue="123-456-7890"
        label="(Shift mode) Social security number"
        help="Notice when you type new numbers the characters shift to the right."
      />
      <FormKit
        type="mask"
        mode="replace"
        mask="###-###-####"
        defaultValue="123-456-7890"
        label="(Replace mode) Social security number"
        help="Notice when you type new numbers the characters are replaced."
      />
      {/* %partial% */}
    </>
  )
}
