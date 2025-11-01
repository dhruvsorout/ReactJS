import React, { useEffect, useState } from 'react'

function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    const fetchTodos = async () => {
      const res = await fetch("http://localhost:3000/todos")
      const json = await res.json()
      setTodos(json.todos)
    }

    fetchTodos()

    const intervalId = setInterval(fetchTodos, 10000)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <div>
      {todos.map((todo, index) => (
        <Todo key={index} title={todo.title} description={todo.description} />
      ))}
    </div>
  )
}

function Todo({ title, description }) {
  return (
    <div>
      <h1>{title}</h1>
      <h4>{description}</h4>
    </div>
  )
}

export default App
