import { genesisIcons } from '@formkit/icons'
import { defineFormKitConfig } from '@formkit/react'
/* %partial% */
import { FormKitIcon } from '@formkit/react'

function IconComponentExample() {
  return (
    <>
      <h2>
        Using <code>FormKitIcon</code> you can output any loaded icon anywhere.
      </h2>
      <div className="[&>.formkit-icon]:block [&>.formkit-icon]:max-w-[5em]">
        <FormKitIcon icon="heart" />
      </div>
    </>
  )
}
/* %partial% */

export const formkitConfig = defineFormKitConfig({
  icons: { ...genesisIcons },
})

export default function App() {
  return <IconComponentExample />
}
