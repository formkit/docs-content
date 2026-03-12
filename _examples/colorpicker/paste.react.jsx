import { genesisIcons } from '@formkit/icons'
import { FormKit, defineFormKitConfig } from '@formkit/react'
import { createProPlugin, inputs as proInputs } from '@formkit/pro'

const swatches = [
  '#000000',
  'hsla(180, 100%, 0%, 0.5)',
  'hsla(352, 98%, 41%, 1)',
  'rgb(245, 166, 35)',
  'hsl(55deg, 94%, 54.1%)',
  '#8B572A',
  '#7ED321',
  '#417505',
  '#B955CB',
  '#9013FE',
  '#4A90E2',
  '#50E3C2',
  '#B8E986',
  '#4A4A4A',
  '#9B9B9B',
  '#FFFFFF',
  'hsla(220, 30%, 100%, 0.5)',
  'rgba(233,22,155,0.5)',
  'hsla(50deg,85.5%,83.7%,0.5)',
]

const pro = createProPlugin('fk-52971f34220', proInputs)
export const formkitConfig = defineFormKitConfig({
  plugins: [pro],
  icons: { ...genesisIcons },
})

export default function App() {
  return (
    <>
      <h2 className="text-2xl font-bold mb-4">
        Try pasting in these color values when your focus is in or on the
        colorpicker!
      </h2>
      <ul className="mb-4">
        <li>
          <pre>#FF0000</pre>
        </li>
        <li>
          <pre>hsla(24, 51%, 56%, 0.8)</pre>
        </li>
        <li>
          <pre>rgba(189, 210, 224, 1)</pre>
        </li>
      </ul>

      {/* %partial% */}
      <FormKit
        type="colorpicker"
        label="I accept pasted values"
        help="This is a big timesaver."
        popover
        defaultValue="#68B9CD"
      />

      <FormKit
        type="colorpicker"
        label="I do NOT accept pasted values"
        help="Which is useful for cases such as a swatch-only picker"
        defaultValue="hsla(288, 56%, 52%, 1)"
        allowPaste={false}
        panelControls={false}
        panelFormat={false}
        popover
        options={swatches}
      />
      {/* %partial% */}
    </>
  )
}
