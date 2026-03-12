export { default as formkitConfig } from './formkit.config.react.jsx'
/* %partial% */
import { FormKit } from '@formkit/react'

function CustomInputDefaultConfigExample() {
  return <FormKit type="hello" />
}
/* %partial% */

export default function App() {
  return <CustomInputDefaultConfigExample />
}
