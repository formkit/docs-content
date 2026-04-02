import { FormKit } from '@formkit/react'
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

export default function App() {
  return (
    <>
      {/* %partial% */}
      <h1 className="text-2xl font-bold mb-4">Zod with FormKit Validation</h1>
      <FormKit type="form" plugins={[zodPlugin]} onSubmit={submitHandler}>
        <FormKit type="group" name="personalInfo">
          <FormKit
            validation="required|length:3,25"
            validationVisibility="live"
            type="text"
            name="firstName"
            label="First name"
          />
          <FormKit
            validation="required|length:3,25"
            type="text"
            name="lastName"
            label="Last name"
          />
        </FormKit>
        <FormKit
          validation="required|email"
          type="text"
          name="email"
          label="Your email"
        />
        <FormKit
          validation="required|min:2"
          type="checkbox"
          name="arrayMin"
          label="Zod features"
          options={['Validation', 'Type-Safety', 'Reusability']}
        />
      </FormKit>
      {/* %partial% */}
    </>
  )
}
