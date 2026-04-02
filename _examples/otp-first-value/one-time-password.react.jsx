export default function OneTimePassword({ context }) {
  function handleInput(event) {
    context.node.input(event.target.value)
  }

  return (
    <input
      onInput={handleInput}
      value={context._value}
      className="border border-gray-700"
    />
  )
}
