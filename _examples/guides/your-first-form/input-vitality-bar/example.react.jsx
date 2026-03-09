import { createRoot } from 'react-dom/client'
import { FormKit, FormKitProvider, defaultConfig } from '@formkit/react'

const noteStyle = {
  marginBottom: '1rem',
}

function App() {
  return (
    <FormKitProvider config={defaultConfig()}>
      <FormKit type="form" actions={false}>
        {({ value }) => (
          <>
            {/* %partial% */}
            <FormKit
              type="range"
              name="strength"
              id="strength"
              label="Strength"
              defaultValue={5}
              min={1}
              max={10}
              step={1}
              help="How many strength points should this character have?"
            />
            {/* %partial% */}
            <p>
              <em>
                <small style={noteStyle}>
                  Remember: You have a budget of 20 points to build your character.
                </small>
              </em>
            </p>
            <pre>{String(value?.strength ?? '')}</pre>
          </>
        )}
      </FormKit>
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
