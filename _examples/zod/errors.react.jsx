import { createRoot } from 'react-dom/client'
import { FormKit, FormKitProvider, defaultConfig } from '@formkit/react'
import { createZodPlugin } from '@formkit/zod'
import { z } from 'zod'

// %partial%
const zodSchema = z.object({
  personalInfo: z.object({
    firstName: z.string().min(3).max(25),
    lastName: z.string().min(3).max(25),
  }),
  missingField: z.number(),
})

const [zodPlugin, submitHandler] = createZodPlugin(
  zodSchema,
  async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000))
  }
)

function setupFormNode(node) {
  const invalidValues = {
    personalInfo: { firstName: 'A', lastName: 'K' },
    missingField: 'not a number',
  }
  const zodParseResults = zodSchema.safeParse(invalidValues)
  node.setZodErrors(zodParseResults.error)
}
// %partial%

function App() {
  return (
    <FormKitProvider config={defaultConfig()}>
      {/* %partial% */}
      <h1 className="text-2xl font-bold mb-2">
        Errors set with node.setZodErrors()
      </h1>
      <p className="text-base mb-4">
        This form cannot be successfully submitted because
        the form fields do not match the provided schema.
        <br />
        This is done to illustrate hydration of form-level errors.
        <br />
        Do not actually do this. :)
      </p>
      <FormKit
        type="form"
        onNode={setupFormNode}
        plugins={[zodPlugin]}
        onSubmit={submitHandler}
      >
        <FormKit type="group" name="personalInfo">
          <FormKit type="text" name="firstName" label="First Name" />
          <FormKit type="text" name="lastName" label="Last Name" />
        </FormKit>
      </FormKit>
      {/* %partial% */}
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
