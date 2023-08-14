import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './Components/Header'
import {Articles} from './Components/Articles'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <Articles></Articles>
    </>
  )
}

export default App
