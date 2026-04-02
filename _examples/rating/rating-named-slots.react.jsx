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
            name="rating"
            defaultValue={3}
            label="Rate our t-rex exhibit!"
            slots={{
              offItem: () => (
                <img
                  src="https://cdn.formk.it/example-assets/t-rex-outline-s.png"
                  alt=""
                />
              ),
              onItem: () => (
                <img
                  src="https://cdn.formk.it/example-assets/dino-s.png"
                  alt=""
                />
              ),
            }}
          />
          {/* %partial% */}
          <pre>{JSON.stringify(value, null, 2)}</pre>
        </>
      )}
    </FormKit>
  )
}
