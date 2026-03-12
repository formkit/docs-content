import { FormKit } from '@formkit/react'
export { default as formkitConfig } from '../_no-tailwind/formkit.config.react.jsx'

function SectionKeyClassExample() {
  return (
    <>
      {/* %partial% */}
      <FormKit
        outerClass="foo-bar"
        labelClass="$reset only-my-class"
        helpClass={{
          'add-this-class': true,
          'dont-add-this': false,
        }}
        type="email"
        label="Email address"
        placeholder="your-email@example.com"
        help="Please enter you email address."
        validation="required"
      />
      {/* %partial% */}
    </>
  )
}

export default function App() {
  return <SectionKeyClassExample />
}
