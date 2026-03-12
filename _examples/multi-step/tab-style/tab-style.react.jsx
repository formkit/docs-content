import { FormKit } from '@formkit/react'
export { default as formkitConfig } from '../formkit.config.react.jsx'
import MultiStepContent from './multi-step-content.react.jsx'

export default function App() {
  return (
    <>
      {/* %partial% */}
      {/* default tab style */}
      <FormKit type="multi-step" tabStyle="tab">
        <MultiStepContent />
      </FormKit>

      {/* progress tab style */}
      <FormKit type="multi-step" tabStyle="progress">
        <MultiStepContent />
      </FormKit>

      {/* progress tab style w/ hidden labels */}
      <FormKit type="multi-step" tabStyle="progress" hideProgressLabels={true}>
        <MultiStepContent />
      </FormKit>
      {/* %partial% */}
    </>
  )
}
