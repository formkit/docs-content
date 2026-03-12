import { FormKit } from '@formkit/react'
export { default as formkitConfig } from './formkit.config.react.jsx'

// %partial%
const value = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
// %partial%

export default function App() {
  return (
    <>
      {/* %partial% */}
      <FormKit
        type="textarea"
        autoHeight
        label="I have an auto-height plugin"
        help="This textarea will grow as you type"
        defaultValue={value}
      />
      {/* %partial% */}
    </>
  )
}
