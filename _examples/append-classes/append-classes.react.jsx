import { FormKit } from '@formkit/react'
export { default as formkitConfig } from '../_no-tailwind/formkit.config.react.jsx'

function AppendClassesExample() {
  return (
    <>
      {/* %partial% */}
      <FormKit
        outerClass="i-will-be-appended"
        wrapperClass={{
          'i-will-append': true,
          'i-will-not': false,
        }}
      />
      {/* %partial% */}
    </>
  )
}

export default function App() {
  return <AppendClassesExample />
}
