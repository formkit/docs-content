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
            type="currency"
            currency="USD"
            displayLocale="en"
            name="usd"
            defaultValue={12345678.9}
          />

          <FormKit
            type="currency"
            currency="EUR"
            displayLocale="de"
            name="eur"
            defaultValue={12345678.9}
          />

          <FormKit
            type="currency"
            currency="INR"
            displayLocale="en-IN"
            name="inr"
            defaultValue={12345678.9}
          />

          <FormKit
            type="currency"
            currency="CNY"
            displayLocale="zh-CN"
            name="cny"
            defaultValue={12345678.9}
          />
          {/* %partial% */}
          <pre>{JSON.stringify(value, null, 2)}</pre>
        </>
      )}
    </FormKit>
  )
}
