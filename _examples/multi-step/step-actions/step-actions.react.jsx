import { createRoot } from 'react-dom/client'
import { FormKit, FormKitProvider } from '@formkit/react'
import config from '../formkit.config.react.jsx'

function App() {
  return (
    <FormKitProvider config={config}>
      {/* %partial% */}
      {/* we'll get rid of the default form actions */}
      <FormKit type="form" actions={false}>
        <FormKit type="multi-step" tabStyle="tab">
          <FormKit
            type="step"
            name="personalInfo"
            slots={{
              stepNext: ({ handlers }) => (
                <FormKit
                  type="button"
                  onClick={handlers.incrementStep(1)}
                  label="Custom Next"
                  data-next="true"
                />
              ),
            }}
          >
            <FormKit type="text" label="Name" prefixIcon="avatarMan" />
          </FormKit>

          <FormKit
            type="step"
            name="references"
            slots={{
              stepPrevious: ({ handlers }) => (
                <FormKit
                  type="button"
                  onClick={handlers.incrementStep(-1)}
                  label="Custom Previous"
                />
              ),
              stepNext: () => <FormKit type="submit" />,
            }}
          >
            <FormKit
              type="textarea"
              label="Please supply contact information for 2 references"
              validation="required"
            />
          </FormKit>
        </FormKit>
      </FormKit>
      {/* %partial% */}
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
