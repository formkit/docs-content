import { createRoot } from 'react-dom/client'
import { genesisIcons } from '@formkit/icons'
import { FormKit, FormKitProvider, defaultConfig } from '@formkit/react'
import { createProPlugin, inputs as proInputs } from '@formkit/pro'
import carBrands from '../_data/car-brands.js'

const pro = createProPlugin('fk-52971f34220', proInputs)
const config = defaultConfig({
  plugins: [pro],
  icons: { ...genesisIcons },
})

function App() {
  return (
    <FormKitProvider config={config}>
      {/* %partial% */}
      <FormKit
        type="autocomplete"
        name="autocomplete"
        label="Search for and select a car brand"
        placeholder="Example: Toyota"
        options={carBrands}
        selectionAppearance="option"
        popover
        slots={{
          option: ({ option }) => (
            <div className="flex items-center">
              <img
                src={option.logo}
                alt={`${option.label} logo`}
                className="mr-2 h-5 w-5"
              />
              <span>{option.label}</span>
            </div>
          ),
        }}
      />
      {/* %partial% */}
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
