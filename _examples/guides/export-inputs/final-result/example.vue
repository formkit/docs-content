<template>
  <FormKit type="text" label="FormKit's Built-in Text Input" />
  <FormKit
    type="floatingLabelTextInput"
    label="Our new Floating Label Text Input"
    help="Check out the HTML tab to compare the 2 inputs."
  />
</template>

<style>
[data-type="floatingLabelTextInput"] .formkit-inner {
  position: relative;
}

[data-type="floatingLabelTextInput"] .formkit-label {
  position: absolute;
  left: 0.5em;
  transition: all 0.25s;
  bottom: calc(100% - 0.75em);
  transform: translateY(100%);
  padding: 0.25em;
  box-sizing: border-box;
}

[data-type="floatingLabelTextInput"] input:focus ~ .formkit-label[data-floating-label='true'],
[data-type="floatingLabelTextInput"] textarea:focus ~ .formkit-label[data-floating-label='true'],
[data-type="floatingLabelTextInput"] .formkit-label[data-floating-label='true'][data-has-value='true'] {
  font-size: 0.7em;
  transform: translateY(50%);
  background-color: white;
  bottom: 100%;
}

.dark [data-type="floatingLabelTextInput"] input:focus ~ .formkit-label[data-floating-label='true'],
.dark [data-type="floatingLabelTextInput"] textarea:focus ~ .formkit-label[data-floating-label='true'],
.dark [data-type="floatingLabelTextInput"] .formkit-label[data-floating-label='true'][data-has-value='true'] {
  background-color: rgb(15 23 42);
}
</style>
