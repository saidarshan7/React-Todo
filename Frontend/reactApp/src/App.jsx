import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/todos'



function App() {
  // const [todos, setTodos] = useState(0)  //setTodos : set the value of todos and re-render the app component

  return (
    <>
      
        <CreateTodo/>
      
     
    </>
  )
}

export default App
