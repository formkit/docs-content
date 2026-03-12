import { genesisIcons } from '@formkit/icons'
import { FormKit, defineFormKitConfig } from '@formkit/react'
import { createProPlugin, inputs as proInputs } from '@formkit/pro'
import carBrands from '../_data/car-brands.js'

const pro = createProPlugin('fk-52971f34220', proInputs)
export const formkitConfig = defineFormKitConfig({
  plugins: [pro],
  icons: { ...genesisIcons },
})

export default function App() {
  return (
    <>
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
    </>
  )
}
