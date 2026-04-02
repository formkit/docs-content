// %partial%
import { useMemo, useState } from 'react'
import { FormKit, FormKitSchema } from '@formkit/react'

const schema = [
  {
    $el: 'div',
    children: '$: "Qty: " + $count + " x " + $format($price)',
  },
  {
    $el: 'div',
    children: ['Shipping: ', '$format($ship)'],
  },
  {
    $el: 'div',
    children: ['Total: ', '$format(($count * $price) + $ship)'],
  },
]

function Example() {
  const [count, setCount] = useState(1)
  const format = useMemo(
    () =>
      Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format,
    []
  )
  const data = {
    count,
    price: 15.29,
    ship: 9.99,
    format,
  }

  return (
    <>
      <FormKitSchema schema={schema} data={data} />
      <FormKit
        type="button"
        onClick={() => setCount((current) => current + 1)}
        outerClass="mt-6"
      >
        Add to cart
      </FormKit>
    </>
  )
}
// %partial%

export default function App() {
  return <Example />
}
