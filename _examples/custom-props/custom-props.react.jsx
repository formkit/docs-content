/* %partial% */
import { FormKit } from '@formkit/react'

const hello = {
  type: 'input',
  props: ['location'],
  schema: [
    {
      $el: 'h1',
      children: ['Hello ', '$location'],
    },
  ],
}

function CustomPropsExample() {
  return <FormKit type={hello} location="Mars" />
}
/* %partial% */

export default function App() {
  return <CustomPropsExample />
}
