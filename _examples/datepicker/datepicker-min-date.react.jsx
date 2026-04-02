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
        type="datepicker"
        name="pickup"
        label="A future date"
        validationVisibility="live"
        placeholder="Some date in the future"
        pickerOnly
        popover
        minDate={new Date()}
      />
      {/* %partial% */}
    </>
  )
}
