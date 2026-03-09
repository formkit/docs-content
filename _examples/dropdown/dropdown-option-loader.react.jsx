import { createRoot } from 'react-dom/client'
import { genesisIcons } from '@formkit/icons'
import { FormKit, FormKitProvider, defaultConfig } from '@formkit/react'
import { createProPlugin, inputs as proInputs } from '@formkit/pro'

// %partial%
async function loadCurrentlyPopularMovies({ page, hasNextPage }) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=f48bcc9ed9cbce41f6c28ea181b67e14&language=en-US&page=${page}`
  )
  if (res.ok) {
    const data = await res.json()
    if (page !== data.total_pages) hasNextPage()
    return data.results.map((item) => ({ label: item.title, value: item.id }))
  }
  return []
}

async function loadMovie(id, cachedOption) {
  if (cachedOption) return cachedOption
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=f48bcc9ed9cbce41f6c28ea181b67e14&language=en-US`
  )
  if (res.ok) {
    const data = await res.json()
    return {
      label: data.title,
      value: data.id,
    }
  }
  return { label: 'Error loading' }
}

function DropdownExample() {
  return (
    <FormKit
      type="dropdown"
      name="currentlyPopularMovie"
      label="Choose some movies you would like to see"
      placeholder="Avatar, Star Wars..."
      options={loadCurrentlyPopularMovies}
      optionLoader={loadMovie}
      multiple
      popover
      defaultValue={[597, 598]}
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
