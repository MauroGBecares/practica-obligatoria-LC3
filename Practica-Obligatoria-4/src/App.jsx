import { useState } from 'react'
import './App.css'
import TaskList from './components/taskList/TaskList'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <TaskList />
    </>
  )
}

export default App
