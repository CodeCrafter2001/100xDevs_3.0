import { use, useState } from 'react'
import './App.css'
import { useFetch } from './useFetch'
function App() {
 const {finalData}= useFetch("https://jsonplaceholder.typicode.com/posts/1");
 return(
  <div>
    {JSON.stringify(finalData)}
  </div>
 )
}

export default App
