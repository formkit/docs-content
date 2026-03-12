import { genesisIcons } from '@formkit/icons'
import { FormKit, defineFormKitConfig } from '@formkit/react'

export const formkitConfig = defineFormKitConfig({
  icons: { ...genesisIcons },
})

export default function App() {
  return (
    <>
      {/* %partial% */}
      <FormKit
        type="form"
        onSubmit={() => false}
        submitLabel="Let's gooo"
        submitAttrs={{
          suffixIcon: 'submit',
          help: "With 130+ icons built in, it's easy to get started!",
        }}
      >
        <FormKit
          type="email"
          prefixIcon="email"
          label="What is your email address?"
          placeholder="myname@website.com"
          help="Look at my fancy prefix icon!"
        />
        <FormKit
          type="text"
          suffixIcon="search"
          label="What are you looking for?"
          help="I have a suffix icon."
        />
        <FormKit
          type="range"
          prefixIcon="sad"
          suffixIcon="happy"
          label="How do icons make you feel?"
          help="Many input types support icons, like this range input."
        />
        <FormKit
          type="select"
          selectIcon="caretDown"
          label="How likely are you to use icons?"
          help="You can replace default icons such as the select input control."
          options={[
            'Very Likely',
            'Likely',
            'Unsure',
            'Unlikely',
            'Very Unlikely',
          ]}
        />
        <FormKit
          type="color"
          prefixIcon="color"
          label="Choose a color"
          value="#5896D0"
          help="Add icons to color inputs!"
        />
      </FormKit>
      {/* %partial% */}
    </>
  )
}
