import { genesisIcons } from '@formkit/icons'
import { FormKit, FormKitIcon, defineFormKitConfig } from '@formkit/react'
import { createProPlugin, inputs as proInputs } from '@formkit/pro'

const pro = createProPlugin('fk-52971f34220', proInputs)
export const formkitConfig = defineFormKitConfig({
  plugins: [pro],
  icons: { ...genesisIcons },
})

export default function App() {
  return (
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
  )
}
