import { useState } from 'react'
import { createRoot } from 'react-dom/client'
import { genesisIcons } from '@formkit/icons'
import { FormKit, FormKitProvider, defaultConfig } from '@formkit/react'
import { createProPlugin, inputs as proInputs } from '@formkit/pro'

const pro = createProPlugin('fk-52971f34220', proInputs)
const config = defaultConfig({
  plugins: [pro],
  icons: { ...genesisIcons },
})

function App() {
  /* %partial% */
  const [color, setColor] = useState('')

  const boxStyle = {
    width: 30,
    height: 30,
  }
  /* %partial% */

  return (
    <FormKitProvider config={config}>
      <>
        {/* %partial% */}
        <FormKit
          type="mask"
          name="favorite_color"
          modelValue={color}
          onUpdateModelValue={(value) => setColor(typeof value === 'string' ? value : '')}
          mask="\\#hhhhhh"
          label="Favorite Color in Hex"
          help="Enter your favorite color in hexadecimal format. Or try FFA500."
        />
        <div style={{ ...boxStyle, backgroundColor: color || undefined }} />
        {/* %partial% */}
      </>
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
