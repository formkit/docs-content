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
// which we are destructuring to get the search value.
async function searchMovies({ search }) {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  if (!search) {
    // With no search value, lets just return a list of common movies.
    return [
      { label: 'Saving Private Ryan', value: 857 },
      { label: 'Everything Everywhere All at Once', value: 545611 },
      { label: 'Gone with the Wind', value: 770 },
    ]
  }
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${
      search || ''
    }&api_key=f48bcc9ed9cbce41f6c28ea181b67e14&language=en-US&page=1&include_adult=false`
  )
  if (response.ok) {
    const data = await response.json()
    // Iterating over results to set the required
    // `label` and `value` keys.
    return data.results.map((result) => ({
      label: result.title,
      value: result.id,
    }))
  }
  // If the request fails, we return an empty array.
  return []
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
              placeholder="Example: Shawshank Redemption"
              options={searchMovies}
              loadOnCreated
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
