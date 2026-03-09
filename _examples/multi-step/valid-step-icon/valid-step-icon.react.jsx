import { createRoot } from 'react-dom/client'
import { FormKit, FormKitProvider } from '@formkit/react'
import config from '../formkit.config.react.jsx'

function App() {
  return (
    <FormKitProvider config={config}>
      {/* %partial% */}
      {/* on multi-step we set all icons to 'star' */}
      <FormKit type="multi-step" validStepIcon="star" tabStyle="progress">
        <FormKit type="step" name="stepOne">
          <FormKit type="text" label="Name" />
        </FormKit>
        <FormKit type="step" name="stepTwo">
          <FormKit type="textarea" label="Your story" />
        </FormKit>
        {/* on this step we set the icon to 'submit' */}
        <FormKit type="step" validStepIcon="submit" name="stepThree">
          <FormKit type="textarea" label="Something else" />
        </FormKit>
      </FormKit>
      {/* %partial% */}
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
