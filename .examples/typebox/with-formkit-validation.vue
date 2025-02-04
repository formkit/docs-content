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
  email: Type.string({format: 'email'}),
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
  <h1 class="text-2xl font-bold mb-4">Typebox with FormKit Validation</h1>
  <FormKit type="form" :plugins="[typeboxPlugin]" @submit="submitHandler">
    <FormKit type="group" name="personalInfo">
      <FormKit
        validation="required|length:3,25"
        validation-visibility="live"
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
      label="Typebox features"
      :options="['Validation', 'Type-Safety', 'Reusability']"
    />
  </FormKit>
</template>
