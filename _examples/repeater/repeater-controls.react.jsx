import { createRoot } from 'react-dom/client'
import { useState } from 'react'
import { genesisIcons } from '@formkit/icons'
import { FormKit, FormKitProvider, defaultConfig } from '@formkit/react'
import { createProPlugin, inputs as proInputs } from '@formkit/pro'
import {
  changeFirst,
  initialValues,
  injectAtIndexOne,
  popValue,
  pushLast,
  replaceIt,
  sortIt,
  spliceIt,
  spliceRemove,
  shiftFirst,
  unshiftValue,
} from './controls.react.js'

const pro = createProPlugin('fk-52971f34220', proInputs)
const config = defaultConfig({
  plugins: [pro],
  icons: { ...genesisIcons },
})

const cellStyle = {
  textAlign: 'center',
  width: '33.3333%',
}

const buttonStyle = {
  padding: '0.5rem',
  width: '100%',
  border: '1px solid #93c5fd',
  background: '#dbeafe',
  color: '#1e40af',
  borderRadius: '0.375rem',
  lineHeight: 1.2,
}

// %partial%
// Imports hidden for brevity
function App() {
  const [values, setValues] = useState(initialValues)

  return (
    <FormKitProvider config={config}>
      <FormKit modelValue={values} onUpdateModelValue={setValues} type="group">
        {({ value }) => (
          <>
            <FormKit
              id="repeater"
              name="users"
              type="repeater"
              label="Users"
              insertControl
              addLabel="+ Add user"
              max={5}
            >
              <FormKit type="text" label="name" name="name" />
            </FormKit>
            <table>
              <thead>
                <tr>
                  <th>Add</th>
                  <th>Modify</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={cellStyle}>
                    <button id="push" type="button" onClick={() => pushLast(setValues)} style={buttonStyle}>
                      Push a value
                    </button>
                  </td>
                  <td style={cellStyle}>
                    <button
                      id="assign"
                      type="button"
                      onClick={() => changeFirst(setValues)}
                      style={buttonStyle}
                    >
                      Assign index 1
                    </button>
                  </td>
                  <td style={cellStyle}>
                    <button
                      id="shift"
                      type="button"
                      onClick={() => shiftFirst(setValues)}
                      style={buttonStyle}
                    >
                      Shift a value
                    </button>
                  </td>
                </tr>
                <tr>
                  <td style={cellStyle}>
                    <button
                      id="unshift"
                      type="button"
                      onClick={() => unshiftValue(setValues)}
                      style={buttonStyle}
                    >
                      Unshift a value
                    </button>
                  </td>
                  <td style={cellStyle}>
                    <button
                      id="splice"
                      type="button"
                      onClick={() => spliceIt(setValues)}
                      style={buttonStyle}
                    >
                      splice to assign (0, 2, [a, b])
                    </button>
                  </td>
                  <td style={cellStyle}>
                    <button
                      id="spliceRemove"
                      type="button"
                      onClick={() => spliceRemove(setValues)}
                      style={buttonStyle}
                    >
                      splice to delete (1, 4)
                    </button>
                  </td>
                </tr>
                <tr>
                  <td style={cellStyle}>
                    <button
                      id="inject"
                      type="button"
                      onClick={() => injectAtIndexOne(setValues)}
                      style={buttonStyle}
                    >
                      Inject at index 1
                    </button>
                  </td>
                  <td style={cellStyle}>
                    <button
                      id="replace"
                      type="button"
                      onClick={() => replaceIt(setValues)}
                      style={buttonStyle}
                    >
                      Replace it all
                    </button>
                  </td>
                  <td style={cellStyle}>
                    <button
                      id="pop"
                      type="button"
                      onClick={() => popValue(setValues)}
                      style={buttonStyle}
                    >
                      Pop off value
                    </button>
                  </td>
                </tr>
                <tr>
                  <td style={cellStyle}>&nbsp;</td>
                  <td style={cellStyle}>
                    <button
                      id="sort"
                      type="button"
                      onClick={() => sortIt(setValues)}
                      style={buttonStyle}
                    >
                      Sort it
                    </button>
                  </td>
                  <td style={cellStyle}>&nbsp;</td>
                </tr>
              </tbody>
            </table>
            <pre>{JSON.stringify(value, null, 2)}</pre>
          </>
        )}
      </FormKit>
    </FormKitProvider>
  )
}
// %partial%

createRoot(document.getElementById('app')).render(<App />)
