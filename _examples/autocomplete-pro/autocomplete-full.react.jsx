import { genesisIcons } from '@formkit/icons'
import { FormKit, defineFormKitConfig } from '@formkit/react'
import { createProPlugin, inputs as proInputs } from '@formkit/pro'
import topMovies from '../_data/top-movies.js'

const pro = createProPlugin('fk-52971f34220', proInputs)
export const formkitConfig = defineFormKitConfig({
  plugins: [pro],
  icons: { ...genesisIcons },
})

// %partial%
// Search movie receives FormKit's context object
// which we are destructuring to get the search value,
// the page, and the hasNextPage parameters.
async function searchMovies({ search, page, hasNextPage }) {
  if (!search) {
    // When there is no search value we return a static list of top movies.
    return topMovies
  }
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
      poster_path: result.poster_path,
      overview: result.overview,
    }))
  }
  return []
}
// %partial%

export default function App() {
  return (
    <>
      {/* %partial% */}
      <FormKit type="form" actions={false}>
        {({ value }) => (
          <>
            <FormKit
              name="movie"
              type="autocomplete"
              label="Search for your favorite movie"
              placeholder="Example placeholder"
              options={searchMovies}
              selectionAppearance="option"
              multiple
              popover
              removeSelectionClass="p-2 pl-0"
              slots={{
                option: ({ option }) => (
                  <div className="flex items-center justify-between">
                    <div className="mr-2 w-1/4">
                      <img
                        src={`https://image.tmdb.org/t/p/w500${option.poster_path}`}
                        alt="optionAvatar"
                        className="w-full"
                      />
                    </div>
                    <div className="w-full">
                      <div className="text-base font-bold leading-none">
                        {option.label}
                      </div>
                      <p className="text-xs">{option.overview}</p>
                    </div>
                  </div>
                ),
              }}
            />
            <pre>{JSON.stringify(value, null, 2)}</pre>
          </>
        )}
      </FormKit>
      {/* %partial% */}
    </>
  )
}
