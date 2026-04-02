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
            type="togglebuttons"
            name="shirt_size"
            label="T-shirt Size"
            options={['Small', 'Medium', 'Large', 'X-Large']}
            vertical={value?.orientation}
          />

          <FormKit
            type="togglebuttons"
            label="Size Toggle Orientation"
            name="orientation"
            enforced
            defaultValue={false}
            multiple={false}
            options={[
              { label: 'Horizontal', value: false },
              { label: 'Vertical', value: true },
            ]}
          />
          {/* %partial% */}
          <pre>{JSON.stringify(value, null, 2)}</pre>
        </>
      )}
    </FormKit>
  )
}
