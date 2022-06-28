<!-- %partial%::html:: -->
<template>
  <FormKit
    type="text"
    label="FormKit Text Input"
  />
  <FormKit
    type="floatingLabelTextInput"
    label="FormKit Floating Label Text Input"
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
