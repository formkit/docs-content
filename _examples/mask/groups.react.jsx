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
        type="mask"
        name="school_id"
        mask="id{-a#a|repeat|placeholder:+}"
        label="Id number"
        help="Id number in the format: id-b4b-b4b-b4b-b4b"
      />

      {/* "-a#a" is the group, "repeat" and "placeholder" are the options */}
      {/* %partial% */}
    </>
  )
}
