import { createRoot } from 'react-dom/client'
import { genesisIcons } from '@formkit/icons'
import { FormKit, FormKitProvider, defaultConfig } from '@formkit/react'
import { createProPlugin, inputs as proInputs } from '@formkit/pro'

// %partial%
async function loadHorrorMovies() {
  await new Promise((resolve) => setTimeout(resolve, 500))
  const res = await fetch(
    'https://api.themoviedb.org/4/list/8219282?page=1&api_key=f48bcc9ed9cbce41f6c28ea181b67e14'
  )
  if (res.ok) {
    const data = await res.json()
    return data.results.map((result) => {
      return {
        label: result.title,
        value: result.id,
      }
    })
  }
  return []
}

function DropdownExample() {
  return (
    <FormKit
      name="horrorMovie"
      type="dropdown"
      label="Select a horror movie"
      placeholder="Example placeholder"
      popover
      options={loadHorrorMovies}
    />
  )
}
// %partial%

const pro = createProPlugin('fk-52971f34220', proInputs)
const config = defaultConfig({
  plugins: [pro],
  icons: { ...genesisIcons },
})

function App() {
  return (
    <FormKitProvider config={config}>
      <DropdownExample />
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
