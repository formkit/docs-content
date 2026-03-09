import { createRoot } from 'react-dom/client'
import { FormKit, FormKitProvider } from '@formkit/react'
import config from './formkit.config.react.jsx'

// %partial%
const submitHandler = async (_payload, node) => {
  await new Promise((resolve) => setTimeout(resolve, 2000))
  node.reset()
}
// %partial%

function App() {
  return (
    <FormKitProvider config={config}>
      {/* %partial% */}
      <FormKit
        type="form"
        name="contact"
        useLocalStorage
        onSubmit={submitHandler}
      >
        <FormKit type="text" name="name" label="Your name" />
        <FormKit type="text" name="email" label="Your email" />
        <FormKit type="textarea" name="message" label="Your message" />
      </FormKit>
      {/* %partial% */}
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
