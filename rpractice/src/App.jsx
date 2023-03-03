import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import BookList from './components/Booklist'
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
