import { useState,createContext, useContext } from 'react'
import Light from './LightBulb'
import './App.css'
export const BulbContext= createContext(null);
function App() {
    const [bulbOn, setBulbOn]= useState(true);
 return <div>
    <BulbContext.Provider value={{
        bulbOn: bulbOn,
        setBulbOn: setBulbOn
    }}>
<Light/>
</BulbContext.Provider>
 </div>
}


export default App
