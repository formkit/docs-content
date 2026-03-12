import { FormKit } from '@formkit/react'
export { default as formkitConfig } from './formkit.config.react.jsx'

export default function App() {
  return (
    <>
      {/* %partial% */}
      <FormKit type="barcode" label="Barcode" help="Please scan a barcode" />
      {/* %partial% */}
    </>
  )
}
