import { createRoot } from 'react-dom/client'
import { useEffect, useState } from 'react'
import { genesisIcons } from '@formkit/icons'
import { FormKit, FormKitProvider, defaultConfig } from '@formkit/react'
import { createProPlugin, inputs as proInputs } from '@formkit/pro'

const pro = createProPlugin('fk-52971f34220', proInputs)
const config = defaultConfig({
  plugins: [pro],
  icons: { ...genesisIcons },
})

// %partial%
const UNAVAILABLE_DATES_URL =
  'https://api-formkit-docs-examples.formkit.workers.dev/blocked-dates'

function Example() {
  const [unavailableDates, setUnavailableDates] = useState([])

  useEffect(() => {
    fetch(UNAVAILABLE_DATES_URL)
      .then((response) => response.json())
      .then((data) => {
        setUnavailableDates(data.map(([start, end]) => [new Date(start), new Date(end)]))
      })
      .catch((error) => console.error(error))
  }, [])

  function disabledDays(node, date) {
    // Re-implement min-date and max-date.
    if (node.props.minDate && date < node.props.minDate) return true
    if (node.props.maxDate && date > node.props.maxDate) return true

    for (const [start, end] of unavailableDates) {
      if (date >= start && date <= end) return true
    }
    return false
  }

  return (
    <>
      <h3>Bike rental (fetch from API)</h3>
      <FormKit
        type="datepicker"
        name="pickup"
        label="Pickup date."
        placeholder="Select a pickup date"
        help="Select what day you want to pickup your bike"
        minDate={new Date()}
        maxDate={new Date(new Date().setDate(new Date().getDate() + 90))}
        disabledDays={disabledDays}
        popover
        pickerOnly
        slots={{
          day: ({ classes, day, fns, minDate, maxDate }) => (
            <div className={classes.day} style={{ position: 'relative' }}>
              {day.getDate()}
              {fns.isDisabled(day) && day > minDate && day < maxDate ? (
                <div
                  style={{
                    width: '5px',
                    height: '5px',
                    borderRadius: '50%',
                    backgroundColor: 'red',
                    position: 'absolute',
                    bottom: '3px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                  }}
                />
              ) : null}
            </div>
          ),
        }}
      />
    </>
  )
}
// %partial%

function App() {
  return (
    <FormKitProvider config={config}>
      <Example />
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
