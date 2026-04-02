import { genesisIcons } from '@formkit/icons'
import { FormKit, defineFormKitConfig } from '@formkit/react'

export const formkitConfig = defineFormKitConfig({
  icons: { ...genesisIcons },
})

export default function App() {
  return (
    <>
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
                  node.input(
                    value.filter((_, itemIndex) => itemIndex !== index)
                  )
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
    </>
  )
}
