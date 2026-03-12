import { useState } from 'react'

import { genesisIcons } from '@formkit/icons'
import { FormKit, defineFormKitConfig } from '@formkit/react'
import { createProPlugin, inputs as proInputs } from '@formkit/pro'

const pro = createProPlugin('fk-52971f34220', proInputs)
export const formkitConfig = defineFormKitConfig({
  plugins: [pro],
  icons: { ...genesisIcons },
})

export default function App() {
  /* %partial% */
  const [color, setColor] = useState('')

  const boxStyle = {
    width: 30,
    height: 30,
  }
  /* %partial% */

  return (
    <>
      {/* %partial% */}
      <FormKit
        type="mask"
        name="favorite_color"
        modelValue={color}
        onUpdateModelValue={(value) =>
          setColor(typeof value === 'string' ? value : '')
        }
        mask="\\#hhhhhh"
        label="Favorite Color in Hex"
        help="Enter your favorite color in hexadecimal format. Or try FFA500."
      />
      <div style={{ ...boxStyle, backgroundColor: color || undefined }} />
      {/* %partial% */}
    </>
  )
}
