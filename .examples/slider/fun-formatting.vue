<script setup>
function emotionClass(node) {
  const value = node._value
  if (value < 25) {
    return 'red'
  } else if (value < 50) {
    return 'orange'
  } else if (value < 75) {
    return 'yellow'
  } else if (value < 100) {
    return 'green'
  } else if (value === 100) {
    return 'hyper'
  }
}
</script>

<template>
  <!-- %partial%::html:: -->
  <FormKit
    type="slider"
    label="About how large should the spacing be?"
    help="This is a rough estimate."
    :value="[25, 75]"
    :tooltip-format="(value, handle) => (handle === 'min' ? '👉' : '👈')"
    tooltip-class="large"
  />

  <FormKit
    type="slider"
    label="What do you think of FormKit?"
    help="be honest."
    value="80"
    :tooltip-format="
      (value) => {
        if (value < 25) {
          return '😡'
        } else if (value < 50) {
          return '😐'
        } else if (value < 75) {
          return '😀'
        } else if (value < 100) {
          return '😍'
        } else if (value === 100) {
          return '🦄'
        }
      }
    "
    tooltip="true"
    :fill-class="emotionClass"
    tooltip-class="large"
  />
  <!-- %partial%::html:: -->
</template>

<style>
@keyframes hyperbg {
  0% {
    background-position: 0%;
  }
  100% {
    background-position: 100%;
  }
}

[data-type='slider'].formkit-outer {
  margin-top: 1em;
}
[data-type='slider'] .formkit-tooltip.large {
  font-size: 2rem;
}
[data-type='slider'] .formkit-fill.red {
  background-color: #f44336;
}
[data-type='slider'] .formkit-fill.orange {
  background-color: #ff9800;
}
[data-type='slider'] .formkit-fill.yellow {
  background-color: #baac2e;
}
[data-type='slider'] .formkit-fill.blue-green {
  background-color: #009688;
}
[data-type='slider'] .formkit-fill.green {
  background-color: #4caf50;
}
[data-type='slider'] .formkit-fill.hyper {
  animation: hyperbg 0.33s linear infinite;
  background-size: 50%;
  background-image: linear-gradient(
    90deg,
    #ff0000 0%,
    #ff7f00 10%,
    #ffff00 20%,
    #00ff00 30%,
    #0000ff 40%,
    #e3bcff 50%,
    #9400d3 60%,
    #ff0000 70%,
    #ff7f00 80%,
    #ffff00 90%,
    #00ff00 100%
  );
}
</style>
