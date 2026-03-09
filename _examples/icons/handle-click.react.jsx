import { createRoot } from 'react-dom/client'
import { genesisIcons } from '@formkit/icons'
import { FormKit, FormKitProvider, defaultConfig } from '@formkit/react'

const config = defaultConfig({
  icons: { ...genesisIcons },
})

function handleIconClick(node) {
  node.props.suffixIcon = node.props.suffixIcon === 'eye' ? 'eyeClosed' : 'eye'
  node.props.type = node.props.type === 'password' ? 'text' : 'password'
}

function App() {
  return (
    <FormKitProvider config={config}>
      {/* %partial% */}
      <FormKit
        type="password"
        label="A fancy password input"
        value="mySecretPassword!"
        prefixIcon="password"
        suffixIcon="eyeClosed"
        onSuffixIconClick={handleIconClick}
        suffixIconClass="hover:text-blue-500"
      />
      {/* %partial% */}
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
