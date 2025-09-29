import { useEffect, useState, useRef } from "react";

function Chat(){
    const[message, setMessage] = useState(["hello! how are you?"]);
    const chatBoxRef = useRef(null);
//funciton for adding a new message
const addMessage= ()=>{
    setMessage((prevMessage)=>[...prevMessage,"newMessage!"]);
}
useEffect( ()=>{
if(chatBoxRef.current){
    chatBoxRef.current.scrollTop= chatBoxRef.current.scrollHeight;
}
},[message])

return (
    <div>
      <div 
        ref={chatBoxRef} 
        style={{ height: "150px", overflowY: "scroll", border: "1px solid black" , background: "linear-gradient(to right, #2C5364, #203A43, #0e3141ff)",borderRadius:"5px", boxShadow:"0 0 50px #000000ff"}}
      >
        {message.map((msg,index) =>(
            <div key={index}> {msg}</div>
        ))}
      </div>
      <button onClick={addMessage}>Add Message</button>
    </div>
  );
    
}

export default Chat;