import { genesisIcons } from '@formkit/icons'
import { FormKit, defineFormKitConfig } from '@formkit/react'
import { createProPlugin, inputs as proInputs } from '@formkit/pro'

// %partial%
async function loadCurrentlyPopularMovies({ page, hasNextPage }) {
  await new Promise((resolve) => setTimeout(resolve, 500))
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

function DropdownExample() {
  return (
    <FormKit
      name="currentlyPopularMovie"
      type="dropdown"
      label="Choose a currently popular movie"
      options={loadCurrentlyPopularMovies}
      popover
      placeholder="Terminator 12"
    />
  )
}
// %partial%

const pro = createProPlugin('fk-52971f34220', proInputs)
export const formkitConfig = defineFormKitConfig({
  plugins: [pro],
  icons: { ...genesisIcons },
})

export default function App() {
  return <DropdownExample />
}
