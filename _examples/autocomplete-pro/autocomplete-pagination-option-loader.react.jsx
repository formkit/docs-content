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

// The function assigned to the `optionLoader` prop will be called with the
// value of the option as the first argument (in this case, the movie ID), and
// the cached option as the second argument (if it exists).
async function loadMovie(id, cachedOption) {
  if (cachedOption) return cachedOption
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=f48bcc9ed9cbce41f6c28ea181b67e14&language=en-US`
  )
  if (response.ok) {
    const data = await response.json()
    return {
      label: data.title,
      value: data.id,
    }
  }
  return { label: 'Error loading' }
}
// %partial%

function App() {
  return (
    <FormKitProvider config={config}>
      {/* %partial% */}
      <FormKit type="form" actions={false}>
        {({ value }) => (
          <>
            <FormKit
              name="movie"
              type="autocomplete"
              label="Search for your favorite movie"
              placeholder="Example: Harry Potter"
              options={searchMovies}
              defaultValue={597}
              optionLoader={loadMovie}
              popover
            />
            <pre>{JSON.stringify(value, null, 2)}</pre>
          </>
        )}
      </FormKit>
      {/* %partial% */}
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
