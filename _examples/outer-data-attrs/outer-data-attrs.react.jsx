import { createRoot } from 'react-dom/client'
import { FormKit, FormKitProvider } from '@formkit/react'
import config from '../_no-tailwind/formkit.config.react.jsx'

function OuterDataAttrsExample() {
  return (
    <>
      {/* %partial% */}
      <FormKit
        type="text"
        label="Email address"
        help="Enter a full email address"
        validation="required|email"
        validationVisibility="live"
      />

      <style>{`
        .formkit-outer[data-invalid] .formkit-inner {
          border-color: red;
          box-shadow: 0 0 0 1px red;
        }

        .formkit-outer[data-complete] .formkit-inner {
          border-color: red;
          box-shadow: 0 0 0 1px green;
        }

        .formkit-outer[data-complete] .formkit-inner::after {
          content: '✅';
          display: block;
          padding: 0.5em;
        }
      `}</style>
      {/* %partial% */}
    </>
  )
}

function App() {
  return (
    <FormKitProvider config={config}>
      <OuterDataAttrsExample />
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
