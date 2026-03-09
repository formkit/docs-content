import { createRoot } from 'react-dom/client'
/* %partial% */
import { useState } from 'react'
import { FormKit } from '@formkit/react'
/* %partial% */
import { FormKitProvider, defaultConfig } from '@formkit/react'

/* %partial% */
function VModelExample() {
  const [city, setCity] = useState('Florence')
  const cities = [
    'Prague',
    'Rome',
    'Berlin',
    'Amsterdam',
    'Barcelona',
    'London',
  ]

  function randomCity() {
    const index = Math.floor(Math.random() * (cities.length - 1))
    if (cities[index] !== city) {
      setCity(cities[index])
    } else {
      randomCity()
    }
  }

  return (
    <>
      <FormKit
        type="text"
        label="European city"
        help="What is your favorite European city?"
        modelValue={city}
        onUpdateModelValue={setCity}
      />
      <FormKit type="button" onClick={randomCity}>
        Random City
      </FormKit>
      <pre>{`City: ${city}`}</pre>
    </>
  )
}
/* %partial% */

function App() {
  return (
    <FormKitProvider config={defaultConfig()}>
      <VModelExample />
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
