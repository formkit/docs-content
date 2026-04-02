import { FormKit } from '@formkit/react'
export { default as formkitConfig } from '../formkit.config.react.jsx'

export default function App() {
  return (
    <>
      {/* %partial% */}
      {/* on multi-step we set all icons to 'star' */}
      <FormKit type="multi-step" validStepIcon="star" tabStyle="progress">
        <FormKit type="step" name="stepOne">
          <FormKit type="text" label="Name" />
        </FormKit>
        <FormKit type="step" name="stepTwo">
          <FormKit type="textarea" label="Your story" />
        </FormKit>
        {/* on this step we set the icon to 'submit' */}
        <FormKit type="step" validStepIcon="submit" name="stepThree">
          <FormKit type="textarea" label="Something else" />
        </FormKit>
      </FormKit>
      {/* %partial% */}
    </>
  )
}
