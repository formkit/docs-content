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
        defaultValue={25}
        help="I show my tooltip on hover and drag"
      />
      <FormKit
        type="slider"
        label="Force Show Tooltip"
        defaultValue={50}
        tooltip={true}
        help="I always show my tooltip"
      />
      <FormKit
        type="slider"
        label="Force Hide Tooltip"
        defaultValue={75}
        tooltip={false}
        help="I never show my tooltip. I'm basically a native range input"
      />
      {/* %partial% */}
    </>
  )
}
