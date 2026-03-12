import { genesisIcons } from '@formkit/icons'
import { FormKit, defineFormKitConfig } from '@formkit/react'
import { createProPlugin, inputs as proInputs } from '@formkit/pro'

const pro = createProPlugin('fk-52971f34220', proInputs)
export const formkitConfig = defineFormKitConfig({
  plugins: [pro],
  icons: { ...genesisIcons },
})

// %partial%
function disabledDays(node, date) {
  // Re-implement min-date and max-date.
  if (node.props.minDate && date < node.props.minDate) return true
  if (node.props.maxDate && date > node.props.maxDate) return true

  // If the date is a weekend, disable it.
  return date.getDay() === 0 || date.getDay() === 6
}
// %partial%

export default function App() {
  return (
    <>
      {/* %partial% */}
      <FormKit
        type="datepicker"
        name="pickup"
        label="Next available workday"
        placeholder="Select a workday"
        pickerOnly
        popover
        minDate="2023-01-01"
        maxDate="2025-01-01"
        disabledDays={disabledDays}
      />
      {/* %partial% */}
    </>
  )
}
