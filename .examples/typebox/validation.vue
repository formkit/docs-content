<script setup>
import { createTypeboxPlugin } from '@formkit/typebox'
import { Type } from '@sinclair/typebox'
import { FormatRegistry } from '@sinclair/typebox'

// http://www.w3.org/TR/html5/forms.html#valid-e-mail-address (search for 'wilful violation')
const emailPattern = /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/i
FormatRegistry.Set('email', (value) => emailPattern.test(value))

const typeboxSchema = Type.Object({
  personalInfo: Type.Object({
    firstName: Type.String({minLength: 3, maxLength: 25}),
    lastName: Type.String({minLength: 3, maxLength: 25}),
  }),
  email: Type.String({format: 'email'}),
  arrayMin: Type.Array(Type.String(), {min: 2}),
})

const [typeboxPlugin, submitHandler] = createTypeboxPlugin(
  typeboxSchema,
  async (formData) => {
    // fake submit handler, but this is where you
    // do something with your valid data.
    await new Promise((r) => setTimeout(r, 2000))
    alert('Form was submitted!')
    console.log(formData)
  }
)
</script>

<template>
  <h1>Validation from Typebox schema</h1>
  <FormKit type="form" :plugins="[typeboxPlugin]" @submit="submitHandler">
    <FormKit type="group" name="personalInfo">
      <FormKit
        validation-visibility="live"
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
      label="Typebox features"
      :options="['Validation', 'Type-Safety', 'Reusability']"
    />
  </FormKit>
</template>
