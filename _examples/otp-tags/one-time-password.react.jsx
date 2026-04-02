export default function OneTimePassword({ context }) {
  const digits = Number(context.digits)

  function handleInput(event) {
    context.node.input(event.target.value)
  }

  return (
    <>
      {Array.from({ length: digits }, (_, index) => (
        <input
          key={index}
          maxLength={1}
          className={context.classes.digit}
          value={context._value}
          onInput={handleInput}
        />
      ))}
    </>
  )
}
