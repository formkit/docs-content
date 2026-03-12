import { genesisIcons } from '@formkit/icons'
import { defineFormKitConfig } from '@formkit/react'
import { createProPlugin, inputs as proInputs } from '@formkit/pro'
/* %partial% */
import { useState } from 'react'
import { FormKit, FormKitMessages } from '@formkit/react'

const toastStyle = {
  position: 'fixed',
  top: 0,
  right: 0,
  width: '300px',
  padding: '1rem',
}

const toastPanelStyle = {
  padding: '0.75em',
  borderRadius: '0.25em',
  boxShadow: '0 0 1em rgba(0, 0, 0, 0.1)',
  backgroundColor: '#8d2c2c',
  color: 'white',
}

async function submitHandler(_data, node) {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  node.setErrors([
    'Gambling is illegal.',
    'Your crime has been reported to the authorities.',
  ])
}

function ToastMessagesExample() {
  const [formNode, setFormNode] = useState(undefined)

  return (
    <>
      <FormKit type="form" onSubmit={submitHandler} onNode={setFormNode}>
        <FormKit
          type="checkbox"
          label="Soccer nations"
          validationLabel="countries"
          options={[
            'Brazil',
            'Germany',
            'Italy',
            'Argentina',
            'Uruguay',
            'France',
            'England',
            'Spain',
          ]}
          help="Which 4 countries will be in the semi finals of the next world cup?"
          validation="required|*min:2"
        />
        <FormKit
          type="mask"
          label="Bet amount"
          showMask={false}
          mask="{#,##|repeat}{#.##}"
          prefix="$"
          reverse
          unmaskValue
          allowIncomplete
          validation="required|length:4"
          validationMessages={{
            length: 'Minimum bet is $10.00',
          }}
          help="How much do you want to bet?"
        />
      </FormKit>

      <div style={toastStyle}>
        <div style={toastPanelStyle}>
          <FormKitMessages node={formNode} />
        </div>
      </div>
    </>
  )
}
/* %partial% */

const pro = createProPlugin('fk-52971f34220', proInputs)
export const formkitConfig = defineFormKitConfig({
  plugins: [pro],
  icons: { ...genesisIcons },
})

export default function App() {
  return <ToastMessagesExample />
}
