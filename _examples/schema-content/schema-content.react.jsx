import { FormKit } from '@formkit/react'

function SchemaContentExample() {
  return (
    <>
      {/* %partial% */}
      <FormKit
        type="text"
        label="Your name"
        help='Try entering the name "formkit".'
        sectionsSchema={{
          label: {
            children: [
              '$label',
              {
                if: '$value == "formkit"',
                then: {
                  $el: 'span',
                  attrs: {
                    style: { color: 'green' },
                  },
                  children: [
                    {
                      $el: 'span',
                      children: "That's our name too!",
                      attrs: {
                        class: 'ml-2',
                      },
                    },
                  ],
                },
              },
            ],
          },
        }}
        validationVisibility="live"
      />
      {/* %partial% */}
    </>
  )
}

export default function App() {
  return <SchemaContentExample />
}
