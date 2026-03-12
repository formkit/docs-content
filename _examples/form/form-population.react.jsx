import { FormKit } from '@formkit/react'

function FormPopulationExample() {
  const save = () => {
    alert('Saved')
  }

  return (
    <>
      {/* %partial% */}
      <FormKit
        type="form"
        value={{
          location: 'New York City',
          duration: '2 weeks',
          price: 'average',
        }}
        submitLabel="Save"
        onSubmit={save}
      >
        <h2 className="text-xl font-bold mb-1">Edit request</h2>
        <p className="text-base mb-4">Edit your housing request below.</p>
        <FormKit
          type="text"
          name="location"
          label="Location"
          help="Where would you like to stay?"
          validation="required"
        />
        <FormKit
          type="text"
          name="duration"
          label="Duration"
          help="How long would you like to stay?"
          validation="required"
        />
        <FormKit
          type="radio"
          name="price"
          label="Pricing"
          help="How much are you able to pay"
          options={{
            low: 'Below average',
            average: 'Average',
            high: 'Super luxe',
          }}
        />
      </FormKit>
      {/* %partial% */}
    </>
  )
}

export default function App() {
  return <FormPopulationExample />
}
