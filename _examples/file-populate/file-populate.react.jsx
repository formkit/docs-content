import { FormKit } from '@formkit/react'

export default function App() {
  return (
    <>
      {/* %partial% */}
      <FormKit
        type="file"
        label="Your files"
        help='This input starts with files already "attached".'
        multiple
        value={[
          { name: 'purple-taste.pdf' },
          { name: 'chocolate-recipe.docx' },
        ]}
      />
      {/* %partial% */}
    </>
  )
}
