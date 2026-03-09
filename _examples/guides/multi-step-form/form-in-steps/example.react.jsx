import { createRoot } from 'react-dom/client'
/* %partial% */
import { useState } from 'react'
import { FormKit } from '@formkit/react'

const stepNames = ['contactInfo', 'organizationInfo', 'application']

const camel2title = (str) =>
  str
    .replace(/([A-Z])/g, (match) => ` ${match}`)
    .replace(/^./, (match) => match.toUpperCase())
    .trim()

function FormInStepsExample() {
  const [step, setStep] = useState('contactInfo')

  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Carbon Sequestration Grant</h1>

      <FormKit type="form">
        {({ value }) => (
          <>
            <ul className="steps">
              {stepNames.map((stepName) => (
                <li
                  key={stepName}
                  className="step"
                  onClick={() => setStep(stepName)}
                  data-step-active={step === stepName}
                >
                  {camel2title(stepName)}
                </li>
              ))}
            </ul>

            <div className="form-body">
              <section hidden={step !== 'contactInfo'}>
                <FormKit type="group" id="contactInfo" name="contactInfo">
                  <FormKit
                    type="email"
                    label="*Email address"
                    validation="required|email"
                  />
                </FormKit>
              </section>

              <section hidden={step !== 'organizationInfo'}>
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

              <section hidden={step !== 'application'}>
                <FormKit id="application" type="group" name="application">
                  <FormKit
                    type="textarea"
                    label="*How will you use the money?"
                    validation="required|length:20,500"
                  />
                </FormKit>
              </section>

              <details className="docs-content-child">
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
      <FormInStepsExample />
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
