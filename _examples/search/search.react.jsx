import { FormKit } from '@formkit/react'

export default function App() {
  return (
    <>
      {/* %partial% */}
      <FormKit
        type="search"
        placeholder="Search..."
        label="Search"
        value="Apple Cider"
      />
      {/* %partial% */}
    </>
  )
}
