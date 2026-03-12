import { FormKit } from '@formkit/react'

/* %partial% */
function rootClasses(sectionKey) {
  return {
    [`foo-${sectionKey}`]: true,
  }
}

function RootClassesExample() {
  return <FormKit config={{ rootClasses }} />
}
/* %partial% */

export default function App() {
  return <RootClassesExample />
}
