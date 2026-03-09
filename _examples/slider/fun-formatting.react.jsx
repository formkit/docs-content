import { createRoot } from 'react-dom/client'
import { genesisIcons } from '@formkit/icons'
import { FormKit, FormKitProvider, defaultConfig } from '@formkit/react'
import { createProPlugin, inputs as proInputs } from '@formkit/pro'

const pro = createProPlugin('fk-52971f34220', proInputs)
const config = defaultConfig({
  plugins: [pro],
  icons: { ...genesisIcons },
})

function emotionClass(node) {
  const value = node._value
  if (value < 25) return 'red'
  if (value < 50) return 'orange'
  if (value < 75) return 'yellow'
  if (value < 100) return 'green'
  if (value === 100) return 'hyper'
}

function App() {
  return (
    <FormKitProvider config={config}>
      <style>{`
        @keyframes hyperbg {
          0% { background-position: 0%; }
          100% { background-position: 100%; }
        }
        .large { font-size: 2rem !important; }
        .red { background-color: #f44336; }
        .orange { background-color: #ff9800; }
        .yellow { background-color: #baac2e; }
        .blue-green { background-color: #009688; }
        .green { background-color: #4caf50; }
        .hyper {
          animation: hyperbg 0.33s linear infinite;
          background-size: 50%;
          background-image: linear-gradient(
            90deg,
            #ff0000 0%,
            #ff7f00 10%,
            #ffff00 20%,
            #00ff00 30%,
            #0000ff 40%,
            #e3bcff 50%,
            #9400d3 60%,
            #ff0000 70%,
            #ff7f00 80%,
            #ffff00 90%,
            #00ff00 100%
          );
        }
      `}</style>
      {/* %partial% */}
      <FormKit
        type="slider"
        label="About how large should the spacing be?"
        help="This is a rough estimate."
        defaultValue={[25, 75]}
        tooltipFormat={(_, handle) =>
          handle === 'min' ? '\u{1F449}' : '\u{1F448}'
        }
        tooltipClass="large"
      />

      <FormKit
        type="slider"
        label="What do you think of FormKit?"
        help="be honest."
        defaultValue={80}
        tooltipFormat={(value) => {
          if (value < 25) return '\u{1F621}'
          if (value < 50) return '\u{1F610}'
          if (value < 75) return '\u{1F600}'
          if (value < 100) return '\u{1F60D}'
          if (value === 100) return '\u{1F984}'
        }}
        tooltip={true}
        fillClass={emotionClass}
        tooltipClass="large"
      />
      {/* %partial% */}
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
