import { reactive, toRef, ref, watch } from 'vue'
import { getNode, createMessage } from '@formkit/core'

export default function useSteps () {
  const activeStep = ref('')
  const steps = reactive({})
  const visitedSteps = ref([]) // track visited steps

  // NEW: watch our activeStep and store visited steps
  // to know when to show errors
  watch(activeStep, (newStep, oldStep) => {
    if (oldStep && !visitedSteps.value.includes(oldStep)) {
      visitedSteps.value.push(oldStep)
    }
    // NEW: trigger showing validation on fields
    // within all visited steps
    visitedSteps.value.forEach((step) => {
      const node = getNode(step)
      node.walk((n) => {
        n.store.set(
          createMessage({
            key: 'submitted',
            value: true,
            visible: false,
          })
        )
      })
    })
  })

  const stepPlugin = (node) => {
    if (node.props.type == "group") {
      // builds an object of the top-level groups
      steps[node.name] = steps[node.name] || {}

      node.on('created', () => {
        // use 'on created' to ensure context object is available
        steps[node.name].valid = toRef(node.context.state, 'valid')
      })

      // NEW: Store or update the count of blocking validation messages.
      // FormKit emits the "count:blocking" event (with the count) each
      // time the count changes.
      node.on('count:blocking', ({ payload: count }) => {
        steps[node.name].blockingCount = count
      })

      // NEW: Store or update the count of backend error messages.
      node.on('count:errors', ({ payload: count }) => {
        steps[node.name].errorCount = count
      })

      // set the active tab to the 1st tab
      if (activeStep.value === '') {
        activeStep.value = node.name
      }

      // Stop plugin inheritance to descendant nodes
      return false
    }
  }

  return { activeStep, steps, stepPlugin, visitedSteps }
}
