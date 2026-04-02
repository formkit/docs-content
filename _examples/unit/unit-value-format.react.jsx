import { genesisIcons } from '@formkit/icons'
import { FormKit, defineFormKitConfig } from '@formkit/react'
import { createProPlugin, inputs as proInputs } from '@formkit/pro'

const pro = createProPlugin('fk-52971f34220', proInputs)
export const formkitConfig = defineFormKitConfig({
  plugins: [pro],
  icons: {
    ...genesisIcons,
  },
})

export default function App() {
  return (
    <FormKit type="form" actions={false}>
      {({ value }) => (
        <>
          {/* %partial% */}
          <FormKit
            type="unit"
            unit="year"
            name="input_1"
            label="Default formatting"
            defaultValue={100}
          />
          <FormKit
            type="unit"
            unit="year"
            name="input_2"
            label="Formatting as string"
            valueFormat="string"
            defaultValue={100}
          />
          <pre>{JSON.stringify(value, null, 2)}</pre>
          {/* %partial% */}
        </>
      )}
    </FormKit>
  )
}
