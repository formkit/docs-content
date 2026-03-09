import { createRoot } from 'react-dom/client'
import { FormKit, FormKitProvider, defaultConfig } from '@formkit/react'

function randomColor(event) {
  const hex = Math.floor(Math.random() * 16777215).toString(16)
  event.currentTarget.setAttribute('style', `background-color: #${hex};`)
}

function App() {
  return (
    <FormKitProvider config={defaultConfig()}>
      {/* %partial% */}
      <FormKit type="submit" help="You can bind event listeners." onClick={randomColor}>
        Click me!
      </FormKit>
      {/* %partial% */}
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
