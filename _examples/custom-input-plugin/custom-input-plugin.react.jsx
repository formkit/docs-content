import { createRoot } from 'react-dom/client'
import { FormKitProvider, defaultConfig } from '@formkit/react'
/* %partial% */
import { FormKit } from '@formkit/react'

const helloDefinition = {
  type: 'input',
  schema: ['Hello world'],
}

const myPlugin = () => {}

myPlugin.library = (node) => {
  if (node.props.type === 'hello') {
    node.define(helloDefinition)
  }
}

function CustomInputPluginExample() {
  return (
    <FormKit type="form" plugins={[myPlugin]} onSubmit={() => false}>
      <FormKit type="hello" />
    </FormKit>
  )
}
/* %partial% */

function App() {
  return (
    <FormKitProvider config={defaultConfig()}>
      <CustomInputPluginExample />
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
