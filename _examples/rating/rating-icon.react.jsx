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
            type="rating"
            ratingIcon="android"
            name="ratingAmongUs"
            label="Rate the Android video game: Among Us"
          />
          {/* %partial% */}
          <pre>{JSON.stringify(value, null, 2)}</pre>
        </>
      )}
    </FormKit>
  )
}
