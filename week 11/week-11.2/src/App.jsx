import { useState , createContext, useContext} from 'react'
import './App.css' 
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
function App() {

return  <div>
<Parent/>
</div>
}

export default App
