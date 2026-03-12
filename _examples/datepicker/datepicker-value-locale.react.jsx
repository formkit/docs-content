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
      <FormKit type="form" actions={false}>
        {({ value }) => (
          <>
            <FormKit
              type="datepicker"
              name="arrival"
              label="Kyiv arrival time"
              help="When will you be arriving in Kyiv?"
              sequence={['day', 'time']}
              format={{ date: 'long', time: 'short' }}
              valueFormat={{ date: 'long', time: 'short' }}
              valueLocale="uk"
              defaultValue="14 березня 2023 р. о 17:02"
              popover
            />
            <pre>{JSON.stringify(value, null, 2)}</pre>
          </>
        )}
      </FormKit>
      {/* %partial% */}
    </>
  )
}
