import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import NavBar from './components/navBar/navBar';
import About from './pages/About';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <About />
    </>
  )
}

export default App
