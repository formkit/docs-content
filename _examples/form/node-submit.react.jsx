import { createRoot } from 'react-dom/client'
import { genesisIcons } from '@formkit/icons'
import { FormKitProvider, defaultConfig } from '@formkit/react'
/* %partial% */
import { useRef } from 'react'
import { FormKit } from '@formkit/react'

function submitHandler() {
  alert('Submitted successfully!')
}

function NodeSubmitExample() {
  const myForm = useRef(null)

  function submitForm() {
    const node = myForm.current
    node?.submit()
  }

  return (
    <>
      <FormKit
        ref={myForm}
        type="form"
        actions={false}
        onSubmit={submitHandler}
      >
        <FormKit
          type="checkbox"
          label="Computer accessories"
          decoratorIcon="heart"
          validation="required|min:2"
          options={{
            mouse: 'Mouse',
            keyboard: 'Keyboard',
            monitor: 'Display',
            storage: 'Storage',
            laptop_bag: 'Laptop bag',
          }}
          help="Pick some accessories you need for your job."
        />
      </FormKit>
      <p className="text-xs font-italic mb-2">
        This button is not part of the above form:
      </p>
      <FormKit type="button" onClick={submitForm}>
        Submit request
      </FormKit>
    </>
  )
}
/* %partial% */

const config = defaultConfig({
  icons: { ...genesisIcons },
})

function App() {
  return (
    <FormKitProvider config={config}>
      <NodeSubmitExample />
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
