import React,{useState} from 'react';

import './App.css';

function App() {
  //Initialise the state, example of react hook
  const [input,setInput] = useState('');
  const [messages,setMessages] = useState(['hello']);
  console.log(input);
console.log(messages);
  const sendMessage = (event)=>{
    //all the logic to send a message goes here
    setMessages([...messages,input])
    setInput('');
  }

  return (
    <div className="App">
      <h1>Messenger</h1>
      <input value={input} onChange={event => setInput(event.target.value)}/>
      <button onClick={sendMessage}>Send Message</button>

          {messages.map(message=>(
            <p>{message}</p>
          ))}

      {/* Input field */}
      {/* Send button */}
      {/* View all the messages */}
    </div>
  );
}

export default App;
