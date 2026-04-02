import { genesisIcons } from '@formkit/icons'
import { FormKit, defineFormKitConfig } from '@formkit/react'
import { createProPlugin, inputs as proInputs } from '@formkit/pro'

// %partial%
const frameworks = [
  { label: 'React', value: 'react' },
  { label: 'Vue', value: 'vue' },
  { label: 'Angular', value: 'angular' },
  { label: 'Svelte', value: 'svelte' },
]

function focusTaglist() {
  document.querySelector('#taglist')?.focus()
}

function TaglistExample() {
  return (
    <FormKit type="form" actions={false}>
      {({ value }) => (
        <>
          <FormKit type="button" onClick={focusTaglist}>
            Click me to focus taglist
          </FormKit>
          <FormKit
            id="taglist"
            type="taglist"
            name="framework"
            label="Choose a frontend framework"
            placeholder="Example placeholder"
            options={frameworks}
            defaultValue={['vue']}
            popover
            openOnFocus
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
