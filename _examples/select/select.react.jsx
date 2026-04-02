import { FormKit } from '@formkit/react'

export default function App() {
  return (
    <>
      {/* %partial% */}
      <FormKit
        type="select"
        label="What planet is the largest?"
        placeholder="Select a planet"
        name="planet"
        options={{
          mercury: 'Mercury',
          venus: 'Venus',
          earth: 'Earth',
          mars: 'Mars',
          jupiter: 'Jupiter',
          saturn: 'Saturn',
          uranus: 'Uranus',
          neptune: 'Neptune',
        }}
        validation="required|is:jupiter"
        validationVisibility="dirty"
        validationMessages={{
          is: 'Nope! Jupiter is the largest planet',
        }}
      />
      {/* %partial% */}
    </>
  )
}
