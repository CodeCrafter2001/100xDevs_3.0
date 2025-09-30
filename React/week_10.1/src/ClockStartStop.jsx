import { useRef, useState } from "react";
export default function Stopwatch(){
const[time, setTime]= useState(0);
const intervalRef= useRef(null);

function StartTimer(){
if(intervalRef.current != null) return ; // already runninf , do nothing
intervalRef.current= setInterval(()=>{
    setTime((prevTime)=> prevTime+1);
},1000);
}
function StopTimer(){
clearInterval(intervalRef.current);
intervalRef.current=null
}

function ZeroTimer(){
    setTime(0);
}
return <div>
    <h1>Time:{time}</h1>
    <button onClick={StartTimer}>Start</button>
    <button onClick={StopTimer} onDoubleClick={ZeroTimer}>Stop</button>
</div>
}