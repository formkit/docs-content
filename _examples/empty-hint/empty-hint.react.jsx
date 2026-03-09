import { createRoot } from 'react-dom/client'
import { FormKit, FormKitProvider, defaultConfig } from '@formkit/react'

function App() {
  return (
    <FormKitProvider config={defaultConfig()}>
      {/* %partial% */}
      <FormKit
        type="checkbox"
        label="Relocation Preferences"
        options={[
          'Argentina',
          'Belarus',
          'Hungary',
          'Iceland',
          'Morocco',
          'Peru',
          'Spain',
          'Yemen',
        ]}
        help="If you had to relocate for work - select your preferred locations."
        validation="+min:3"
        validationVisibility="live"
      />
      {/* %partial% */}
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
