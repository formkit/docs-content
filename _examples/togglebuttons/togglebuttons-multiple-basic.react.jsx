import { genesisIcons } from '@formkit/icons'
import { FormKit, defineFormKitConfig } from '@formkit/react'
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
            name="transportation"
            label="Travel Preference"
            options={['Car', 'Airplane', 'Train', 'Hoverboard']}
          />

          <FormKit
            type="togglebuttons"
            name="shirt_size"
            label="T-shirt Size"
            options={{
              sm: 'Small',
              md: 'Medium',
              lg: 'Large',
              xl: 'X-Large',
            }}
          />

          <FormKit
            type="togglebuttons"
            name="pizza_toppings"
            label="Pizza Toppings"
            options={[
              'Pepperoni',
              'Sausage',
              'Mushrooms',
              {
                value: 'Pineapple',
                label: 'Pineapple',
                disabled: true,
                help: "Sorry, pineapple doesn't belong on pizza",
              },
            ]}
          />
          {/* %partial% */}
          <pre>{JSON.stringify(value, null, 2)}</pre>
        </>
      )}
    </FormKit>
  )
}
