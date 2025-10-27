import { useState , createContext, useContext} from 'react'
import {RecoilRoot} from "recoil";
import './App.css' 
import { counterAtom } from './store/atoms/counterAtom';
// context api
const CountContext= createContext();
function CountContextProvider({children }){
const [Count, setCount]= useState(0);
return (
<CountContext.Provider value={{Count, setCount}}>
  {children }
</CountContext.Provider>
);
} 
function Parent(){ 
  return (
    <CountContextProvider>
      <Increase/>
      <Decrease/>
      <Value/>
    </CountContextProvider>
  );
}

function Increase(){
  const {Count, setCount}= useContext(CountContext);
  return <button onClick={()=> setCount(Count+1)}>Increase</button>
}
function Decrease(){
  const {Count, setCount}= useContext(CountContext);
return <button onClick={()=> setCount(Count-1)}>Decrease</button>
}
function Value(){
  const {Count}= useContext(CountContext);
return <p>Count :{ Count}</p>
}

// recoil rendering

function App() {

return (
  <>
  <div className="contextAPI-counter">
  <p>Counter using context api</p>
<Parent/>
</div>
<div className="recoil-counter"></div>
<p>counter using Rocoil</p>
</>
);
}

export default App
