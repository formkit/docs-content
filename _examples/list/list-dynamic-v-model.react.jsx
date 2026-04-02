import { useState } from 'react'
import { FormKit, FormKitIcon, defineFormKitConfig } from '@formkit/react'
import { genesisIcons } from '@formkit/icons'

const todoStyle = {
  display: 'flex',
  alignItems: 'center',
  marginBottom: '0.5rem',
}

const controlsStyle = {
  listStyleType: 'none',
  margin: 0,
  padding: 0,
  display: 'flex',
  alignItems: 'center',
}

const buttonStyle = {
  border: 'none',
  background: 'none',
  padding: 0,
  margin: 0,
  cursor: 'pointer',
  lineHeight: 1,
  transition: 'color 0.3s ease',
  appearance: 'none',
  fontSize: '1em',
  color: 'var(--fk-color-primary)',
  marginLeft: '0.5rem',
}

const closeStyle = {
  ...buttonStyle,
  color: 'var(--fk-color-danger)',
}

export const formkitConfig = defineFormKitConfig({
  icons: {
    ...genesisIcons,
  },
})

export default function App() {
  const [todos, setTodos] = useState([
    'Buy groceries',
    'Do laundry',
    'Clean the bathroom',
    'Pay bills',
    'Call mom',
    'Go for a run',
  ])

  function moveTodo(from, to) {
    if (to < 0 || to >= todos.length) return
    const nextTodos = [...todos]
    nextTodos.splice(to, 0, nextTodos.splice(from, 1)[0])
    setTodos(nextTodos)
  }

  return (
    <>
      {/* %partial% */}
      <h1>Todo list</h1>
      <FormKit
        modelValue={todos}
        onUpdateModelValue={setTodos}
        type="list"
        dynamic
        sync
      >
        {({ items, value }) => (
          <>
            {items?.map((item, index) => (
              <div key={`${item}-${index}`} style={todoStyle}>
                <FormKit type="text" index={index} />
                <ul style={controlsStyle}>
                  <li>
                    <button
                      type="button"
                      onClick={() => moveTodo(index, index - 1)}
                      style={buttonStyle}
                    >
                      <FormKitIcon icon="arrowUp" />
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => moveTodo(index, index + 1)}
                      style={buttonStyle}
                    >
                      <FormKitIcon icon="arrowDown" />
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() =>
                        setTodos((current) =>
                          current.filter((_, todoIndex) => todoIndex !== index)
                        )
                      }
                      style={closeStyle}
                    >
                      <FormKitIcon icon="close" />
                    </button>
                  </li>
                </ul>
              </div>
            ))}
            <FormKit
              type="button"
              onClick={() => setTodos((current) => current.concat(''))}
            >
              Add a todo
            </FormKit>
            <pre>{JSON.stringify(value, null, 2)}</pre>
          </>
        )}
      </FormKit>
      {/* %partial% */}
    </>
  )
}
