import { createRoot } from 'react-dom/client'
import { genesisIcons } from '@formkit/icons'
import { FormKit, FormKitProvider, defaultConfig } from '@formkit/react'
import { createProPlugin, inputs as proInputs } from '@formkit/pro'
import { nbaTopPlayers } from '../_data/nba-top-players.js'
import { michaelJordan } from './utils.js'

const pro = createProPlugin('fk-52971f34220', proInputs)
const config = defaultConfig({
  plugins: [pro],
  icons: { ...genesisIcons },
})

const rowStyle = {
  display: 'flex',
  alignItems: 'center',
}

const nameStyle = {
  fontSize: '0.8em',
}

const rankStyle = {
  marginRight: '1em',
  color: 'black',
}

const avatarStyle = {
  overflow: 'hidden',
  display: 'block',
  borderRadius: '2em',
  position: 'relative',
  width: '3em',
  height: '3em',
  flex: '0 0 2em',
  marginRight: '0.5em',
}

const imageStyle = {
  width: '100%',
  pointerEvents: 'none',
}

function App() {
  return (
    <FormKitProvider config={config}>
      {/* %partial% */}
      <FormKit
        type="transferlist"
        label="Rank the top 10 NBA players"
        help="Drag and drop to rank your top 10 NBA players."
        options={nbaTopPlayers}
        searchable
        placeholder="Search"
        targetLabel="Your top 10"
        sourceLabel="All-time NBA players"
        validation="michaelJordan"
        validationRules={{ michaelJordan }}
        validationVisibility="dirty"
        validationMessages={{
          michaelJordan: 'Michael Jordan is the undisputed GOAT.',
        }}
        slots={{
          sourceOption: ({ option }) => (
            <div style={rowStyle}>
              <span style={avatarStyle}>
                <img src={option.img_url} alt="" style={imageStyle} />
              </span>
              <span style={nameStyle}>{option.label}</span>
            </div>
          ),
          targetOption: ({ option, index }) => (
            <div style={rowStyle}>
              <span style={rankStyle}>{(index ?? 0) + 1}</span>
              <span style={avatarStyle}>
                <img src={option.img_url} alt="" style={imageStyle} />
              </span>
              <span style={nameStyle}>{option.label}</span>
            </div>
          ),
        }}
      />
      {/* %partial% */}
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
