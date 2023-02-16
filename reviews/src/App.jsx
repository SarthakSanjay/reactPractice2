import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Reviews from './components/Reviews'
import reviews from './components/data'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
   
        <Reviews  />
     
    </div>
  )
}

export default App
