<template>
<!-- %partial%::html:: -->
<FormKit
  type="select"
  label="Which of these is your favorite modern JavaScript framework?"
  :options="[
  	  'Vue',
	  'React',
	  'Angular',
	  'Laravel'
  ]"
  placeholder="Select a food type"
  value="Vue"
  validation="required|is:Vue,React,Angular"
  validation-label="JS Framework"
  validation-behavior="live"
  :validation-messages="{
    required: 'Please pick your favorite framework',
    is: ({ name, args, node }) => {
	  return `${node.value} is not a valid ${name}. Please select either ${args[0]}, ${args[1]}, or ${args[2]}`
	}
  }"
/>
<!-- %partial%::html:: -->
</template>
