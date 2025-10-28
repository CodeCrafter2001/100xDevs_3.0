import React from 'react';
import { useState , createContext, useContext} from 'react'
import {RecoilRoot, useRecoilValue, useSetRecoilState} from "recoil";

import './App.css' 
import { counterAtom } from './store/atoms/counterAtom'
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
function CurrentCount(){
  const count = useRecoilValue(counterAtom);
  console.log("Recoil count:", count);
  return <div>{count}</div>;
}

function RecoilIncrease(){
  const setCount= useSetRecoilState(counterAtom);
  return(
    <button onClick={()=> setCount(c=> c+1)}>Increase</button>
  );
  
}
function Recoildecrease(){
  const setCount= useSetRecoilState(counterAtom);
  return(
    <button onClick={()=> setCount(c=> c-1)}>Decrease</button>
  );
}
function RecoilParent(){
  return <div>

<CurrentCount/>
<RecoilIncrease/>
<Recoildecrease/>
</div>
  
}


function App() {
  return (
    <>
      <div className="contextAPI-counter">
        <p>Counter using context api</p>
        <Parent />
      </div>
    <RecoilRoot>
      <div className="recoil-counter">
        <p>counter using Recoil</p>
        <RecoilParent />
      </div>
    </RecoilRoot>
    </>
  );
}


export default App
