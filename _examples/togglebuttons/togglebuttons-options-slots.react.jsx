import { createRoot } from 'react-dom/client'
import { genesisIcons } from '@formkit/icons'
import {
  FormKit,
  FormKitIcon,
  FormKitProvider,
  defaultConfig,
} from '@formkit/react'
import { createProPlugin, inputs as proInputs } from '@formkit/pro'

const pro = createProPlugin('fk-52971f34220', proInputs)
const config = defaultConfig({
  plugins: [pro],
  icons: { ...genesisIcons },
})

function App() {
  return (
    <FormKitProvider config={config}>
      <FormKit type="form" actions={false}>
        {({ value }) => (
          <>
            {/* %partial% */}
            <FormKit
              type="togglebuttons"
              name="social_network"
              label="Preferred social network"
              options={['Facebook', 'Twitter', 'Instagram']}
              slots={{
                default: ({ option }) => (
                  <div className="w-5 h-5">
                    <FormKitIcon icon={String(option.value).toLowerCase()} />
                  </div>
                ),
              }}
            />
            {/* %partial% */}
            {value?.social_network ? (
              <p>{`I prefer ${value.social_network}`}</p>
            ) : null}
          </>
        )}
      </FormKit>
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
