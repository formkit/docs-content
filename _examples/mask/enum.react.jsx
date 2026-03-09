import { createRoot } from 'react-dom/client'
import { genesisIcons } from '@formkit/icons'
import { FormKit, FormKitProvider, defaultConfig } from '@formkit/react'
import { createProPlugin, inputs as proInputs } from '@formkit/pro'

const pro = createProPlugin('fk-52971f34220', proInputs)
const config = defaultConfig({
  plugins: [pro],
  icons: { ...genesisIcons },
})

/* %partial% */
const tokens = {
  month: {
    type: 'enum',
    token: 'month',
    placeholder: 'month',
    selectDirection: 'left',
    values: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
  },
  day: {
    type: 'enum',
    token: 'day',
    placeholder: 'day',
    selectDirection: 'left',
    values: Array.from({ length: 31 }, (_, index) => `${index}`.padStart(2, '0')),
  },
  year: {
    type: 'enum',
    token: 'year',
    placeholder: 'year',
    selectDirection: 'left',
    values: Array.from({ length: 200 }, (_, index) => `${1900 + index}`),
  },
}
/* %partial% */

function App() {
  return (
    <FormKitProvider config={config}>
      {/* %partial% */}
      <FormKit
        type="mask"
        mode="select"
        mask="month day, year"
        tokens={tokens}
        label="(Enums) Birthday"
        help="Select a token and then type to autocomplete, or use the up/down arrows to select a value."
      />
      {/* %partial% */}
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
