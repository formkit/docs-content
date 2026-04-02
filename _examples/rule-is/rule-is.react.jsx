import { FormKit } from '@formkit/react'

export default function App() {
  return (
    <>
      {/* %partial% */}
      <FormKit
        type="text"
        label="What's a food you might find in a breakfast buffet?"
        validation="is:eggs,bacon,sausage,coffee"
        validationVisibility="live"
        validationLabel="year"
        validationMessages={{ is: 'Not this buffet - try another.' }}
        value="cake"
      />
      {/* %partial% */}
    </>
  )
}
