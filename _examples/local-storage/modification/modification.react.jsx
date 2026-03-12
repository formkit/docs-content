import { FormKit } from '@formkit/react'
import { createLocalStoragePlugin } from '@formkit/addons'

// %partial%
const submitHandler = async (_payload, node) => {
  await new Promise((resolve) => setTimeout(resolve, 2000))
  node.reset()
}

async function beforeSave(value) {
  await new Promise((resolve) => setTimeout(resolve, 500))
  return btoa(JSON.stringify(value))
}

async function beforeLoad(value) {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  return JSON.parse(atob(value))
}
// %partial%

export default function App() {
  return (
    <>
      {/* %partial% */}
      <p>
        <em>
          <small>
            If you check localStorage you will see that saved form data is
            base64 encoded.
          </small>
        </em>
      </p>
      <FormKit
        type="form"
        name="contactWithModification"
        plugins={[
          createLocalStoragePlugin({
            beforeSave,
            beforeLoad,
          }),
        ]}
        useLocalStorage
        onSubmit={submitHandler}
      >
        <FormKit type="text" name="name" label="Your name" />
        <FormKit type="text" name="email" label="Your email" />
        <FormKit type="textarea" name="message" label="Your message" />
      </FormKit>
      {/* %partial% */}
    </>
  )
}
