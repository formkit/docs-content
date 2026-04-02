import { useState } from 'react'

import { FormKit } from '@formkit/react'
export { default as formkitConfig } from '../formkit.config.react.jsx'

export default function App() {
  // %partial%
  const [stepInformation, setStepInformation] = useState({})

  const handleBeforeStepChange = ({ currentStep, targetStep, delta }) => {
    setStepInformation({
      currentStepName: currentStep.stepName,
      targetStepName: targetStep.stepName,
      delta,
    })
    // Change to false to block all step changes.
    return true
  }
  // %partial%

  return (
    <>
      {/* %partial% */}
      <FormKit type="multi-step" beforeStepChange={handleBeforeStepChange}>
        <FormKit type="step" name="personalInfo">
          <FormKit type="text" label="Name" prefixIcon="avatarMan" />
        </FormKit>

        <FormKit type="step" name="favoriteThing">
          <FormKit type="text" label="Favorite Thing" prefixIcon="star" />
        </FormKit>

        <FormKit type="step" name="happyMemory">
          <FormKit type="text" label="Happy Memory" prefixIcon="happy" />
        </FormKit>
      </FormKit>
      {/* %partial% */}

      <h2>beforeStepChange Data:</h2>
      <pre>{JSON.stringify(stepInformation, null, 2)}</pre>
    </>
  )
}
