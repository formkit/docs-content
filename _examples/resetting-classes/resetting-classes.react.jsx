import { FormKit } from '@formkit/react'
export { default as formkitConfig } from '../_no-tailwind/formkit.config.react.jsx'

function ResettingClassesExample() {
  return (
    <>
      {/* %partial% */}
      <FormKit
        classes={{
          outer: 'foo-bar',
          inner: {
            $reset: true,
          },
        }}
        outerClass="$reset only-me-please"
      />
      {/* %partial% */}
    </>
  )
}

export default function App() {
  return <ResettingClassesExample />
}
