import { FormKit } from '@formkit/react'

export default function App() {
  return (
    <>
      {/* %partial% */}
      <FormKit
        type="select"
        label="Letters or numbers"
        options={[
          {
            group: 'Letters',
            options: ['A', 'B', 'C'],
          },
          {
            group: 'Numbers',
            options: [1, 2, 3],
          },
        ]}
      />
      {/* %partial% */}
    </>
  )
}
