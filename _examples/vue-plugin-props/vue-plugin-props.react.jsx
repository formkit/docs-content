import { FormKit } from '@formkit/react'
export { default as formkitConfig } from './formkit.config.react.jsx'

export default function App() {
  return (
    <>
      {/* %partial% */}
      {/*
        The validation prop is not set here but both
        inputs are receiving the validation prop
        from the formkit config file.
      */}
      <FormKit label="Username" validationVisibility="live" />
      <FormKit type="password" label="Password" validationVisibility="live" />
      {/* %partial% */}
    </>
  )
}
