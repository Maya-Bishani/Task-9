import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Task from './components/Task/Task'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Task/>
    </>
  )
}

export default App
