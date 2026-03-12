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
      {({ value }) => (
        <>
          {/* %partial% */}
          <FormKit
            type="slider"
            name="slider"
            label="Multiple Values"
            defaultValue={[50, 350]}
            min={0}
            max={500}
            help="I now render two control handles"
          />
          {/* %partial% */}
          <pre>{JSON.stringify(value.slider, null, 2)}</pre>
        </>
      )}
    </FormKit>
  )
}
