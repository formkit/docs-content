/* %partial% */
import { castRangeToNumber, updateAttributesPlugin } from './plugins.js'
import { max_sum } from './rules.js'
/* %partial% */

import { FormKit } from '@formkit/react'

const formLabelStyle = {
  fontSize: '0.875rem',
  color: '#1e293b',
  marginBottom: '1rem',
  padding: '0.5rem',
  borderRadius: '0.375rem',
  backgroundColor: '#f1f5f9',
}

const characterAttributesStyle = {
  padding: '1.25rem',
  border: '1px solid #cbd5e1',
  marginBottom: '1.5rem',
  borderRadius: '0.375rem',
}

const characterAttributesHeadingStyle = {
  marginBottom: '1.5rem',
}

/* %partial% */
const createCharacter = async (fields) => {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  alert(JSON.stringify(fields))
}
/* %partial% */

function CharacterGroupRuleExample() {
  return (
    <>
      {/* %partial% */}
      <div>
        <h4 style={formLabelStyle}>
          Add a custom validation rule to the attributes group.
        </h4>
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
              plugins={[updateAttributesPlugin]}
            />

            <div style={characterAttributesStyle}>
              <h4 style={characterAttributesHeadingStyle}>
                Character Attributes
              </h4>
              <p>
                You have a max budget of 20 points for character attributes.
              </p>

              <FormKit
                type="group"
                name="attributes"
                id="attributes"
                validationRules={{ max_sum }}
                validationVisibility="live"
                validation="max_sum"
                validationMessages={{
                  max_sum: ({ name }) =>
                    `${name} has exceeded the max budget of 20. Your character can't be that strong!`,
                }}
              >
                {({ id, messages, classes }) => (
                  <>
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
                      label="Dexterity"
                      defaultValue={5}
                      min={1}
                      max={10}
                      step={1}
                      help="How many dexterity points should this character have?"
                    />

                    {Object.values(messages).length ? (
                      <ul className={classes.messages}>
                        {Object.values(messages).map((message) => (
                          <li
                            key={message.key}
                            className={classes.message}
                            id={`${id}-${message.key}`}
                            data-message-type={message.type}
                          >
                            {message.value}
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </>
                )}
              </FormKit>
            </div>

            <p>
              Try using greater than the alloted 20 point budget for the
              attributes.
            </p>

            <pre>{JSON.stringify(value, null, 2)}</pre>
          </>
        )}
      </FormKit>

      <p>
        Change the character's class to see the changes in attribute values.
      </p>
      {/* %partial% */}
    </>
  )
}

export default function App() {
  return <CharacterGroupRuleExample />
}
