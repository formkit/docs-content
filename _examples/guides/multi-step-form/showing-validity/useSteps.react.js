import { useRef, useState } from 'react'

export default function useSteps() {
  const [activeStepState, setActiveStepState] = useState('')
  const [stepsState, setStepsState] = useState({})
  const activeStep = useRef('')
  const steps = useRef({})

  function updateSteps(updater) {
    setStepsState((current) => {
      const next = updater(current)
      steps.current = next
      return next
    })
  }

  function setActiveStep(nextStep) {
    activeStep.current = nextStep
    setActiveStepState(nextStep)
  }

  function syncStep(name, node) {
    updateSteps((current) => ({
      ...current,
      [name]: {
        ...current[name],
        valid: Boolean(node.context?.state.valid),
      },
    }))
  }

  function stepPlugin(node) {
    if (node.props.type === 'group') {
      const name = String(node.name)

      node.on('created', () => {
        syncStep(name, node)
        if (!activeStep.current) {
          setActiveStep(name)
        }
      })

      node.on('message-added', () => syncStep(name, node))
      node.on('message-updated', () => syncStep(name, node))
      node.on('message-removed', () => syncStep(name, node))
      node.on('settled:blocking', () => syncStep(name, node))
      node.on('unsettled:blocking', () => syncStep(name, node))

      return false
    }
  }

  return {
    activeStep: activeStepState,
    setActiveStep,
    steps: stepsState,
    stepPlugin,
  }
}
