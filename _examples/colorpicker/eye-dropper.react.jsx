import { genesisIcons } from '@formkit/icons'
import { FormKit, defineFormKitConfig } from '@formkit/react'
import { createProPlugin, inputs as proInputs } from '@formkit/pro'

const pro = createProPlugin('fk-52971f34220', proInputs)
export const formkitConfig = defineFormKitConfig({
  plugins: [pro],
  icons: { ...genesisIcons },
})

export default function App() {
  const hasNativeEyeDropper =
    typeof window !== 'undefined' && 'EyeDropper' in window

  return (
    <>
      {!hasNativeEyeDropper ? (
        <h2>Your browser does not support the Eyedropper API.</h2>
      ) : null}

      {/* %partial% */}
      <FormKit
        type="colorpicker"
        label="Eyedropper enabled (default, when available)"
        inline
        defaultValue="#B955CB"
      />

      <FormKit
        type="colorpicker"
        label="Eyedropper disabled"
        inline
        eyeDropper={false}
        defaultValue="#B955CB"
      />
      {/* %partial% */}
    </>
  )
}
