import { createRoot } from 'react-dom/client'
import { FormKitProvider } from '@formkit/react'
import config from './formkit.config.react.jsx'
/* %partial% */
import { FormKit } from '@formkit/react'

function ExportInputsFinalResultExample() {
  return (
    <>
      <FormKit type="text" label="FormKit's Built-in Text Input" />
      <FormKit
        type="floatingLabelTextInput"
        label="Our new Floating Label Text Input"
        help="Check out the HTML tab to compare the 2 inputs."
      />

      <style>{`
        .formkit-inner {
          position: relative;
        }

        .formkit-label-floating {
          position: absolute;
          left: 0.5em;
          color: grey;
          transition: all 0.25s;
          bottom: calc(100% - 0.5em);
          transform: translateY(100%);
          padding: 0.25em;
          box-sizing: border-box;
        }

        input:focus ~ .formkit-label-floating,
        textarea:focus ~ .formkit-label-floating,
        .formkit-label-floating[data-has-value='true'] {
          font-size: 0.7em;
          transform: translateY(50%);
          background-color: white;
          bottom: 100%;
        }
      `}</style>
    </>
  )
}
/* %partial% */

function App() {
  return (
    <FormKitProvider config={config}>
      <ExportInputsFinalResultExample />
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
