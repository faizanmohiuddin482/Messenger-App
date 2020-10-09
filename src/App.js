import React,{useState,useEffect} from 'react';
import { Button,FormControl,Input,InputLabel } from '@material-ui/core';
import './App.css';
import Message from './Message'

function App() {
  //Initialise the state, example of react hook
  const [input,setInput] = useState('');
  const [messages,setMessages] = useState(['hello']);
  const [username,setUsername] = useState('');
 
  // useState=variable in REACT
  // useEffect = run code on a condition in REACT
  useEffect(()=>{
      // const name = promt("Please enter your name");
      setUsername(prompt('Please enter your name'));
  },[])//condition


  const sendMessage = (event)=>{
    event.preventDefault();
    //all the logic to send a message goes here
    setMessages([...messages,input])
    setInput('');
  }

  return (
    <div className="App">
      <h1>Messenger</h1>
  <h2>Welcome {username}</h2>
    <form>
      <FormControl>
        <InputLabel >Enter Message</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)} />
          <Button disabled={!input} variant="contained" color="primary" type="submit" onClick={sendMessage} disableElevation>Send Message</Button>
       </FormControl>
      
    </form>
          {messages.map(message=>(
            <Message text={message}/>
          ))}

      {/* Input field */}
      {/* Send button */}
      {/* View all the messages */}
    </div>
  );
}

export default App;
