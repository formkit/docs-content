import { createRoot } from 'react-dom/client'
import { FormKitProvider, defaultConfig } from '@formkit/react'
/* %partial% */
import { useState } from 'react'
import { FormKit } from '@formkit/react'

const euroInputs = () => {}

euroInputs.library = (node) => {
  const text = {
    $el: 'input',
    attrs: {
      onInput: '$handlers.DOMInput',
      value: '$_value',
      class: 'border border-gray-700 mb-4 bg-transparent dark:border-gray-500',
    },
  }

  switch (node.props.type) {
    case 'italy':
      return node.define({
        type: 'input',
        family: 'text',
        schema: ['🇮🇹', text],
      })
    case 'france':
      return node.define({
        type: 'input',
        family: 'text',
        schema: ['🇫🇷', text],
      })
  }
}

function PluginLibraryExample() {
  const [formData, setFormData] = useState({})

  return (
    <>
      <FormKit
        plugins={[euroInputs]}
        type="form"
        modelValue={formData}
        onUpdateModelValue={(value) => setFormData(value ?? {})}
      >
        <FormKit type="italy" name="nome" />
        <FormKit type="france" name="nom" />
      </FormKit>
      <pre>{JSON.stringify(formData, null, 2)}</pre>
    </>
  )
}
/* %partial% */

function App() {
  return (
    <FormKitProvider config={defaultConfig()}>
      <PluginLibraryExample />
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
