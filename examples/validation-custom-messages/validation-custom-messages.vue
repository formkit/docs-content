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
    is: 'Hey! That isn\'t a JS framework!'
  }"
/>
<!-- %partial%::html:: -->
</template>
