<template>
  <FormKit id="licenseForm" type="form" @submit="submitHandler">
    <FormKit
      type="text"
      label="Full name"
      help="Your full name as it appears on your license"
      name="name"
      validation="required"
    />
    <FormKit
      type="file"
      label="Drivers license"
      name="license"
      help="Please add a scan of your driver’s license"
      accept=".jpg,.png,.pdf"
      validation="required"
    />
  </FormKit>
</template>

<script setup>
import { setErrors } from '@formkit/vue'

const submitHandler = async (data) => {
  // We need to submit this as a multipart/form-data
  // to do this we use the FormData API.
  const body = new FormData()
  // We can append other data to our form data:
  body.append('name', data.name)
  // Finally, we append the actual File object
  body.append('license', data.license.file)

  // We'll perform a real upload to httpbin.org
  const res = await fetch('https://httpbin.org/post', {
    method: 'POST',
    body: body,
  })

  if (res.ok) {
    console.log(await res.json())
  } else {
    setError('licenseForm', ['The server didn’t like our request.'])
  }
}
</script>
