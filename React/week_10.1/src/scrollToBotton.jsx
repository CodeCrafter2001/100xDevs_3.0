import { useEffect, useState, useRef } from "react";

function Chat(){
    const[message, setMessage] = useState(["hello! how are you?"]);
    const chatBoxRef = useRef(null);
//funciton for adding a new message
const addMessage= ()=>{
    setMessage((prevMessage)=>[...prevMessage,"newMessage!"]);
}

return (
    <div>
      <div 
        ref={chatBoxRef} 
        style={{ height: "150px", overflowY: "scroll", border: "1px solid black" }}
      >
        
      </div>
      <button onClick={addMessage}>Add Message</button>
    </div>
  );
    
}

export default Chat;