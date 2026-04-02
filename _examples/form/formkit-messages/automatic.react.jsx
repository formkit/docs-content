/* %partial% */
import { FormKit, FormKitMessages } from '@formkit/react'

async function submitHandler(_data, node) {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  node.setErrors(["The server doesn't like your name. Sorry."])
}

function AutomaticMessagesExample() {
  return (
    <FormKit type="form" onSubmit={submitHandler}>
      <FormKitMessages />
      <FormKit type="text" label="Your Name" validation="required" />
      <FormKit
        type="checkbox"
        label="Top 3 headphones"
        validationLabel="Headphones"
        options={[
          'Galaxy buds',
          'Bowers & Wilkins PX8',
          'AirPods Pro',
          'AirPods Max',
          'Sony WH1000-XM4',
          'Bose 700',
        ]}
        validation="required|min:2"
      />

      <p>
        <em>
          <small className="mb-4">
            Submit to see moved messages. Normally messages are at the bottom.
          </small>
        </em>
      </p>
    </FormKit>
  )
}
/* %partial% */

export default function App() {
  return <AutomaticMessagesExample />
}
