<template>
  <!-- %partial%::html:: -->
  <FormKit
    label="I've got Tailwind classes from rootClasses"
    placeholder="Look Ma! Tailwind styles."
    help="I only get the `text` styles because the config has conditional logic"
  />
  <FormKit
    label="I override my label color"
    placeholder="I don't like to conform"
    :classes="{
      label: {
        'text-gray-600': false,
        'text-red-600': true
      }
    }"
    help="Gray label text color removed, red added."
  />
  <FormKit
    label="How much do you like Tailwind?"
    type="radio"
    :options="{
      little: 'I like it a little',
      lots: 'I like it a lot'
    }"
    help="I only get the `radio` styles because the config has conditional logic"
  />
  <!-- %partial% -->
</template>