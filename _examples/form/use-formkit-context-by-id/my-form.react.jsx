import { createRoot } from 'react-dom/client'
import { FormKitProvider, defaultConfig } from '@formkit/react'
/* %partial% */
import { FormKit, useFormKitContextById } from '@formkit/react'

function UseFormKitContextByIdExample() {
  const formContext = useFormKitContextById('myForm')
  const sum = (formContext?.value?.a ?? 0) + (formContext?.value?.b ?? 0)

  return (
    <FormKit type="form" id="myForm">
      <div className="flex gap-4 items-center">
        <FormKit type="number" name="a" number value="2" />
        <FormKit type="number" name="b" number value="3" />
        <div className="whitespace-nowrap">= {sum}</div>
      </div>
    </FormKit>
  )
}
/* %partial% */

function App() {
  return (
    <FormKitProvider config={defaultConfig()}>
      <UseFormKitContextByIdExample />
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
