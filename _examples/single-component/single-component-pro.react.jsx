import { genesisIcons } from '@formkit/icons'
import { FormKit, defineFormKitConfig } from '@formkit/react'
import { createProPlugin, inputs as proInputs } from '@formkit/pro'

async function searchMovies({ search }) {
  if (!search) return []
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${
      search || ''
    }&api_key=f48bcc9ed9cbce41f6c28ea181b67e14&language=en-US&page=1&include_adult=false`
  )
  if (res.ok) {
    const data = await res.json()
    return data.results.map((result) => ({
      label: result.title,
      value: result.id,
    }))
  }
  return []
}

function SingleComponentProExample() {
  return (
    <FormKit type="form" actions={false}>
      {/* %partial% */}
      <FormKit type="repeater" label="My Movies" addLabel="Add Movie">
        <FormKit
          name="movie"
          type="autocomplete"
          label="Search for a movie"
          placeholder="Ex: Interstellar"
          options={searchMovies}
        />
        <FormKit type="rating" label="My rating" />
      </FormKit>
      {/* %partial% */}
    </FormKit>
  )
}

const pro = createProPlugin('fk-52971f34220', proInputs)
export const formkitConfig = defineFormKitConfig({
  plugins: [pro],
  icons: { ...genesisIcons },
})

export default function App() {
  return <SingleComponentProExample />
}
