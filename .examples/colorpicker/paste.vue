<template>
  <h2>
    Try pasting in these color values when your focus is in or on the
    colorpicker!
  </h2>
  <ul>
    <li><pre>#FF0000</pre></li>
    <li><pre>hsla(24, 51%, 56%, 0.8)</pre></li>
    <li><pre>rgba(189, 210, 224, 1)</pre></li>
  </ul>

  <!-- %partial% -->
  <FormKit 
    type="colorpicker" 
    label="I accept pasted values" 
    value="#68B9CD" 
  />

  <FormKit
    type="colorpicker"
    label="I do not accept pasted values"
    value="hsla(288, 56%, 52%, 1)"
    allow-paste="false"
  />
  <!-- %partial% -->
</template>
