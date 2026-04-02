/* %partial% */
import { FormKit } from '@formkit/react'
import { camel2title } from './utils.js'
import useSteps from './useSteps.react.js'

function ShowingValidityExample() {
  const { steps, activeStep, setActiveStep, stepPlugin } = useSteps()

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
                  className="step"
                  onClick={() => setActiveStep(stepName)}
                  data-step-valid={step.valid}
                  data-step-active={activeStep === stepName}
                >
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
                    value="test@example.com"
                    validation="required|email"
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

const styles =
  "@import url('https://cdn.formk.it/web-assets/multistep-form.css');"

export default function App() {
  return (
    <>
      <style>{styles}</style>
      <ShowingValidityExample />
    </>
  )
}
