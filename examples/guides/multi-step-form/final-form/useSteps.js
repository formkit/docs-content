import { reactive, toRef, ref } from 'vue'

export default function useSteps () {
  const activeStep = ref('')
  const steps = reactive({})
  
  const setStep = (delta) => {
    const stepNames = Object.keys(steps)
    const currentIndex = stepNames.indexOf(activeStep.value)
    activeStep.value = stepNames[currentIndex + delta]
  }
  
  const stepPlugin = (node) => {
    if (node.props.type == "group") {
      // builds an object of the top-level groups
      steps[node.name] = steps[node.name] || {}
      
      node.on('created', () => {
        // use 'on created' to ensure context object is available  
        steps[node.name].valid = toRef(node.context.state, 'valid')              
      })

      // listen for changes in error count and store it
      node.on('count:errors', ({ payload: count }) => {
        steps[node.name].errorCount = count
      })
      
      // set the active tab to the 1st tab
      if (activeStep.value === '') {
        activeStep.value = node.name
      }
      
      // Stop plugin inheritence to descendant nodes
      return false
    }
  }
  
  return { activeStep, steps, stepPlugin, setStep }
}