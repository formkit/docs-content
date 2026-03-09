import { createRoot } from 'react-dom/client'
/* %partial% */
import { useEffect } from 'react'
import { FormKit } from '@formkit/react'
import { camel2title } from './utils.js'
import useSteps from './useSteps.react.js'

function ShowingAllStateExample() {
  const {
    steps,
    activeStep,
    setActiveStep,
    stepPlugin,
    visitedSteps,
    visitStep,
  } = useSteps()

  useEffect(() => {
    const timer = setTimeout(() => {
      visitStep('contactInfo')
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  function checkStepValidity(stepName) {
    const step = steps[stepName] || {}
    return (
      ((step.errorCount ?? 0) > 0 || (step.blockingCount ?? 0) > 0) &&
      visitedSteps.includes(stepName)
    )
  }

  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Carbon Sequestration Grant</h1>

      <FormKit type="form" plugins={[stepPlugin]}>
        {({ value }) => (
          <>
            <ul className="steps">
              {Object.entries(steps).map(([stepName, step]) => (
                <li
                  key={stepName}
                  className={`step${checkStepValidity(stepName) ? ' has-errors' : ''}`}
                  onClick={() => setActiveStep(stepName)}
                  data-step-valid={Boolean(step.valid) && (step.errorCount ?? 0) === 0}
                  data-step-active={activeStep === stepName}
                >
                  {checkStepValidity(stepName) ? (
                    <span className="step--errors">
                      {(step.errorCount ?? 0) + (step.blockingCount ?? 0)}
                    </span>
                  ) : null}
                  {camel2title(stepName)}
                </li>
              ))}
            </ul>

            <div className="form-body">
              <section hidden={activeStep !== 'contactInfo'}>
                <FormKit type="group" id="contactInfo" name="contactInfo">
                  <FormKit
                    type="email"
                    label="*Email address"
                    validation="required|email"
                    validationVisibility="live"
                  />
                </FormKit>
              </section>

              <section hidden={activeStep !== 'organizationInfo'}>
                <FormKit
                  id="organizationInfo"
                  type="group"
                  name="organizationInfo"
                >
                  <FormKit
                    type="text"
                    label="*Organization name"
                    validation="required|length:3"
                  />
                </FormKit>
              </section>

              <section hidden={activeStep !== 'application'}>
                <FormKit id="application" type="group" name="application">
                  <FormKit
                    type="textarea"
                    label="*How will you use the money?"
                    validation="required|length:20,500"
                  />
                </FormKit>
              </section>

              <details>
                <summary>Form data</summary>
                <pre>{JSON.stringify(value, null, 2)}</pre>
              </details>
            </div>
          </>
        )}
      </FormKit>
    </>
  )
}
/* %partial% */
import { FormKitProvider, defaultConfig } from '@formkit/react'

const styles = "@import url('https://cdn.formk.it/web-assets/multistep-form.css');"

function App() {
  return (
    <FormKitProvider config={defaultConfig()}>
      <style>{styles}</style>
      <ShowingAllStateExample />
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
