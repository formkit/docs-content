/* %partial% */
import { FormKitSchema } from '@formkit/react'

const schema = [
  {
    $formkit: 'group',
    name: 'group',
    config: { outerClass: 'half' },
    children: [
      {
        $formkit: 'email',
        label: 'Email',
      },
      {
        $formkit: 'email',
        label: "Your spouse's email",
      },
    ],
  },
]

function ClassesConfigSchemaExample() {
  return (
    <>
      <div className="wrapper">
        <FormKitSchema schema={schema} />
      </div>

      <style>{`
        .wrapper {
          display: flex;
        }

        .half {
          flex: 0 0 50%;
          padding-right: 10px;
        }
      `}</style>
    </>
  )
}
/* %partial% */

export default function App() {
  return <ClassesConfigSchemaExample />
}
