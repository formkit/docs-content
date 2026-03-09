import { createRoot } from 'react-dom/client'
import { genesisIcons } from '@formkit/icons'
import { FormKit, FormKitProvider, defaultConfig } from '@formkit/react'
import { createProPlugin, inputs as proInputs } from '@formkit/pro'
import { getGuests, loadGuest } from './api.js'
import { initials } from './utils.js'

const pro = createProPlugin('fk-52971f34220', proInputs)
const config = defaultConfig({
  plugins: [pro],
  icons: { ...genesisIcons },
})

const rowStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}

const primaryStyle = {
  fontSize: '0.8em',
  marginBottom: '0.2em',
}

const secondaryStyle = {
  fontSize: '0.7em',
  color: '#666',
  marginBottom: '0.1em',
}

const infoStyle = {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
}

const avatarStyle = {
  fontSize: '33px',
  overflow: 'hidden',
  display: 'block',
  borderRadius: '2em',
  position: 'relative',
  width: '1em',
  height: '1em',
  flex: '0 0 1em',
  backgroundColor: 'rgb(2, 117, 255)',
  marginRight: '0.3em',
}

const initialsStyle = {
  position: 'absolute',
  zIndex: 1,
  width: '100%',
  height: '100%',
  borderRadius: '2em',
  overflow: 'hidden',
  background: 'var(--gradient-avatar)',
  color: 'white',
  fontSize: '0.35em',
  lineHeight: 1.1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: 300,
  textTransform: 'uppercase',
}

function App() {
  return (
    <FormKitProvider config={config}>
      {/* %partial% */}
      <FormKit
        type="form"
        actions={false}
        value={{
          vips: [3, 6],
        }}
      >
        <FormKit
          name="vips"
          type="transferlist"
          label="Choose VIPs for the party"
          sourceLabel="Guests"
          targetLabel="VIPs"
          sourceEmptyMessage="No guests found"
          targetEmptyMessage="No VIPs selected"
          options={getGuests}
          optionLoader={loadGuest}
          slots={{
            targetOption: ({ option }) => (
              <div style={rowStyle}>
                <span style={avatarStyle}>
                  <span style={initialsStyle}>{initials(option.label)}</span>
                </span>
                <div style={infoStyle}>
                  <div style={primaryStyle}>{option.label}</div>
                  <div style={secondaryStyle}>{option.email}</div>
                  <div style={secondaryStyle}>{option.phone}</div>
                </div>
              </div>
            ),
          }}
        />
      </FormKit>
      {/* %partial% */}
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
