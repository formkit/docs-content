import { FormKit } from '@formkit/react'
export { default as formkitConfig } from '../_no-tailwind/formkit.config.react.jsx'

function RemovingClassesExample() {
  return (
    <>
      {/* %partial% */}
      <FormKit
        outerClass={{
          'formkit-outer': false,
        }}
      />
      <FormKit outerClass="$remove:formkit-outer" />
      {/* %partial% */}
    </>
  )
}

export default function App() {
  return <RemovingClassesExample />
}
