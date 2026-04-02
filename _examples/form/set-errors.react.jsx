/* %partial% */
import { FormKit, setErrors } from '@formkit/react'

async function order(data) {
  try {
    await fakeApiCall(data)
  } catch (inputErrors) {
    setErrors(
      'order-form',
      ['There was an error with your order!'],
      inputErrors
    )
  }
}

function fakeApiCall() {
  return new Promise((_, reject) => {
    setTimeout(
      () =>
        reject({
          flavor: 'Sorry, that type is now sold out!',
        }),
      1000
    )
  })
}

function SetErrorsExample() {
  return (
    <FormKit
      type="form"
      id="order-form"
      submitLabel="Order chips"
      onSubmit={order}
    >
      <h2 className="text-xl font-bold mb-4">Bulk order</h2>
      <FormKit
        type="select"
        name="flavor"
        label="Chip flavor"
        validation="required"
        options={{
          bbq: 'Barbecue',
          pickle: 'Dill pickle',
          habanero: 'Habanero',
          boring: 'Original',
          vinegar: 'Salt & Vinegar',
        }}
      />
      <FormKit
        type="number"
        step="1"
        name="quantity"
        label="Quantity"
        value="500"
        validation="required|min:100"
        validationMessages={{
          min: 'Minimum order is 100 units.',
        }}
      />
    </FormKit>
  )
}
/* %partial% */

export default function App() {
  return <SetErrorsExample />
}
