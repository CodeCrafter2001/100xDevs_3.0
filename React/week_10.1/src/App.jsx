import { useState } from 'react'
import { BrowserRouter, Routes, Route, Links    
 } from "react-router-dom";
import './App.css'

function App() {
 return <div>
<a href='/'> Allen</a>
|
<a href='/neet/online-coaching-class-11'> Class 11</a>
|
<a href='/neet/online-coaching-class-12'> Class 12</a>
<BrowserRouter>
<Routes>
    <Route path='/neet/online-coaching-class-11' element={<Class11Program/>} />
    <Route path='/neet/online-coaching-class-12' element={<Class12Program/>} />
    <Route path='/' element={<Landing/>} />
</Routes>
</BrowserRouter>
 </div>
}

function Landing(){
    return <div>
        Welcome to allen
    </div>
}

function Class11Program(){
    return <div>
        Neet program for class 11
    </div>
}

function Class12Program(){
    return <div>
        Neet program for class 12
    </div>
}
export default App
