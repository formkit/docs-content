import { FormKit } from '@formkit/react'
export { default as formkitConfig } from './formkit.config.react.jsx'

// %partial%
const failingSubmitHandler = async (_payload, node) => {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  node.setErrors(['Something went wrong with the server, please try again'])
  node.restoreCache()
}
// %partial%

export default function App() {
  return (
    <>
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
    </>
  )
}
