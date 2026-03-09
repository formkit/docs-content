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
  email: z.string().email(),
  arrayMin: z.string().array().min(2),
})

const [zodPlugin, submitHandler] = createZodPlugin(
  zodSchema,
  async (formData) => {
    await new Promise((resolve) => setTimeout(resolve, 2000))
    alert('Form was submitted!')
    console.log(formData)
  }
)
// %partial%

function App() {
  return (
    <FormKitProvider config={defaultConfig()}>
      {/* %partial% */}
      <h1>Validation from Zod schema</h1>
      <FormKit type="form" plugins={[zodPlugin]} onSubmit={submitHandler}>
        <FormKit type="group" name="personalInfo">
          <FormKit
            validationVisibility="live"
            type="text"
            name="firstName"
            label="First Name"
          />
          <FormKit type="text" name="lastName" label="Last Name" />
        </FormKit>
        <FormKit type="text" name="email" label="Your email" />
        <FormKit
          type="checkbox"
          name="arrayMin"
          label="Zod features"
          options={['Validation', 'Type-Safety', 'Reusability']}
        />
      </FormKit>
      {/* %partial% */}
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
