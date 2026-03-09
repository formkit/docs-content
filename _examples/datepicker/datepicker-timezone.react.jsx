import { createRoot } from 'react-dom/client'
import { useEffect, useState } from 'react'
import { genesisIcons } from '@formkit/icons'
import { FormKit, FormKitProvider, defaultConfig } from '@formkit/react'
import { createProPlugin, inputs as proInputs } from '@formkit/pro'

const rentalCarStyles = `
  .rental-car-card {
    padding: 1em;
    background-color: #f5f5f5;
    border-radius: 0.25em;
    margin: 1em 0;
    border-color: #e5e5e5;
    display: flex;
    align-items: center;
  }

  .dark .rental-car-card {
    background-color: #26262f;
    border-color: #34373e;
  }

  .rental-car-card::before {
    content: '';
    aspect-ratio: 1.5;
    width: 100px;
    margin-right: 1em;
    background-image: url('https://cdn.formk.it/web-assets/rental-car.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }

  .rental-car-card::after {
    content: 'Tesla Model 420';
    font-size: 1em;
  }
`

const pro = createProPlugin('fk-52971f34220', proInputs)
const config = defaultConfig({
  plugins: [pro],
  icons: { ...genesisIcons },
})

function App() {
  const [value, setValue] = useState({})

  useEffect(() => {
    const style = document.createElement('style')
    style.textContent = rentalCarStyles
    document.head.appendChild(style)
    return () => style.remove()
  }, [])

  async function reserve() {
    await new Promise((resolve) => setTimeout(resolve, 200))
    alert('Your car is reserved!')
    setValue({})
  }

  return (
    <FormKitProvider config={config}>
      <FormKit
        type="form"
        modelValue={value}
        onUpdateModelValue={setValue}
        onSubmit={reserve}
      >
        {/* %partial% */}
        <h3>Car reservation (CCU Kolkata airport)</h3>
        <div className="rental-car-card" />
        <FormKit
          type="datepicker"
          name="pickup"
          label="Pickup time"
          placeholder="Pickup time"
          format={{ date: 'short', time: 'short' }}
          sequence={['day', 'time']}
          help="Select a date and time to pickup your rental car."
          minDate={new Date()}
          timezone="Asia/Kolkata"
          overlay
          popover
        />
        <FormKit
          type="datepicker"
          name="return"
          label="Return time"
          placeholder="Return time"
          format={{ date: 'short', time: 'short' }}
          sequence={['day', 'time']}
          minDate={new Date()}
          help="Select a date and time to return your rental car."
          timezone="Asia/Kolkata"
          overlay
          popover
        />
        {/* %partial% */}
      </FormKit>
      <pre>{JSON.stringify(value, null, 2)}</pre>
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
