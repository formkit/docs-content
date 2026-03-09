import { createRoot } from 'react-dom/client'
import { genesisIcons } from '@formkit/icons'
import { FormKit, FormKitProvider, defaultConfig } from '@formkit/react'
import { createProPlugin, inputs as proInputs } from '@formkit/pro'

// %partial%
async function searchMovies({ search, page, hasNextPage }) {
  if (!search) return []
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${
      search || ''
    }&api_key=f48bcc9ed9cbce41f6c28ea181b67e14&language=en-US&page=${page}&include_adult=false`
  )
  if (res.ok) {
    const data = await res.json()
    if (page !== data.total_pages) hasNextPage()
    return data.results.map((result) => ({
      label: result.title,
      value: result.id,
    }))
  }
  return []
}

function TaglistExample() {
  return (
    <FormKit type="form" actions={false}>
      {({ value }) => (
        <>
          <FormKit
            name="movie"
            type="taglist"
            label="Search for your favorite movie"
            placeholder="Example: Lord of the Rings"
            popover
            options={searchMovies}
          />
          <pre>{JSON.stringify(value, null, 2)}</pre>
        </>
      )}
    </FormKit>
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
      <TaglistExample />
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
