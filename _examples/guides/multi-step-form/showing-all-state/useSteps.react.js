import { createMessage } from '@formkit/core'
import { useRef, useState } from 'react'

export default function useSteps() {
  const [activeStepState, setActiveStepState] = useState('')
  const [stepsState, setStepsState] = useState({})
  const [visitedStepsState, setVisitedStepsState] = useState([])
  const activeStep = useRef('')
  const steps = useRef({})
  const stepNodes = useRef({})
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
      const node = stepNodes.current[stepName]
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
      stepNodes.current[name] = node

      node.on('created', () => {
        syncStep(name, node)
        if (!activeStep.current) {
          setActiveStep(name)
        }
      })

      node.on('destroyed', () => {
        delete stepNodes.current[name]
      })

      node.on('count:blocking', ({ payload: count }) => {
        syncStep(name, node, { blockingCount: count })
      })

      node.on('count:errors', ({ payload: count }) => {
        syncStep(name, node, { errorCount: count })
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
    stepPlugin,
    steps: stepsState,
    visitedSteps: visitedStepsState,
    visitStep,
  }
}
