import { FormKit } from '@formkit/react'

/* %partial% */
const castNumber = (node) => {
  node.hook.input((value, next) => next(Number(value)))
}
/* %partial% */

function InputCastNumberExample() {
  return (
    <>
      {/* %partial% */}
      <FormKit
        type="range"
        name="strength"
        id="strength"
        label="Strength"
        defaultValue={5}
        min={1}
        max={10}
        step={1}
        help="How many strength points should this character have?"
        plugins={[castNumber]}
      />

      <p>Strength is now a Number instead of a String.</p>
      {/* %partial% */}
    </>
  )
}

export default function App() {
  return <InputCastNumberExample />
}
