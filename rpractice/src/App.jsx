import { useState } from 'react'
import './App.css'
import BookListMap from './components/BookListMap'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* <BookList /> */}
      <BookListMap />
    </div>
  )
}

export default App
