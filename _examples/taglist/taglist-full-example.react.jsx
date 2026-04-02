import { genesisIcons } from '@formkit/icons'
import { FormKit, FormKitIcon, defineFormKitConfig } from '@formkit/react'
import { createProPlugin, inputs as proInputs } from '@formkit/pro'

// %partial%
import topMovies from '../_data/top-movies.js'

async function searchMovies({ search, page, hasNextPage }) {
  if (!search) {
    return topMovies
  }
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
      poster_path: result.poster_path,
      overview: result.overview,
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
            placeholder="Example placeholder"
            options={searchMovies}
            selectionAppearance="option"
            multiple
            popover
            slots={{
              tag: ({ handlers, option, classes }) => (
                <div className={classes.tag}>
                  <img
                    className="w-5 mr-2"
                    src={`https://image.tmdb.org/t/p/w500${option.poster_path}`}
                    alt="optionAvatar"
                  />
                  <span className={classes.tagLabel}>{option.label}</span>
                  <button
                    type="button"
                    tabIndex={-1}
                    className={classes.removeSelection}
                    onClick={(event) => {
                      event.preventDefault()
                      handlers.removeSelection(option)()
                    }}
                  >
                    <FormKitIcon
                      icon="close"
                      className={`${classes.closeIcon} ${classes.icon}`}
                    />
                  </button>
                </div>
              ),
            }}
          />
          <pre>{JSON.stringify(value, null, 2)}</pre>
        </>
      )}
    </FormKit>
  )
}
// %partial%

const pro = createProPlugin('fk-52971f34220', proInputs)
export const formkitConfig = defineFormKitConfig({
  plugins: [pro],
  icons: { ...genesisIcons },
})

export default function App() {
  return <TaglistExample />
}
