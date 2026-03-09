/* %partial% */
import { useEffect } from 'react'
import { getNode } from '@formkit/core'
/* %partial% */
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

/* %partial% */
const castRangeToNumber = (node) => {
  if (node.props.type !== 'range') return
  node.hook.input((value, next) => next(Number(value)))
}

const CHARACTER_BASE_STATS = {
  Warrior: {
    strength: 9,
    skill: 1,
    dexterity: 5,
  },
  Mage: {
    strength: 5,
    skill: 10,
    dexterity: 8,
  },
  Assassin: {
    strength: 5,
    skill: 4,
    dexterity: 10,
  },
}

function useAttributeUpdater() {
  useEffect(() => {
    const classNode = getNode('class')
    const attributesNode = getNode('attributes')

    if (!classNode || !attributesNode) return

    const receipt = classNode.on('commit', ({ payload }) => {
      if (CHARACTER_BASE_STATS[payload]) {
        attributesNode.input(CHARACTER_BASE_STATS[payload])
      }
    })

    return () => {
      classNode.off(receipt)
    }
  }, [])
}

const createCharacter = async (fields) => {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  alert(JSON.stringify(fields))
}
/* %partial% */

function CharacterAttributesUpdateExample() {
  useAttributeUpdater()

  return (
    <>
      {/* %partial% */}
      <div>
        <h4 style={formLabelStyle}>Updating values based on the class input</h4>
      </div>
      <h1>New Character</h1>

      <FormKit
        type="form"
        onSubmit={createCharacter}
        plugins={[castRangeToNumber]}
        submitLabel="Create Character"
      >
        {({ value }) => (
          <>
            <FormKit
              type="text"
              name="name"
              id="name"
              validation="required|not:Admin"
              label="Name"
              help="Your full name"
              placeholder="Please add your name"
            />

            <FormKit
              type="select"
              label="Class"
              name="class"
              id="class"
              placeholder="Select a class"
              options={['Warrior', 'Mage', 'Assassin']}
            />

            <FormKit type="group" name="attributes" id="attributes">
              <FormKit
                type="range"
                name="skill"
                id="skill"
                label="Skill"
                defaultValue={5}
                min={1}
                max={10}
                step={1}
                help="How much skill points to start with"
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
                help="How much strength points to start with"
              />

              <FormKit
                type="range"
                name="dexterity"
                id="dexterity"
                label="Dexterity"
                defaultValue={5}
                min={1}
                max={10}
                step={1}
                help="How many dexterity points should this character have?"
              />
            </FormKit>
            <pre>{JSON.stringify(value, null, 2)}</pre>
          </>
        )}
      </FormKit>

      <p>Change the character's class to see the changes in attribute values.</p>
      {/* %partial% */}
    </>
  )
}

function App() {
  return (
    <FormKitProvider config={defaultConfig()}>
      <CharacterAttributesUpdateExample />
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
