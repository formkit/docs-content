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
      <FormKit type="togglebuttons">Airplane mode</FormKit>

      <FormKit
        type="togglebuttons"
        slots={{
          on: () => (
            <>
              <span className="text-xl">&#9745;</span> Enabled
            </>
          ),
          off: () => (
            <>
              <span className="text-xl">&#9744;</span> Disabled
            </>
          ),
        }}
      />
      {/* %partial% */}
    </FormKit>
  )
}
