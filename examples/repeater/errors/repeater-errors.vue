
<script setup>
// This is just a mock of an actual axios instance.
const axios = {
  post: () => new Promise(r => setTimeout(r, 2000))
}
  
async function submitTeamMembers (teamMembers, formNode) {
  const res = await axios.post(teamMembers)
  
  formNode.setErrors(
    null, // no form errors
    {
      // THE MAGIC IS HERE
      'teamMembers': ['There was a problem with 1 of your team members.'],
      'teamMembers.1.email': ['emily@formkit.com is already on a team. Please remove her from that team before adding her to this team.'],
    }
  )
}
</script>

<template>
  <p><em>Submit to see the errors.</em></p>
  <FormKit
    #default="{ value }"
    type="form"
    @submit="submitTeamMembers"
    id="teamMemberForm"
    submit-label="Submit to see the errors"
    help="hello"
  >
    <FormKit
      id="repeater"
      name="teamMembers"
      type="repeater"
      label="Additional Team Members"
      add-label="Add Team Member"
      :value="[
        { email: 'john@formkit.com'  },
        { email: 'emily@formkit.com' },
      ]"
    >
      <FormKit
        type="email"
        label="Team Member email"
        name="email"
        validation="required|email"
        placeholder="Add email address..."
      />
    </FormKit>
    <pre wrap>{{ value }}</pre>
  </FormKit>
</template>

<style>
#teamMemberForm pre { margin-bottom: 20px; }
</style>