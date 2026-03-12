import { FormKit } from '@formkit/react'
import { createLocalStoragePlugin } from '@formkit/addons'

// %partial%
const submitHandler = async (_payload, node) => {
  await new Promise((resolve) => setTimeout(resolve, 2000))
  node.reset()
}
// %partial%

export default function App() {
  return (
    <>
      {/* %partial% */}
      <p>
        <em>
          <small>Data saving is controlled by the form&apos;s checkbox.</small>
        </em>
      </p>
      <FormKit
        type="form"
        name="contactWithControl"
        plugins={[
          createLocalStoragePlugin({
            control: 'save',
          }),
        ]}
        useLocalStorage
        onSubmit={submitHandler}
      >
        <FormKit
          type="checkbox"
          name="save"
          value={true}
          label="Save my progress as I type"
        />
        <FormKit type="text" name="name" label="Your name" />
        <FormKit type="text" name="email" label="Your email" />
        <FormKit type="textarea" name="message" label="Your message" />
      </FormKit>
      {/* %partial% */}
    </>
  )
}
