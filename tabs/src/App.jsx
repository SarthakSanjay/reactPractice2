import { useEffect, useState } from 'react'
import './App.css'
import BookList from './components/Booklist'
import data from './components/data'
import Hero from './components/Hero'

function App() {
const [loading , setLoading] = useState(true)
const [jobs , setJobs] = useState([])
const [value, setValue] =useState(0)

useEffect(()=>{
  setJobs(data)
  setLoading(false)
},[])

if(loading){
  return (
    <section>
      <h1>Loading...</h1>
    </section>
  )
}
  return (
    <div className="App">
     {/* <Hero data={data} /> */}
     <BookList />
    </div>
  )
}

export default App
