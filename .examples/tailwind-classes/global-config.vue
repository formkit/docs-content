<script>
// %partial%::javascript::
// main.js (your main Vue file)
import { createApp } from 'vue'
import App from './App.vue'
import { plugin, defaultConfig } from '@formkit/vue'
import './index.css' // Styles that include Tailwind from your build process

createApp(App)
  .use(
    plugin,
    defaultConfig({
      config: {
        rootClasses(sectionKey, node) {
          // this is an incomplete theme for demonstration purposes
          const type = node.props.type
          // create a classConfig object that contains either strings or functions
          // that return strings. We'll loop over the output later to create our
          // class objects of keys with boolean values.
          const classConfig = {
            outer: 'mb-5', // string values apply to everything
            legend: 'block mb-1 font-bold',
            label() {
              // functions that return strings allow you to diff on types
              if (type === 'text') {
                return 'block mb-1 font-bold'
              }
              if (type === 'radio') {
                return 'text-sm text-gray-600 mt-0.5'
              }
            },
            options() {
              if (type === 'radio') {
                return 'flex flex-col flex-grow mt-2'
              }
            },
            input() {
              if (type === 'text') {
                return 'w-full h-10 px-3 mb-2 text-base text-gray-700 placeholder-gray-400 border rounded-lg focus:shadow-outline'
              }
              if (type === 'radio') {
                return 'mr-2'
              }
            },
            wrapper() {
              if (type === 'radio') {
                return 'flex flex-row flex-grow'
              }
            },
            help: 'text-xs text-gray-500',
          }

          // helper function to created class object from strings
          function createClassObject(classesArray) {
            const classList = {}
            if (typeof classesArray !== 'string') return classList
            classesArray.split(' ').forEach((className) => {
              classList[className] = true
            })
            return classList
          }

          const target = classConfig[sectionKey]
          // return a class objects from strings and return them for each
          // section key defined by inputs in FormKit
          if (typeof target === 'string') {
            return createClassObject(target)
          } else if (typeof target === 'function') {
            return createClassObject(target())
          }

          return {} // if no matches return an empty object
        },
      },
    })
  )
  .mount('#app')
// %partial%::javascript::
</script>
