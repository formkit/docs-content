import { createMessage, getNode } from '@formkit/core'
import { useRef, useState } from 'react'

export default function useSteps() {
  const [activeStepState, setActiveStepState] = useState('')
  const [stepsState, setStepsState] = useState({})
  const [visitedStepsState, setVisitedStepsState] = useState([])
  const activeStep = useRef('')
  const steps = useRef({})
  const visitedSteps = useRef([])

  function updateSteps(updater) {
    setStepsState((current) => {
      const next = updater(current)
      steps.current = next
      return next
    })
  }

  function showVisitedValidation(stepNames) {
    stepNames.forEach((stepName) => {
      const node = getNode(stepName)
      node?.walk((currentNode) => {
        currentNode.store.set(
          createMessage({
            key: 'submitted',
            value: true,
            visible: false,
          })
        )
      })
    })
  }

  function visitStep(stepName) {
    if (!stepName || visitedSteps.current.includes(stepName)) return
    const nextVisitedSteps = [...visitedSteps.current, stepName]
    visitedSteps.current = nextVisitedSteps
    setVisitedStepsState(nextVisitedSteps)
    showVisitedValidation(nextVisitedSteps)
  }

  function setActiveStep(nextStep) {
    const previousStep = activeStep.current
    if (previousStep && previousStep !== nextStep) {
      visitStep(previousStep)
    }
    activeStep.current = nextStep
    setActiveStepState(nextStep)
  }

  function setStep(delta) {
    const stepNames = Object.keys(steps.current)
    const currentIndex = stepNames.indexOf(activeStep.current)
    const nextStep = stepNames[currentIndex + delta]
    if (nextStep) {
      setActiveStep(nextStep)
    }
  }

  function syncStep(name, node, extra = {}) {
    updateSteps((current) => ({
      ...current,
      [name]: {
        ...current[name],
        valid: Boolean(node.context?.state.valid),
        ...extra,
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

      node.on('count:errors', ({ payload: count }) => {
        syncStep(name, node, { errorCount: count })
      })

      node.on('count:blocking', ({ payload: count }) => {
        syncStep(name, node, { blockingCount: count })
      })

      node.on('message-added', () => syncStep(name, node))
      node.on('message-updated', () => syncStep(name, node))
      node.on('message-removed', () => syncStep(name, node))

      return false
    }
  }

  return {
    activeStep: activeStepState,
    setActiveStep,
    setStep,
    stepPlugin,
    steps: stepsState,
    visitedSteps: visitedStepsState,
  }
}
