import { createRoot } from 'react-dom/client'
import { FormKit, FormKitProvider } from '@formkit/react'
import config from '../formkit.config.react.jsx'
import StepOne from '../step-one.react.jsx'
import StepTwo from '../step-two.react.jsx'
import StepThree from '../step-three.react.jsx'

function App() {
  return (
    <FormKitProvider config={config}>
      <h2>
        You can NOT advance through this multi-step input without completing
        each step.
      </h2>
      {/* %partial% */}
      <FormKit type="multi-step" allowIncomplete={false}>
        <FormKit type="step" name="personalInfo">
          {/* component for example brevity. */}
          <StepOne />
        </FormKit>

        <FormKit type="step" name="references">
          {/* component for example brevity. */}
          <StepTwo />
        </FormKit>

        <FormKit type="step" name="Supplemental">
          {/* component for example brevity. */}
          <StepThree />
        </FormKit>
      </FormKit>
      {/* %partial% */}
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
