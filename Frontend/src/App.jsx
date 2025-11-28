import { useState } from 'react'
import Hero from './Hero Section/Hero.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Hero />
    </>
    )
}

export default App
