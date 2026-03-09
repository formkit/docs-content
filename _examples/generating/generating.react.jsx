import { createRoot } from 'react-dom/client'
import { useState } from 'react'
import {
  FormKit,
  FormKitProvider,
  FormKitSchema,
  defaultConfig,
} from '@formkit/react'

// %partial%
const schema = [
  {
    $el: 'h1',
    children: 'Register',
    attrs: {
      class: 'text-2xl font-bold mb-4',
    },
  },
  {
    $formkit: 'text',
    name: 'email',
    label: 'Email',
    help: 'This will be used for your account.',
    validation: 'required|email',
  },
  {
    $formkit: 'password',
    name: 'password',
    label: 'Password',
    help: 'Enter your new password.',
    validation: 'required|length:5,16',
  },
  {
    $formkit: 'password',
    name: 'password_confirm',
    label: 'Confirm password',
    help: 'Enter your new password again to confirm it.',
    validation: 'required|confirm',
    validationLabel: 'password confirmation',
  },
  {
    $cmp: 'FormKit',
    props: {
      name: 'eu_citizen',
      type: 'checkbox',
      id: 'eu',
      label: 'Are you a european citizen?',
    },
  },
  {
    $formkit: 'select',
    if: '$get(eu).value',
    name: 'cookie_notice',
    label: 'Cookie notice frequency',
    options: {
      refresh: 'Every page load',
      hourly: 'Ever hour',
      daily: 'Every day',
    },
    help: 'How often should we display a cookie notice?',
  },
]
// %partial%

function Example() {
  const [data, setData] = useState({})

  async function register() {
    await new Promise((resolve) => setTimeout(resolve, 2000))
    alert('Account created!')
  }

  return (
    <>
      <FormKit
        type="form"
        modelValue={data}
        onUpdateModelValue={setData}
        onSubmit={register}
      >
        <FormKitSchema schema={schema} />
      </FormKit>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  )
}

function App() {
  return (
    <FormKitProvider config={defaultConfig()}>
      <Example />
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
