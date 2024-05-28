<script setup>
/* %partial%::javascript:: */
const styledMarks = [
  {
    at: 0,
    label: '0',
    class: 'tiny',
    labelClass: 'red',
  },
  {
    at: 25,
    label: '25',
    class: 'small',
    labelClass: 'orange',
  },
  {
    at: 50,
    label: '50',
    class: 'normal',
    labelClass: 'yellow',
  },
  {
    at: 75,
    label: '75',
    class: 'large',
    labelClass: 'blue-green',
  },
  {
    at: 100,
    label: '100',
    class: 'xlarge',
    labelClass: 'green',
  },
]
/* %partial% */
</script>

<template>
  <FormKit
    type="slider"
    label="I have styled marks"
    value="90"
    :marks="styledMarks"
    mark-labels
  />
</template>

<style scoped>
[data-type='slider'] .formkit-mark {
  box-shadow: 0 0 0 0.1em rgba(0, 0, 0, 0.75);
}

[data-type='slider'] .formkit-mark.tiny {
  width: 0.1em;
  height: 0.1em;
}
[data-type='slider'] .formkit-mark.small {
  width: 0.25em;
  height: 0.25em;
}
[data-type='slider'] .formkit-mark.normal {
  width: 0.5em;
  height: 0.5em;
}
[data-type='slider'] .formkit-mark.large {
  width: 0.75em;
  height: 0.75em;
}
[data-type='slider'] .formkit-mark.xlarge {
  width: 1em;
  height: 1em;
}

[data-type='slider'] .formkit-mark-label.red {
  color: #f44336;
}
[data-type='slider'] .formkit-mark-label.orange {
  color: #ff9800;
}
[data-type='slider'] .formkit-mark-label.yellow {
  color: #baac2e;
}
[data-type='slider'] .formkit-mark-label.blue-green {
  color: #009688;
}
[data-type='slider'] .formkit-mark-label.green {
  color: #4caf50;
}
</style>
