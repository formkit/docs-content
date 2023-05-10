<script setup>
import { createZodPlugin } from '@formkit/zod'
import { z } from 'zod'

// some setup code
const zodSchema = z.object({personalInfo: z.object({firstName: z.string().min(3).max(25),lastName: z.string().min(3).max(25),}),
  missingField: z.number()
})
const [zodPlugin, submitHandler] = createZodPlugin(zodSchema, async () => { await new Promise((r) => setTimeout(r, 2000))})

// In a real app, you'd likely get the errors from
// your server, but for this example we'll do the
// parsing and retrieve the errors here.
function setupFormNode(node) {
  const invalidValues = {personalInfo: { firstName: 'A', lastName: 'K' },
    missingField: 'not a number'
  }
  const zodParseResults = zodSchema.safeParse(invalidValues)
  // pass your ZodError object to the setZodErrors method
  // which is added by the Zod plugin.
  node.setZodErrors(zodParseResults.error)
}
</script>

<template>
  <h1>Errors set with node.setZodErrors()</h1>
  <p>
    This form cannot be successfully submitted because
    the form fields do not match the provided schema.<br>
    This is done to illustrate hydration of form-level errors.<br> 
    Do not actually do this. :)
  </p>
  <FormKit
    type="form"
    @node="setupFormNode"
    :plugins="[zodPlugin]"
    @submit="submitHandler"
  >
    <FormKit type="group" name="personalInfo">
      <FormKit type="text" name="firstName" label="First Name" />
      <FormKit type="text" name="lastName" label="Last Name" />
    </FormKit>
  </FormKit>
</template>