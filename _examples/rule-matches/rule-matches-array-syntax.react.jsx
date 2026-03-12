import { FormKit } from '@formkit/react'

export default function App() {
  return (
    <>
      {/* %partial% */}
      <FormKit
        type="text"
        placeholder="#00ff00"
        label="Hexidecimal Color"
        validation={[['matches', /^#[a-fA-F0-9]{6}$/]]}
        validationVisibility="live"
        value="#00ff0"
      />
      {/* %partial% */}
    </>
  )
}
