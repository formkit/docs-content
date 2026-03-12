import { FormKit } from '@formkit/react'
export { default as formkitConfig } from '../formkit.config.react.jsx'

export default function App() {
  return (
    <>
      {/* %partial% */}
      <FormKit type="multi-step">
        <FormKit
          type="step"
          name="stepOne"
          label="My Custom Label"
          nextLabel="Continue to next step"
        >
          <FormKit type="text" label="Name" />
        </FormKit>

        <FormKit
          type="step"
          name="stepTwo"
          previousLabel="Go back to previous step"
        >
          <FormKit type="textarea" label="Your story" />
        </FormKit>
      </FormKit>
      {/* %partial% */}
    </>
  )
}
