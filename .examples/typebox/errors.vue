<script setup>
import { createTypeboxPlugin } from '@formkit/typebox'
import { Type } from '@sinclair/typebox'
import { TypeCompiler } from '@sinclair/typebox/compiler'

// some setup code
const typeboxSchema = Type.Object({
  personalInfo: Type.Object({
    firstName: Type.String({ minLength: 3, maxLength: 25 }),
    lastName: Type.String({ minLength: 3, maxLength: 25 }),
  }),
  missingField: Type.Number()
})
const [typeboxPlugin, submitHandler] = createTypeboxPlugin(typeboxSchema, async () => { await new Promise((r) => setTimeout(r, 2000))})

// In a real app, you'd likely get the errors from
// your server, but for this example we'll do the
// parsing and retrieve the errors here.
function setupFormNode(node) {
  const invalidValues = {personalInfo: { firstName: 'A', lastName: 'K' },
    missingField: 'not a number'
  }
  const checker = TypeCompiler.Compile(typeboxSchema)
  const errors = checker.Errors(invalidValues)
  // pass the ValueErrorIterator from Typebox to the setTypeboxErrors method
  // which is added by the Typebox plugin.
  node.setTypeboxErrors(errors)
}
</script>

<template>
  <h1 class="text-2xl font-bold mb-2">Errors set with node.setTypeboxErrors()</h1>
  <p class="text-base mb-4">
    This form cannot be successfully submitted because
    the form fields do not match the provided schema.<br>
    This is done to illustrate hydration of form-level errors.<br>
    Do not actually do this. :)
  </p>
  <FormKit
    type="form"
    @node="setupFormNode"
    :plugins="[typeboxPlugin]"
    @submit="submitHandler"
  >
    <FormKit type="group" name="personalInfo">
      <FormKit type="text" name="firstName" label="First Name" />
      <FormKit type="text" name="lastName" label="Last Name" />
    </FormKit>
  </FormKit>
</template>
