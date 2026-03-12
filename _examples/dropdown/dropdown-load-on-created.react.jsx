import { useState } from 'react'
import { genesisIcons } from '@formkit/icons'
import { FormKit, defineFormKitConfig } from '@formkit/react'
import { createProPlugin, inputs as proInputs } from '@formkit/pro'

async function loadHorrorMovies() {
  await new Promise((resolve) => setTimeout(resolve, 1000))
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
  const [showDropdown, setShowDropdown] = useState(false)

  return (
    <>
      <FormKit type="button" onClick={() => setShowDropdown((value) => !value)}>
        {showDropdown ? 'Hide' : 'Show'} Dropdown
      </FormKit>
      {/* %partial% */}
      {showDropdown ? (
        <FormKit
          name="horrorMovie"
          type="dropdown"
          label="Select a horror movie"
          placeholder="Example placeholder"
          popover
          options={loadHorrorMovies}
          loadOnCreated
        />
      ) : null}
      {/* %partial% */}
    </>
  )
}

const pro = createProPlugin('fk-52971f34220', proInputs)
export const formkitConfig = defineFormKitConfig({
  plugins: [pro],
  icons: { ...genesisIcons },
})

export default function App() {
  return <DropdownExample />
}
