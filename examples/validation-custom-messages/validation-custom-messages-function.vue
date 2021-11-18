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
  validation="required|is:Vue,React,Angular"
  validation-behavior="live"
  :validation-messages="{
    required: 'Please pick your favorite framework',
    is: ({ name, args, node }) => {
	  return `${node.value} is not a valid JS framework. Please select either ${args[0]} , ${args[1]}, ${args[2]}`
	}
  }"
/>
<!-- %partial%::html:: -->
</template>
