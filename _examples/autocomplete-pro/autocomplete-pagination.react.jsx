import { createRoot } from 'react-dom/client'
import { genesisIcons } from '@formkit/icons'
import { FormKit, FormKitProvider, defaultConfig } from '@formkit/react'
import { createProPlugin, inputs as proInputs } from '@formkit/pro'

const pro = createProPlugin('fk-52971f34220', proInputs)
const config = defaultConfig({
  plugins: [pro],
  icons: { ...genesisIcons },
})

// %partial%
// Search movie receives FormKit's context object
// which we are destructuring to get the search value,
// the page, and the hasNextPage parameters.
async function searchMovies({ search, page, hasNextPage }) {
  if (!search) return []
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${
      search || ''
    }&api_key=f48bcc9ed9cbce41f6c28ea181b67e14&language=en-US&page=${page}&include_adult=false`
  )
  if (response.ok) {
    const data = await response.json()
    if (page !== data.total_pages) hasNextPage()
    return data.results.map((result) => ({
      label: result.title,
      value: result.id,
    }))
  }
  return []
}
// %partial%

function App() {
  return (
    <FormKitProvider config={config}>
      {/* %partial% */}
      <FormKit
        name="movie"
        type="autocomplete"
        label="Search for your favorite movie"
        placeholder="Example: Lord of the Rings"
        options={searchMovies}
        popover
      />
      {/* %partial% */}
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
