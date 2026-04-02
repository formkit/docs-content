import { genesisIcons } from '@formkit/icons'
import { FormKit, FormKitIcon, defineFormKitConfig } from '@formkit/react'
import { createProPlugin, inputs as proInputs } from '@formkit/pro'

// %partial%
import carBrands from '../_data/car-brands.js'

function TaglistExample() {
  return (
    <FormKit type="form" actions={false}>
      {({ value }) => (
        <>
          <FormKit
            type="taglist"
            name="taglist"
            label="Search and select a car brand"
            placeholder="Example: Toyota"
            options={carBrands}
            popover
            selectionAppearance="option"
            defaultValue={['audi', 'bmw']}
            multiple
            slots={{
              tag: ({ handlers, option, classes }) => (
                <div className={classes.tag}>
                  <img src={option.logo} className="w-5 mr-2 bg-white" />
                  <span className={classes.tagLabel}>{option.label}</span>
                  <button
                    type="button"
                    tabIndex={-1}
                    className="formkit-remove-selection"
                    onClick={(event) => {
                      event.preventDefault()
                      handlers.removeSelection(option)()
                    }}
                  >
                    <span className="formkit-close-icon formkit-icon">
                      <FormKitIcon icon="close" />
                    </span>
                  </button>
                </div>
              ),
            }}
          />
          <pre>{JSON.stringify(value, null, 2)}</pre>
        </>
      )}
    </FormKit>
  )
}
// %partial%

const pro = createProPlugin('fk-52971f34220', proInputs)
export const formkitConfig = defineFormKitConfig({
  plugins: [pro],
  icons: { ...genesisIcons },
})

export default function App() {
  return <TaglistExample />
}
