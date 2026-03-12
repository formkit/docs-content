import { genesisIcons } from '@formkit/icons'
import { FormKit, defineFormKitConfig } from '@formkit/react'
import { createProPlugin, inputs as proInputs } from '@formkit/pro'
import { guests } from './guests.js'

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
        type="form"
        value={{
          vips: ['Monica Baker', 'Marion Blanchard'],
        }}
        actions={false}
      >
        {({ value }) => (
          <>
            <FormKit
              name="vips"
              type="transferlist"
              label="Choose VIPs for the party"
              sourceLabel="Guests"
              targetLabel="VIPs"
              sourceEmptyMessage="No guests found"
              targetEmptyMessage="No VIPs selected"
              options={guests}
              searchable
              placeholder="Search guests"
            />
            <pre>{JSON.stringify(value, null, 2)}</pre>
          </>
        )}
      </FormKit>
      {/* %partial% */}
    </>
  )
}
