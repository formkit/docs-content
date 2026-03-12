import { genesisIcons } from '@formkit/icons'
import { FormKit, defineFormKitConfig } from '@formkit/react'

export const formkitConfig = defineFormKitConfig({
  icons: { ...genesisIcons },
})

function handleIconClick(node) {
  node.props.suffixIcon = node.props.suffixIcon === 'eye' ? 'eyeClosed' : 'eye'
  node.props.type = node.props.type === 'password' ? 'text' : 'password'
}

export default function App() {
  return (
    <>
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
    </>
  )
}
