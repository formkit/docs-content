<template>
  <FormKit
    type="text"
    label="FormKit's Built-in Text Input"
  />
  <FormKit
    type="floatingLabelTextInput"
    label="Our new Floating Label Text Input"
    help="Check out the HTML tab to compare the 2 inputs."
  />
</template>

<style>
.formkit-inner {
  position: relative;
}

.formkit-label-floating {
  position: absolute;
  left: .5em;
  color: grey;
  transition: all .25s;
  bottom: calc(100% - .5em);
  transform: translateY(100%);
  padding: .25em;
  box-sizing: border-box;
}

input:focus ~ .formkit-label-floating,
textarea:focus ~ .formkit-label-floating,
.formkit-label-floating[data-has-value="true"] {
  font-size: .7em;
  transform: translateY(50%);
  background-color: white;
  bottom: 100%;
}
</style>
