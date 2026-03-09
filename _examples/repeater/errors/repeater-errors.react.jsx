import { createRoot } from 'react-dom/client'
import { genesisIcons } from '@formkit/icons'
import { FormKit, FormKitProvider, defaultConfig, setErrors } from '@formkit/react'
import { createProPlugin, inputs as proInputs } from '@formkit/pro'

const pro = createProPlugin('fk-52971f34220', proInputs)
const config = defaultConfig({
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

function App() {
  return (
    <FormKitProvider config={config}>
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
              value={[
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
    </FormKitProvider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
