import { createRoot } from 'react-dom/client'
import { genesisIcons } from '@formkit/icons'
import { FormKit, FormKitProvider, defaultConfig } from '@formkit/react'
import { autocomplete, createProPlugin } from '@formkit/pro'
import { nbaTopPlayers } from '../_data/nba-top-players.js'

const pro = createProPlugin('fk-52971f34220', { autocomplete })

function App() {
  return (
    <FormKitProvider
      config={defaultConfig({
        plugins: [pro],
        icons: { ...genesisIcons },
      })}
    >
      {/* %partial% */}
      <h2 className="text-2xl font-bold mb-4">NBA All Time Starting Five</h2>
      <FormKit type="list">
        {({ value }) => (
          <>
            <FormKit
              label="Point Guard"
              type="autocomplete"
              placeholder="Select a player"
              options={nbaTopPlayers}
            />
            <FormKit
              label="Shooting Guard"
              type="autocomplete"
              placeholder="Select a player"
              options={nbaTopPlayers}
            />
            <FormKit
              label="Small Forward"
              type="autocomplete"
              placeholder="Select a player"
              options={nbaTopPlayers}
            />
            <FormKit
              label="Power Forward"
              type="autocomplete"
              placeholder="Select a player"
              options={nbaTopPlayers}
            />
            <FormKit
              label="Center"
              type="autocomplete"
              placeholder="Select a player"
              options={nbaTopPlayers}
            />
            <pre>{JSON.stringify(value, null, 2)}</pre>
          </>
        )}
      </FormKit>
      {/* %partial% */}
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
