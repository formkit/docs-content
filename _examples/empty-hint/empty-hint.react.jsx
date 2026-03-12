import { FormKit } from '@formkit/react'

export default function App() {
  return (
    <>
      {/* %partial% */}
      <FormKit
        type="checkbox"
        label="Relocation Preferences"
        options={[
          'Argentina',
          'Belarus',
          'Hungary',
          'Iceland',
          'Morocco',
          'Peru',
          'Spain',
          'Yemen',
        ]}
        help="If you had to relocate for work - select your preferred locations."
        validation="+min:3"
        validationVisibility="live"
      />
      {/* %partial% */}
    </>
  )
}
