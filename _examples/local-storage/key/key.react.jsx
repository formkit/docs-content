import { useState } from 'react'
import { createRoot } from 'react-dom/client'
import { FormKit, FormKitProvider, defaultConfig } from '@formkit/react'
import { createLocalStoragePlugin } from '@formkit/addons'

function App() {
  // %partial%
  const [user, setUser] = useState(1)

  const submitHandler = async (_payload, node) => {
    await new Promise((resolve) => setTimeout(resolve, 2000))
    node.reset()
  }

  function handleChange(value) {
    const nextUser =
      typeof value === 'number'
        ? value
        : Number.isNaN(Number(value))
          ? 1
          : Number(value)
    setUser(nextUser)
    window.location.reload()
  }
  // %partial%

  return (
    <FormKitProvider config={defaultConfig()}>
      {/* %partial% */}
      <FormKit
        type="form"
        name="multiUserDemo"
        useLocalStorage
        plugins={[createLocalStoragePlugin({ debounce: 0 })]}
        actions={false}
      >
        <p>Switch between mock users of our app:</p>
        <FormKit
          type="select"
          modelValue={user}
          onUpdateModelValue={handleChange}
          name="user"
          options={[
            { label: 'Dave', value: 1 },
            { label: 'Amanda', value: 2 },
            { label: 'Larry', value: 3 },
          ]}
        />
      </FormKit>
      <hr />
      <div key={user}>
        <p>
          <em>
            <small>Data in localStorage is keyed to each user ID</small>
          </em>
        </p>
        <FormKit
          type="form"
          name="contactWithKey"
          plugins={[
            createLocalStoragePlugin({
              key: user,
            }),
          ]}
          useLocalStorage
          onSubmit={submitHandler}
        >
          <FormKit type="text" name="name" label="Your name" />
          <FormKit type="text" name="email" label="Your email" />
          <FormKit type="textarea" name="message" label="Your message" />
        </FormKit>
      </div>
      {/* %partial% */}
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
