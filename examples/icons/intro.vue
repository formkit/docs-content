<template>
  <FormKit
    type="form"
    submit-label="Let's gooo"
    :submit-attrs="{
      'suffix-icon': 'submit',
      help: 'With 130+ icons built in, it’s easy to get started!'
    }"
  >
    <FormKit
      type="email"
      prefix-icon="email"
      label="What is your email address?"
      placeholder="myname@website.com"
      help="Look at my fancy prefix icon!"
    />
    <FormKit
      type="text"
      suffix-icon="search"
      label="What are you looking for?"
      help="I have a suffix icon."
    />
    <FormKit
      type="range"
      prefix-icon="sad"
      suffix-icon="happy"
      label="How do icons make you feel?"
      help="Many input types support icons, like this range input."
    />
    <FormKit
      type="select"
      select-icon="caretDown"
      label="How likely are you to use icons?"
      help="You can replace default icons such as the select input control."
      :options="['Very Likely', 'Likely', 'Unsure', 'Unlikely', 'Very Unlikely']"
    />
    <FormKit
      type="color"
      prefix-icon="color"
      label="Choose a color"
      value="#5896D0"
      help="Add icons to color inputs!"
    />
  </FormKit>
</template>
