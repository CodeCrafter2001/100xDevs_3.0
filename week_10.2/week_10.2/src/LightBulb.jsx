import { useState ,createContext, useContext} from "react";
import { BulbContext } from "./App";
export default function Light() {

  return (
    <div>
      <BulbState />
      <ToggleBulbState  />
    </div>
  );
}

function BulbState() {
  const {bulbOn}= useContext(BulbContext)
  return <div>{bulbOn ? "Bulb ON" : "Bulb OFF"}</div>;
}

function ToggleBulbState() {
const {bulbOn, setBulbOn}= useContext(BulbContext);
  function toggle() {
    setBulbOn(prev => !prev);
  }

  return (
    <div>
      <button onClick={toggle}>Toggle the bulb</button>
    </div>
  );
}
