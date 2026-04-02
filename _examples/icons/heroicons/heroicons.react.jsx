/* %partial% */
import { FormKit, FormKitIcon } from '@formkit/react'
export { default as formkitConfig } from './formkit.config.react.jsx'

function HeroiconsExample() {
  return (
    <>
      <FormKit
        label="I'm using Heroicons icons"
        prefixIcon="variable"
        suffixIcon="trash"
      />
      <FormKit
        type="select"
        label="Custom loaders work with all icon props"
        selectIcon="selector"
        options={['One', 'Two', 'Three']}
        help="I'm a select with a custom select icon"
      />
      <h2 className="text-xl font-bold mb-4">
        Also works with standalone icons
      </h2>
      <div
        className="w-32 text-slate-800 dark:text-slate-300"
        style={{ maxWidth: '8rem' }}
      >
        <FormKitIcon icon="qrcode" />
      </div>
    </>
  )
}
/* %partial% */

export default function App() {
  return <HeroiconsExample />
}
