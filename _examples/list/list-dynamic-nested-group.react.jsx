import { createRoot } from 'react-dom/client'
import { FormKit, FormKitProvider, defaultConfig } from '@formkit/react'

const groupStyle = {
  position: 'relative',
  padding: '10px',
  border: '1px solid grey',
  borderRadius: '10px',
  marginBottom: '5px',
}

const removeStyle = {
  position: 'absolute',
  top: '10px',
  right: '10px',
  border: '1px solid #2563eb',
  color: '#2563eb',
  padding: '0.75rem',
  background: 'none',
}

const addStyle = {
  border: '1px solid #2563eb',
  color: '#2563eb',
  padding: '0.75rem',
  background: 'none',
  marginBottom: '1rem',
}

function App() {
  return (
    <FormKitProvider config={defaultConfig()}>
      {/* %partial% */}
      <h2>Guest list</h2>
      <FormKit type="list" value={[{}]} dynamic>
        {({ items, node, value }) => (
          <>
            {items?.map((item, index) => (
              <FormKit key={`guest-${index}`} type="group" index={index}>
                <div style={groupStyle}>
                  <FormKit
                    type="text"
                    name="name"
                    label="Guest name"
                    placeholder="Guest name"
                  />
                  <FormKit type="number" name="age" label="Guest age" />
                  <button
                    type="button"
                    onClick={() =>
                      node.input(value.filter((_, itemIndex) => itemIndex !== index))
                    }
                    style={removeStyle}
                  >
                    - Remove
                  </button>
                </div>
              </FormKit>
            ))}

            <button
              type="button"
              onClick={() => node.input(value.concat({}))}
              style={addStyle}
            >
              + Add another
            </button>

            <pre>{JSON.stringify(value, null, 2)}</pre>
          </>
        )}
      </FormKit>
      {/* %partial% */}
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
