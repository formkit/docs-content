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
        mode="select"
        name="year"
        mask="####"
        label="What year were you born?"
        help="You must be at least 21 to enter this site."
        tokens={{
          '#': {
            selectFill: '0',
          },
        }}
        validation={`required|max:${new Date().getFullYear() - 21}|min:${
          new Date().getFullYear() - 120
        }`}
        validationLabel="Birth year"
        validationVisibility="live"
        validationMessages={{
          min: "Alright gramps, you're too old for this site.",
        }}
      />
      {/* %partial% */}
    </>
  )
}
