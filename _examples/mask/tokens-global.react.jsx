import { FormKit } from '@formkit/react'
export { default as formkitConfig } from './formkit.config.react.jsx'

export default function App() {
  return (
    <>
      {/* %partial% */}
      <FormKit
        type="mask"
        name="tracking"
        mask="usps-zzz-zzzz-zzzz-zzzz"
        defaultValue="usps-mk6-8d2z-8fggy-921x"
        label="Tracking number"
      />
      {/* %partial% */}
    </>
  )
}
