import { createRoot } from 'react-dom/client'
import { genesisIcons } from '@formkit/icons'
import { FormKit, FormKitProvider, defaultConfig } from '@formkit/react'

const config = defaultConfig({
  icons: { ...genesisIcons },
})

function App() {
  return (
    <FormKitProvider config={config}>
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
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
