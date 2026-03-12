import { FormKit } from '@formkit/react'
export { default as formkitConfig } from './formkit.config.react.jsx'

export default function App() {
  return (
    <>
      {/* %partial% */}
      <FormKit type="text" label="Floating Text Label via prop" floatingLabel />
      <FormKit
        type="textarea"
        label="Floating Textarea Label via prop"
        floatingLabel
      />
      <FormKit type="text" label="I have a standard label" />
      {/* %partial% */}
    </>
  )
}
