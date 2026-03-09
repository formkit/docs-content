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
        label="Search and select a car brand"
        placeholder="Example: Toyota"
        options={carBrands}
        popover
        selectionAppearance="option"
        defaultValue="audi"
        slots={{
          selection: ({ option }) => (
            <div className="flex items-center">
              <img
                src={option.logo}
                alt={`${option.label} logo`}
                className="h-10 w-10 p-2"
              />
              <span>{option.label}</span>
            </div>
          ),
        }}
      />
      <FormKit
        type="autocomplete"
        name="autocomplete"
        label="Search and select a car brand"
        placeholder="Example: Toyota"
        options={carBrands}
        selectionAppearance="option"
        multiple
        defaultValue={['toyota', 'honda']}
        selectionClass="!p-0"
        slots={{
          selection: ({ option }) => (
            <div className="flex items-center">
              <img
                src={option.logo}
                alt={`${option.label} logo`}
                className="h-10 w-10 p-2"
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
