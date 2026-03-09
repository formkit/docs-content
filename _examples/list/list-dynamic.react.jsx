import { createRoot } from 'react-dom/client'
import { genesisIcons } from '@formkit/icons'
import { FormKit, FormKitProvider, defaultConfig } from '@formkit/react'

function App() {
  return (
    <FormKitProvider
      config={defaultConfig({
        icons: { ...genesisIcons },
      })}
    >
      {/* %partial% */}
      <h2 className="text-2xl font-bold mb-4">Guest list</h2>
      <FormKit type="list" value={['']} dynamic>
        {({ items, node, value }) => (
          <>
            {items?.map((item, index) => (
              <FormKit
                key={`${item}-${index}`}
                index={index}
                label="Guest name"
                placeholder="Guest name"
                suffixIcon="trash"
                onSuffixIconClick={() =>
                  node.input(value.filter((_, itemIndex) => itemIndex !== index))
                }
                sectionsSchema={{
                  suffixIcon: {
                    $el: 'button',
                  },
                }}
              />
            ))}
            <FormKit type="button" onClick={() => node.input(value.concat(''))}>
              + Add another
            </FormKit>
            <pre>{JSON.stringify(value, null, 2)}</pre>
          </>
        )}
      </FormKit>
      {/* %partial% */}
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
