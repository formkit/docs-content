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
      <br />
      {/* %partial% */}
      <FormKit
        type="toggle"
        defaultValue={true}
        thumbIcon="whatsapp"
        thumbColorOn="#4FCE5D"
        trackColorOn="#435A64"
        iconColorOn="white"
      />
      {/* %partial% */}
    </>
  )
}
