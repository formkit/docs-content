import { createRoot } from 'react-dom/client'
import { genesisIcons } from '@formkit/icons'
import { FormKit, FormKitProvider, defaultConfig } from '@formkit/react'
import { createProPlugin, inputs as proInputs } from '@formkit/pro'

const pro = createProPlugin('fk-52971f34220', proInputs)
const config = defaultConfig({
  plugins: [pro],
  icons: { ...genesisIcons },
})

function App() {
  return (
    <FormKitProvider config={config}>
      <style>{`
        [data-type='slider'] .formkit-linked-values .formkit-inner {
          padding-left: 0.5em;
        }
        [data-type='slider'] .formkit-linked-values .formkit-inner > span {
          margin-top: 3px;
        }
        [data-type='slider'] .formkit-linked-values .formkit-inner .formkit-input {
          padding-left: 0.25em;
        }
      `}</style>
      {/* %partial% */}
      <FormKit
        type="slider"
        max={1000}
        defaultValue={[300, 800]}
        label="Linked input attrs"
        showInput
        inputAttrs={{
          sectionsSchema: {
            prefix: {
              $el: 'span',
              children: '$',
            },
          },
        }}
        minInputAttrs={{
          label: 'Minimum Price',
        }}
        maxInputAttrs={{
          label: 'Maximum Price',
        }}
      />
      {/* %partial% */}
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
