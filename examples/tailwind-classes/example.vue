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
  <!-- %head% -->
  <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">
  <!-- %head% -->
</template>

<!-- %config% --><script>
{
  config: {
    rootClasses (compositionKey, node) {
      const type = node.props.type
      const classConfig = {
        outer: 'mb-5',
        legend: 'block mb-1 font-bold',
        label () {
          if (type === 'text') { return 'block mb-1 font-bold' }
          if (type === 'radio') { return 'text-sm text-gray-600 mt-0.5' }
        },
        options () {
          if (type === 'radio') { return 'flex flex-col flex-grow mt-2' }
        },
        input () {
          if (type === 'text') { return 'w-full h-10 px-3 mb-2 text-base text-gray-700 placeholder-gray-400 border rounded-lg focus:shadow-outline' }
          if (type === 'radio') { return 'mr-2' }
        },
        wrapper () {
          if (type === 'radio') { return 'flex flex-row flex-grow' }
        },
        help: 'text-xs text-gray-500',
      }

      function createClassObject (classesArray) {
        const classList = {}
        classesArray.split(' ').forEach(className => {
          classList[className] = true
        })
        return classList
      }

      const target = classConfig[compositionKey]
      if (typeof target === 'string') {
        return createClassObject(target)
      } else if (typeof target === 'function') {
        return createClassObject(classConfig[compositionKey]())
      }
    }
  }
}
</script><!-- %config% -->