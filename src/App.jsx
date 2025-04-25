import { useState } from 'react'
import './App.css'
import ArrayOfObjects from './components/ArrayOfObjects'
import NavBar from './components/NavBar'

function App() {
  const [count, setCount] = useState(0)
  const names =['Trust','Successedance','Success','Trust','Successedance','Success','Trust','Successedance','Success','Trust','Successedance','Success']
 
  return (
    <>
      <NavBar/>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        {/**
         * This is how we render a list in react from an array.
         * We can use the map function to iterate over the array and return a new array of elements.
         * We need to provide a unique key for each element in the list.
         * In this case we are using the index of the element in the array as the key.
         * This is not recommended for large lists as it can cause performance issues.
         * A better way is to use a unique id for each element in the list.
         * We can also use the index as a key if the list is static and does not change.
         * For example if we have a list of users and we want to render their names.
         * We can use the id of the user as the key.
         */}
         <ul>
          {names.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>
      <ArrayOfObjects/>
      </div>
    
    </>
  )
}

export default App
