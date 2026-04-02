import { useEffect, useMemo, useState } from 'react'

export default function OneTimePassword({ context }) {
  const digits = Number(context.digits)
  const [tmp, setTmp] = useState(context.value || '')
  const inputRefs = useMemo(() => Array.from({ length: digits }, () => ({ current: null })), [digits])

  useEffect(() => {
    setTmp(context.value || '')
  }, [context.value])

  function handleInput(index, event) {
    const nextChar = event.target.value
    const prev = tmp
    let nextValue

    if (prev.length <= index) {
      nextValue = `${prev}${nextChar}`
    } else {
      nextValue = `${prev.slice(0, index)}${nextChar}${prev.slice(index + 1)}`
    }

    setTmp(nextValue)

    if (index < digits - 1 && nextValue.length >= prev.length) {
      inputRefs[index + 1]?.current?.focus()
    } else if (index > 0 && nextValue.length < prev.length) {
      inputRefs[index - 1]?.current?.focus()
    }

    if (nextValue.length === digits) {
      context.node.input(nextValue)
    } else if (nextValue.length < digits && context.value !== '') {
      context.node.input('')
    }
  }

  function handleFocus(event) {
    event.target.select()
  }

  return (
    <>
      {Array.from({ length: digits }, (_, index) => (
        <input
          key={index}
          ref={(element) => {
            inputRefs[index].current = element
          }}
          maxLength={1}
          className={context.classes.digit}
          value={tmp[index] || ''}
          onInput={(event) => handleInput(index, event)}
          onFocus={handleFocus}
        />
      ))}
    </>
  )
}
