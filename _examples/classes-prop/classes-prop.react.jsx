import { FormKit } from '@formkit/react'
export { default as formkitConfig } from '../_no-tailwind/formkit.config.react.jsx'

function ClassesPropExample() {
  return (
    <>
      {/* %partial% */}
      <FormKit
        classes={{
          outer: '$reset my-class',
          help: {
            'bg-red-500': true,
          },
        }}
        help="Please enter your name above."
      />
      {/* %partial% */}
    </>
  )
}

export default function App() {
  return <ClassesPropExample />
}
