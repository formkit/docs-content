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

export default function App() {
  return <CustomInputPluginExample />
}
