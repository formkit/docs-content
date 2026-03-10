import { FormKit } from '@formkit/react'

export default function UserPreferences() {
  return (
    <>
      {/* %partial% */}
      <FormKit
        type="checkbox"
        name="preferences"
        label="Email Preferences"
        options={['marketing', 'updates']}
      />
      {/* %partial% */}
    </>
  )
}
