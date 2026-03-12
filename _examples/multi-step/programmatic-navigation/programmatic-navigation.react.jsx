import { FormKit, useFormKitNodeById } from '@formkit/react'
export { default as formkitConfig } from '../formkit.config.react.jsx'

export default function App() {
  const node = useFormKitNodeById('multi-step')

  // %partial%
  const next = () => {
    node?.next()
  }

  const previous = () => {
    node?.previous()
  }

  const goTo = () => {
    node?.goTo('favoriteThing')
  }
  // %partial%

  return (
    <>
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
    </>
  )
}
