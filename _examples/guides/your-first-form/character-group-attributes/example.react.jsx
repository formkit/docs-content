import { FormKit } from '@formkit/react'

const formLabelStyle = {
  fontSize: '0.875rem',
  color: '#1e293b',
  marginBottom: '1rem',
  padding: '0.5rem',
  borderRadius: '0.375rem',
  backgroundColor: '#f1f5f9',
}

const castRangeToNumber = (node) => {
  if (node.props.type !== 'range') return
  node.hook.input((value, next) => next(Number(value)))
}

const createCharacter = async (fields) => {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  alert(JSON.stringify(fields))
}

function CharacterGroupAttributesExample() {
  return (
    <>
      {/* %partial% */}
      <div>
        <h4 style={formLabelStyle}>Grouping the attributes</h4>
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
              name="class"
              label="Class"
              id="class"
              placeholder="Select a class"
              options={['Warrior', 'Mage', 'Assassin']}
            />

            <FormKit type="group" name="attributes" id="attributes">
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
                help="How many skill points should this character have?"
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
                help="How many dexterity points should this character have?"
              />
            </FormKit>
            <pre>{JSON.stringify(value, null, 2)}</pre>
          </>
        )}
      </FormKit>
      {/* %partial% */}
    </>
  )
}

export default function App() {
  return <CharacterGroupAttributesExample />
}
