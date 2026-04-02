import { FormKit } from '@formkit/react'
export { default as formkitConfig } from './formkit.config.react.jsx'

function GenerateClassesExample() {
  return (
    <>
      {/* %partial% */}
      <FormKit type="text" />
      <FormKit type="email" />
      {/* %partial% */}
    </>
  )
}

export default function App() {
  return <GenerateClassesExample />
}
