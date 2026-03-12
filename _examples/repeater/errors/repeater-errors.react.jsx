import { genesisIcons } from '@formkit/icons'
import { FormKit, setErrors, defineFormKitConfig } from '@formkit/react'
import { createProPlugin, inputs as proInputs } from '@formkit/pro'

const pro = createProPlugin('fk-52971f34220', proInputs)
export const formkitConfig = defineFormKitConfig({
  plugins: [pro],
  icons: { ...genesisIcons },
})

const axios = {
  post: () => new Promise((resolve) => setTimeout(resolve, 2000)),
}

async function submitTeamMembers(teamMembers) {
  await axios.post(teamMembers)

  setErrors('teamMemberForm', [], {
    teamMembers: ['There was a problem with 1 of your team members.'],
    'teamMembers.1.email': [
      'emily@formkit.com is already on a team. Please remove her from that team before adding her to this team.',
    ],
  })
}

const preStyle = {
  marginBottom: '20px',
}

export default function App() {
  return (
    <>
      {/* %partial% */}
      <p>
        <em>Submit to see the errors.</em>
      </p>
      <FormKit
        type="form"
        id="teamMemberForm"
        submitLabel="Submit to see the errors"
        help="hello"
        onSubmit={submitTeamMembers}
      >
        {({ value }) => (
          <>
            <FormKit
              id="repeater"
              name="teamMembers"
              type="repeater"
              label="Additional Team Members"
              addLabel="Add Team Member"
              defaultValue={[
                { email: 'john@formkit.com' },
                { email: 'emily@formkit.com' },
              ]}
            >
              <FormKit
                type="email"
                label="Team Member email"
                name="email"
                validation="required|email"
                placeholder="Add email address..."
              />
            </FormKit>
            <pre style={preStyle}>{JSON.stringify(value, null, 2)}</pre>
          </>
        )}
      </FormKit>
      {/* %partial% */}
    </>
  )
}
