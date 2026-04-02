import { genesisIcons } from '@formkit/icons'
import { FormKit, defineFormKitConfig } from '@formkit/react'

export const formkitConfig = defineFormKitConfig({
  icons: { ...genesisIcons },
})

export default function App() {
  return (
    <>
      {/* %partial% */}
      <FormKit
        prefixIcon="filePdf"
        suffixIcon="search"
        label="Prefix & suffix"
      />
      <FormKit type="select" selectIcon="caretDown" label="Select control" />
      <FormKit
        type="file"
        fileItemIcon="fileAudio"
        fileRemoveIcon="trash"
        label="File icons"
        help="Add a file to see the trash icon."
      />
      {/* %partial% */}
    </>
  )
}
