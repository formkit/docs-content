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
        name="phone"
        mask="+39 ###.######"
        label="N\u00famero de tel\u00e9fono"
        help="Inserisci il tuo numero di cellulare."
        showMask={false}
      />
      {/* %partial% */}
    </>
  )
}
