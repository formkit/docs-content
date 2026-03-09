import { createRoot } from 'react-dom/client'
import { FormKitProvider, defaultConfig } from '@formkit/react'
/* %partial% */
import { FormKit } from '@formkit/react'

const nextMonday = new Date()
nextMonday.setDate(
  nextMonday.getDate() + ((((7 - nextMonday.getDay()) % 7) + 1) % 7)
)

function IncompleteMessageExample() {
  return (
    <FormKit
      type="form"
      onSubmit={() => false}
      incompleteMessage="Achtung! We can not service your Deutsche automobil without all the fields being filled out correctly."
    >
      <h2 className="text-xl font-bold mb-4">Schedule service</h2>
      <FormKit
        type="date"
        name="dropoff_date"
        label="Appointment day"
        help="When can you bring your car in?"
        validation={[['required'], ['date_after', nextMonday]]}
      />
      <FormKit
        type="select"
        name="vehicle"
        label="Vehicle type"
        placeholder="Select a brand"
        options={['Audi', 'BMW', 'Mercedes', 'Volkswagen']}
        validation="required|is:Audi,Volkswagen"
        validationMessages={{
          is: ({ node: { value } }) =>
            `Sorry, we don't service ${value} anymore.`,
        }}
      />
      <FormKit
        type="text"
        name="model"
        label="Model"
        placeholder="ID-6"
        validation="required"
      />
    </FormKit>
  )
}
/* %partial% */

function App() {
  return (
    <FormKitProvider config={defaultConfig()}>
      <IncompleteMessageExample />
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
