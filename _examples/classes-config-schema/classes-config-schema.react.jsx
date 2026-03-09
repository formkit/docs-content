import { createRoot } from 'react-dom/client'
import { FormKitProvider, defaultConfig } from '@formkit/react'

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

function App() {
  return (
    <FormKitProvider config={defaultConfig()}>
      <ClassesConfigSchemaExample />
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
