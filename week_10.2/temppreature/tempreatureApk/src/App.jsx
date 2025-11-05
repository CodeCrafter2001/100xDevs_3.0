import { useState } from 'react'
import { RecoilRoot } from 'recoil'
import { tempreatureAtom } from './store/atoms/tempreatureAtom.js'
import './App.css'
import { farenthiteSelector } from './store/selectors/farenthiteSelector.js'
import { useRecoilValue, useSetRecoilState } from 'recoil'

//components for displaying tempreature and controling tempreature
function DisplayTempreature(){
  const celsius = useRecoilValue(tempreatureAtom);
  const fahrenheit = useRecoilValue(farenthiteSelector);
  return(
    <>
    <div>
      <h2>Tempreate App using recoil</h2>
    <p>celsius : {celsius} °C</p>
    <p>Fahrenheit: {fahrenheit.toFixed(2)} °F</p>
    </div>
    </>
  ); 
}
function TempreatureController(){
  const setTemp= useSetRecoilState(tempreatureAtom);
  return(
    <div>
      <button onClick={()=> setTemp(t => t+1)}>Increase Tempreature °C </button>
      <button onClick={()=> setTemp(t => t-1)}>Decrease tempreature °C</button>
    </div>
  );
}
function App() {
  return(
    <>
    <RecoilRoot>
      <DisplayTempreature/>
      <TempreatureController/>
    </RecoilRoot>
    </>
  );

}


export default App
