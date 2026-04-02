import { FormKit } from '@formkit/react'

export default function App() {
  return (
    <>
      {/* %partial% */}
      <FormKit
        type="url"
        label="Favorite website"
        placeholder="https://www.example.com..."
        validation="required|url"
        help="What is your favorite website?"
      />
      {/* %partial% */}
    </>
  )
}
