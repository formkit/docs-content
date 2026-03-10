import { createRoot } from 'react-dom/client'
import { FormKit, FormKitProvider, defaultConfig } from '@formkit/react'
import UserAccount from './user-account.react.jsx'
import UserNetworks from './user-networks.react.jsx'
import UserPreferences from './user-preferences.react.jsx'

function UserProfile() {
  return (
    <>
      {/* %partial% */}
      <FormKit type="form">
        {/* 👀 No bindings, no modeling */}
        <UserAccount />
        <UserNetworks />
        <UserPreferences />
      </FormKit>
      {/* %partial% */}
    </>
  )
}

function App() {
  return (
    <FormKitProvider config={defaultConfig()}>
      <UserProfile />
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
