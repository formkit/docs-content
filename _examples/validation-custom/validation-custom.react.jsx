import { createRoot } from 'react-dom/client'
import { FormKit, FormKitProvider, defaultConfig } from '@formkit/react'

// %partial%
function day(node, group = 'weekdays') {
  const dayNames = [
    'monday',
    'mon',
    'tuesday',
    'tue',
    'wednesday',
    'wed',
    'thursday',
    'thu',
    'friday',
    'fri',
    'saturday',
    'sat',
    'sunday',
    'sun',
  ]
  const value = node.value.toLowerCase()
  switch (group) {
    case 'weekdays':
      return dayNames.slice(0, 10).includes(value)
    case 'weekend':
      return dayNames.slice(10).includes(value)
    default:
      return dayNames.includes(value).includes(value)
  }
}

function ValidationCustomExample() {
  return (
    <FormKit
      type="text"
      label="Weekend day"
      validation="day:weekend"
      validationRules={{ day }}
      validationVisibility="live"
      help="Enter a weekend day."
    />
  )
}
// %partial%

function App() {
  return (
    <FormKitProvider config={defaultConfig()}>
      <ValidationCustomExample />
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
