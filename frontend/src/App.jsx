import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'


function App() {
  const [products, setProducts] = useState([])
  return (
    <div>
      <Home />
    </div>
  )
}

export default App
