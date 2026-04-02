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
        type="slider"
        label="Default Tooltip Visibility"
        defaultValue={[60, 100]}
        tooltipFormat={(value, handle) =>
          `${handle === 'min' ? 'Min' : 'Max'}: ${value}`
        }
        tooltip={true}
        help="I apply custom formatting to my tooltips"
      />
      {/* %partial% */}
    </>
  )
}
