import { createRoot } from 'react-dom/client'
import { FormKit, FormKitProvider } from '@formkit/react'
import config from './formkit.config.react.jsx'

// %partial%
const failingSubmitHandler = async (_payload, node) => {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  node.setErrors(['Something went wrong with the server, please try again'])
  node.restoreCache()
}
// %partial%

function App() {
  return (
    <FormKitProvider config={config}>
      {/* %partial% */}
      <p>
        <em>
          <small>
            Data can be recovered with node.restoreCache()
            <br />
            If you reload after submit the data will persist.
          </small>
        </em>
      </p>
      <FormKit
        type="form"
        name="contactWithRestore"
        useLocalStorage
        onSubmit={failingSubmitHandler}
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
