import { FormKit } from '@formkit/react'

function randomColor(event) {
  const hex = Math.floor(Math.random() * 16777215).toString(16)
  event.currentTarget.setAttribute('style', `background-color: #${hex}88;`)
}

export default function App() {
  return (
    <>
      {/* %partial% */}
      <FormKit
        type="button"
        help="You can bind event listeners."
        onClick={randomColor}
      >
        Click me!
      </FormKit>
      {/* %partial% */}
    </>
  )
}
