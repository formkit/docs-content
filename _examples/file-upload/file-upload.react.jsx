import { useState } from 'react'
import { FormKit, setErrors } from '@formkit/react'

export default function App() {
  const [complete, setComplete] = useState(false)

  async function submitHandler(data) {
    const body = new FormData()
    body.append('name', data.name)

    data.license.forEach((fileItem) => {
      body.append('license', fileItem.file)
    })

    const response = await fetch('https://httpbin.org/post', {
      method: 'POST',
      body,
    })

    if (response.ok) {
      setComplete(true)
    } else {
      setErrors('licenseForm', ["The server didn't like our request."])
    }
  }

  return (
    <>
      {/* %partial% */}
      {!complete ? (
        <FormKit id="licenseForm" type="form" onSubmit={submitHandler}>
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
            help="Please add a scan of your driver's license"
            accept=".jpg,.png,.pdf"
            validation="required"
          />
        </FormKit>
      ) : (
        <div className="complete">License upload complete</div>
      )}
      {/* %partial% */}
    </>
  )
}
