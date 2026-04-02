import { FormKit } from '@formkit/react'

const badgeStyle = {
  padding: '0.5em',
  color: 'white',
  margin: '1em 0',
  borderRadius: '5px',
}

const invalidStyle = {
  ...badgeStyle,
  backgroundColor: 'darkred',
}

const validStyle = {
  ...badgeStyle,
  backgroundColor: 'green',
}

export default function App() {
  return (
    <>
      {/* %partial% */}
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      <FormKit name="account" type="group">
        {({ state: { valid } }) => (
          <>
            {!valid ? (
              <div className="not-valid" style={invalidStyle}>
                Your account details are not complete!
              </div>
            ) : (
              <div className="valid" style={validStyle}>
                It all looks good 👍
              </div>
            )}
            <FormKit
              label="Username"
              name="username"
              help="Select a new username"
              validation="required|alpha"
            />
            <FormKit label="Password" name="password" validation="required" />
            <FormKit
              label="Password"
              name="password_confirm"
              help="Confirm your password"
              validation="required|confirm"
            />
          </>
        )}
      </FormKit>
      {/* %partial% */}
    </>
  )
}
