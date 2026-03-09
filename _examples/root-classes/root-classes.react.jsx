import { createRoot } from 'react-dom/client'
import { FormKit, FormKitProvider, defaultConfig } from '@formkit/react'

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

function App() {
  return (
    <FormKitProvider config={defaultConfig()}>
      <RootClassesExample />
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
