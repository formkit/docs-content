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
    <>
      <FormKit
        name="framework"
        type="dropdown"
        label="Single-select"
        placeholder="Example placeholder"
        options={frameworks}
        popover
        defaultValue="vue"
        slots={{
          selection: ({ option, classes }) => (
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img
                src={option.asset}
                alt="optionAvatar"
                style={{ width: '1.25rem', marginRight: '0.5rem' }}
              />
              <span className={classes.selection}>{option.label}</span>
            </div>
          ),
        }}
      />

      <FormKit
        type="dropdown"
        name="framework"
        label="Tags appearance"
        placeholder="Example placeholder"
        options={frameworks}
        multiple
        selectionAppearance="tags"
        defaultValue={['vue', 'angular']}
        slots={{
          tag: ({ handlers, option, classes }) => (
            <div
              className={classes.tag}
              style={{ display: 'flex', alignItems: 'center' }}
            >
              <img
                src={option.asset}
                alt=""
                style={{
                  width: '1rem',
                  marginRight: '0.25rem',
                  backgroundColor: 'white',
                  borderRadius: '0.25rem',
                }}
              />
              <span className={classes.tagLabel}>{option.label}</span>
              <button
                onClick={handlers.removeSelection(option)}
                tabIndex={-1}
                type="button"
                className={classes.removeSelection}
                style={{
                  background: 'none',
                  border: 'none',
                  padding: 0,
                  marginLeft: '0.25rem',
                  cursor: 'pointer',
                }}
              >
                <span className={`${classes.closeIcon} ${classes.icon}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 16">
                    <path
                      d="M10,12.5c-.13,0-.26-.05-.35-.15L1.65,4.35c-.2-.2-.2-.51,0-.71,.2-.2,.51-.2,.71,0L10.35,11.65c.2,.2,.2,.51,0,.71-.1,.1-.23,.15-.35,.15Z"
                      fill="currentColor"
                    />
                    <path
                      d="M2,12.5c-.13,0-.26-.05-.35-.15-.2-.2-.2-.51,0-.71L9.65,3.65c.2-.2,.51-.2,.71,0,.2,.2,.2,.51,0,.71L2.35,12.35c-.1,.1-.23,.15-.35,.15Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
              </button>
            </div>
          ),
        }}
      />
    </>
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
