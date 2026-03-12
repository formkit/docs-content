import { genesisIcons } from '@formkit/icons'
import { FormKit, defineFormKitConfig } from '@formkit/react'
import { createProPlugin, inputs as proInputs } from '@formkit/pro'

const pro = createProPlugin('fk-52971f34220', proInputs)
export const formkitConfig = defineFormKitConfig({
  plugins: [pro],
  icons: { ...genesisIcons },
})

/* %partial% */
const tokens = {
  month: {
    type: 'enum',
    token: 'month',
    placeholder: 'month',
    selectDirection: 'left',
    values: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
  },
  day: {
    type: 'enum',
    token: 'day',
    placeholder: 'day',
    selectDirection: 'left',
    values: Array.from({ length: 31 }, (_, index) =>
      `${index}`.padStart(2, '0')
    ),
  },
  year: {
    type: 'enum',
    token: 'year',
    placeholder: 'year',
    selectDirection: 'left',
    values: Array.from({ length: 200 }, (_, index) => `${1900 + index}`),
  },
}

const overlayStyles = `
.red {
  color: red;
}
.yellow {
  color: #d1c813;
}
.blue {
  color: blue;
}
`
/* %partial% */

export default function App() {
  return (
    <>
      {/* %partial% */}
      <style>{overlayStyles}</style>
      <FormKit
        type="mask"
        mode="select"
        mask="month day, year"
        tokens={tokens}
        label="Birthday (with overlay)"
        help="Notice the placeholder text is a lighter gray color."
        overlay
      />
      <FormKit
        type="mask"
        name="phone"
        mask="+1 (###) ###-####"
        label="Phone number (with overlay)"
        help="Let's add some crazy colors to the overlay."
        overlayPlaceholderClass="yellow"
        overlayLiteralClass="blue"
        overlayCharClass="red"
        overlay
      />
      {/* %partial% */}
    </>
  )
}
