import { createRoot } from 'react-dom/client'
import { genesisIcons } from '@formkit/icons'
import { FormKit, FormKitProvider, defaultConfig } from '@formkit/react'
import { createProPlugin, inputs as proInputs } from '@formkit/pro'

// %partial%
const frameworks = [
  {
    label: 'React',
    value: 'react',
    asset:
      'https://s3.amazonaws.com/cdn.formk.it/example-assets/frontend-framework-logos/react-logo.png',
  },
  {
    label: 'Vue',
    value: 'vue',
    asset:
      'https://s3.amazonaws.com/cdn.formk.it/example-assets/frontend-framework-logos/vue-logo.png',
  },
  {
    label: 'Angular',
    value: 'angular',
    asset:
      'https://s3.amazonaws.com/cdn.formk.it/example-assets/frontend-framework-logos/angular-logo.png',
  },
  {
    label: 'Svelte',
    value: 'svelte',
    asset:
      'https://s3.amazonaws.com/cdn.formk.it/example-assets/frontend-framework-logos/svelte-logo.png',
  },
]

function DropdownExample() {
  return (
    <FormKit
      type="dropdown"
      name="framework"
      label="Choose a frontend framework"
      placeholder="Example placeholder"
      popover
      options={frameworks}
      slots={{
        option: ({ option, classes }) => (
          <div className={`${classes.option} flex items-center`}>
            <img src={option.asset} alt="optionAvatar" className="w-5 mr-2" />
            <span>{option.label}</span>
          </div>
        ),
      }}
    />
  )
}
// %partial%

const pro = createProPlugin('fk-52971f34220', proInputs)
const config = defaultConfig({
  plugins: [pro],
  icons: { ...genesisIcons },
})

function App() {
  return (
    <FormKitProvider config={config}>
      <DropdownExample />
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
