import { createRoot } from 'react-dom/client'
import { FormKit, FormKitProvider, defaultConfig } from '@formkit/react'

const statusStyle = {
  padding: '0.5em',
  color: 'white',
  margin: '1em 0',
  borderRadius: '5px',
}

const validStyle = {
  ...statusStyle,
  backgroundColor: 'green',
}

const invalidStyle = {
  ...statusStyle,
  backgroundColor: 'darkred',
}

function App() {
  return (
    <FormKitProvider config={defaultConfig()}>
      {/* %partial% */}
      <FormKit name="social" type="list">
        {({ state: { valid } }) => (
          <>
            <h2 className="text-2xl font-bold mb-2">Social media handles</h2>
            <p className="text-base mb-4">
              Please provide a your twitter and facebook social media profiles.
            </p>
            {!valid ? (
              <div style={invalidStyle}>Your social profile is not complete!</div>
            ) : (
              <div style={validStyle}>{`It all looks good \u{1F44D}`}</div>
            )}
            <FormKit
              label="Twitter handle"
              placeholder="@your_profile"
              validation="required|starts_with:@"
              help="Enter your twitter profile handle"
            />
            <FormKit
              label="Facebook profile"
              placeholder="https://facebook.com/your-profile"
              validation="required|starts_with:https://www.facebook.com/"
              help="Enter the URL to your facebook profile."
            />
          </>
        )}
      </FormKit>
      {/* %partial% */}
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
