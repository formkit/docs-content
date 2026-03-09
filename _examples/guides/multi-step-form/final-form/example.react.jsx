import { createRoot } from 'react-dom/client'
import { genesisIcons } from '@formkit/icons'
import { FormKitProvider, defaultConfig } from '@formkit/react'
import { createProPlugin, inputs as proInputs } from '@formkit/pro'
/* %partial% */
import { FormKit } from '@formkit/react'
import { camel2title, axios } from './utils.js'
import useSteps from './useSteps.react.js'

const dateRule = [['date_before', new Date(Date.now())]]

async function submitApp(formData, node) {
  try {
    await axios.post(formData)
    node.clearErrors()
    alert('Your application was submitted successfully!')
  } catch (err) {
    node.setErrors(err.formErrors, err.fieldErrors)
  }
}

function FinalFormExample() {
  const { steps, visitedSteps, activeStep, setActiveStep, setStep, stepPlugin } =
    useSteps()

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

      <FormKit
        type="form"
        plugins={[stepPlugin]}
        onSubmit={submitApp}
        actions={false}
      >
        {({ value, state: { valid } }) => (
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
                    type="text"
                    label="*Full name"
                    name="full_name"
                    placeholder="First Last"
                    validation="required"
                  />

                  <FormKit
                    type="email"
                    name="email"
                    label="*Email address"
                    placeholder="email@domain.com"
                    validation="required|email"
                  />

                  <FormKit
                    type="mask"
                    name="tel"
                    label="*Telephone"
                    mask="+1 (###) ###-####"
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
                    name="org_name"
                    placeholder="MyOrg, Inc."
                    help="Enter your official organization name."
                    validation="required|length:3"
                  />

                  <FormKit
                    type="date"
                    label="Date of incorporation"
                    validation={dateRule}
                    name="date_inc"
                  />
                </FormKit>
              </section>

              <section hidden={activeStep !== 'application'}>
                <FormKit id="application" type="group" name="application">
                  <FormKit
                    type="checkbox"
                    label="*I'm not a previous grant recipient"
                    help="Have you received a grant from us before?"
                    name="not_previous_recipient"
                    validation="required|accepted"
                    validationMessages={{
                      accepted: 'We can only give one grant per organization.',
                    }}
                  />
                  <FormKit
                    type="textarea"
                    label="*How will you use the money?"
                    name="how_money"
                    help="Must be between 20 and 500 characters."
                    placeholder="Describe how the grant will accelerate your efforts."
                    validation="required|length:20,500"
                  />
                </FormKit>
              </section>

              <div className="step-nav">
                <FormKit
                  type="button"
                  disabled={activeStep === 'contactInfo'}
                  onClick={() => setStep(-1)}
                >
                  Previous step
                </FormKit>
                <FormKit
                  type="button"
                  inputClass="next"
                  disabled={activeStep === 'application'}
                  onClick={() => setStep(1)}
                >
                  Next step
                </FormKit>
              </div>

              <details>
                <summary>Form data</summary>
                <pre>{JSON.stringify(value, null, 2)}</pre>
              </details>
            </div>

            <FormKit type="submit" label="Submit Application" disabled={!valid} />
          </>
        )}
      </FormKit>

      <p>
        <small>
          <em>
            *All the contents of this form are fictional (the company, grant,
            and form) for the purposes of demonstrating the capabilities of
            FormKit.
          </em>
        </small>
      </p>
    </>
  )
}
/* %partial% */

const pro = createProPlugin('fk-52971f34220', proInputs)
const config = defaultConfig({
  plugins: [pro],
  icons: { ...genesisIcons },
})
const styles = "@import url('https://cdn.formk.it/web-assets/multistep-form.css');"

function App() {
  return (
    <FormKitProvider config={config}>
      <style>{styles}</style>
      <FinalFormExample />
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
