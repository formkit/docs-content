import { createRoot } from 'react-dom/client'
import { genesisIcons } from '@formkit/icons'
import { FormKit, FormKitProvider, defaultConfig } from '@formkit/react'
import { createProPlugin, inputs as proInputs } from '@formkit/pro'

const frameworks = [
  { label: 'React', value: 'react' },
  { label: 'Vue', value: 'vue' },
  { label: 'Angular', value: 'angular' },
  { label: 'Svelte', value: 'svelte' },
]

const pro = createProPlugin('fk-52971f34220', proInputs)
const config = defaultConfig({
  plugins: [pro],
  icons: { ...genesisIcons },
})

// %partial%
function focusAutocomplete() {
  document.getElementById('autocomplete')?.focus()
}
// %partial%

function App() {
  return (
    <FormKitProvider config={config}>
      {/* %partial% */}
      <FormKit type="button" onClick={focusAutocomplete}>
        Click me to focus autocomplete
      </FormKit>
      <FormKit
        id="autocomplete"
        type="autocomplete"
        name="framework"
        label="Choose a frontend framework"
        placeholder="Example placeholder"
        options={frameworks}
        openOnFocus
        popover
      />
      {/* %partial% */}
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
