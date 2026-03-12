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
        name="years_old"
        prefix="I am "
        suffix=" years old."
        mask="##"
        mode="select"
        validation="required"
        tokens={{
          '#': {
            selectFill: '0',
          },
        }}
        label="Age"
        help="How old are you?"
      />
      {/* %partial% */}
    </>
  )
}
