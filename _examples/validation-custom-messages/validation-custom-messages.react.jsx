import { FormKit } from '@formkit/react'

export default function App() {
  return (
    <>
      {/* %partial% */}
      <FormKit
        label="NBA G.O.A.T?"
        placeholder="Jordan, LeBron, Curry etc..."
        validation="is:Jordan,jordan"
        validationVisibility="live"
        validationMessages={{
          is: 'The correct answer is: Jordan.',
        }}
      />
      {/* %partial% */}
    </>
  )
}
