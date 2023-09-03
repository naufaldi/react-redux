import { useState } from 'react'

import './App.css'
import Home from './components/home'
import Notes from './components/home/notes'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home count={count} setCount={setCount}/>
      <Notes/>
    </>
  )
}

export default App
