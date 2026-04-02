import { genesisIcons } from '@formkit/icons'
import { FormKit, defineFormKitConfig } from '@formkit/react'

export const formkitConfig = defineFormKitConfig({
  icons: { ...genesisIcons },
})

export default function App() {
  return (
    <>
      {/* %partial% */}
      {/* The default slot can also set the submit label */}
      <FormKit
        type="submit"
        help="You can use the default slot."
        prefixIcon="check"
      >
        I have slot content
      </FormKit>
      {/* %partial% */}
    </>
  )
}
