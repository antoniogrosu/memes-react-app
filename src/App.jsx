import { useState } from 'react'
import Navbar from './Navbar'
import Form from './Form'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar />
      <Form />
    </div>
  )
}

export default App
