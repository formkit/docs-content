import { FormKit } from '@formkit/react'
export { default as formkitConfig } from './formkit.config.react.jsx'

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
    </>
  )
}
