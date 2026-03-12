import { genesisIcons } from '@formkit/icons'
import { FormKit, defineFormKitConfig } from '@formkit/react'
import { createProPlugin, inputs as proInputs } from '@formkit/pro'

const groupedSwatches = [
  {
    group: 'FormKit',
    options: [
      {
        label: 'Brand Orange',
        value: '#ff985d',
      },
      {
        label: 'Brand Yellow',
        value: '#f7ce68',
      },
      {
        label: 'Brand Blue',
        value: '#0275FF',
      },
      {
        label: 'Brand Dark',
        value: '#2b2b35',
      },
    ],
  },
  {
    group: 'Other',
    options: [
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
    ],
  },
]

const pro = createProPlugin('fk-52971f34220', proInputs)
export const formkitConfig = defineFormKitConfig({
  plugins: [pro],
  icons: { ...genesisIcons },
})

export default function App() {
  return (
    <>
      {/* %partial% */}
      <FormKit
        type="colorpicker"
        defaultValue="#FF985D"
        inline
        options={groupedSwatches}
      />
      {/* %partial% */}
    </>
  )
}
