import { FormKit } from '@formkit/react'
export { default as formkitConfig } from './formkit.config.react.jsx'

export default function App() {
  return (
    <>
      {/* %partial% */}
      <FormKit type="form" actions={false}>
        <FormKit
          type="textarea"
          name=""
          label="Textarea with a Maximum Length"
          maxLength="100"
        />

        <FormKit
          type="text"
          label="Text field with a Maximum Length"
          maxLength="100"
          maxlengthCountdown
          maxlengthRemainingText="letters left"
          help="Even though `text` fields aren't configured in the options, you can still explicitly add them"
        />
      </FormKit>
      {/* %partial% */}
    </>
  )
}
