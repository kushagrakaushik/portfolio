import { useState, useEffect } from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'

function App() {
  const [theme, setTheme] = useState("dark")

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [theme])

  return (
      <div className='dark:bg-[#09090B] bg-white w-full min-h-screen flex flex-col items-center relative overflow-hidden'>
        <Navbar theme={theme} setTheme={setTheme} />
      </div>
  )
}

export default App
