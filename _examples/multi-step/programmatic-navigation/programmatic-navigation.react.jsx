import { createRoot } from 'react-dom/client'
import { getNode } from '@formkit/core'
import { FormKit, FormKitProvider } from '@formkit/react'
import config from '../formkit.config.react.jsx'

// %partial%
const next = () => {
  const node = getNode('multi-step')
  node?.next()
}

const previous = () => {
  const node = getNode('multi-step')
  node?.previous()
}

const goTo = () => {
  const node = getNode('multi-step')
  node?.goTo('favoriteThing')
}
// %partial%

function App() {
  return (
    <FormKitProvider config={config}>
      {/* %partial% */}
      <FormKit type="multi-step" id="multi-step">
        <FormKit type="step" name="personalInfo" id="personalInfo">
          <FormKit type="text" label="Name" prefixIcon="avatarMan" />
        </FormKit>

        <FormKit type="step" name="favoriteThing" id="favoriteThing">
          <FormKit type="text" label="Favorite Thing" prefixIcon="star" />
        </FormKit>

        <FormKit type="step" name="happyMemory" id="happyMemory">
          <FormKit type="text" label="Happy Memory" prefixIcon="happy" />
        </FormKit>
      </FormKit>

      <FormKit type="button" onClick={next} label="Next" />
      <FormKit type="button" onClick={previous} label="Previous" />
      <FormKit type="button" onClick={goTo} label="Go to Favorite thing" />
      {/* %partial% */}
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
