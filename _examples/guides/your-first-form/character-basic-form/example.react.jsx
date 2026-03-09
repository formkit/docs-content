import { createRoot } from 'react-dom/client'
import { FormKit, FormKitProvider, defaultConfig } from '@formkit/react'

const formLabelStyle = {
  fontSize: '0.875rem',
  color: '#1e293b',
  marginBottom: '1rem',
  padding: '0.5rem',
  borderRadius: '0.375rem',
  backgroundColor: '#f1f5f9',
}

function CharacterBasicFormExample() {
  return (
    <>
      {/* %partial% */}
      <div>
        <h4 style={formLabelStyle}>Creating the form</h4>
      </div>
      <h1>New Character</h1>

      <FormKit type="form" onSubmit={() => false}>
        <FormKit
          type="text"
          name="name"
          id="name"
          validation="required|not:Admin"
          label="Name"
          help="Enter your character's full name"
          placeholder={'"Scarlet Sword"'}
        />

        <FormKit
          type="select"
          label="Class"
          name="class"
          id="class"
          placeholder="Select a class"
          options={['Warrior', 'Mage', 'Assassin']}
        />

        <FormKit
          type="range"
          name="strength"
          id="strength"
          label="Strength"
          defaultValue={5}
          min={1}
          max={10}
          step={1}
          help="How many strength points should this character have?"
        />

        <FormKit
          type="range"
          name="skill"
          id="skill"
          validation="required|max:10"
          label="Skill"
          defaultValue={5}
          min={1}
          max={10}
          step={1}
          help="How much skill points to start with"
        />

        <FormKit
          type="range"
          name="dexterity"
          id="dexterity"
          validation="required|max:10"
          label="Dexterity"
          defaultValue={5}
          min={1}
          max={10}
          step={1}
          help="How much dexterity points to start with"
        />
      </FormKit>
      {/* %partial% */}
    </>
  )
}

function App() {
  return (
    <FormKitProvider config={defaultConfig()}>
      <CharacterBasicFormExample />
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
