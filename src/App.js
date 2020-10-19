import React,{useState,useEffect} from 'react';
import { Button,FormControl,Input,InputLabel } from '@material-ui/core';
import './App.css';
import Message from './Message'
import db from './firebase.js'
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import {IconButton} from '@material-ui/core';
function App() {
  //Initialise the state, example of react hook
  const [input,setInput] = useState('');
  const [messages,setMessages] = useState([]);
  const [username,setUsername] = useState('');
 
  useEffect(()=>{
    //run once when the app component loads
    db.collection('messages').orderBy('timestamp','desc').onSnapshot(snapshot =>{
      setMessages(snapshot.docs.map(doc=>({id:doc.id,message:doc.data()})))
    })
  },[]);
  // useState=variable in REACT
  // useEffect = run code on a condition in REACT
  useEffect(()=>{
      // const name = promt("Please enter your name");
      setUsername(prompt('Please enter your name'));
  },[])//condition


  const sendMessage = (event)=>{
    event.preventDefault();

    db.collection('messages').add({
      message:input,
      username:username,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
    })
    //all the logic to send a message goes here
    // setMessages([...messages,{username :username, text: input}])
    setInput('');
  }

  return (
    <div className="App">
      <h1>Messenger</h1>
  <h2>Welcome {username}</h2>
    <form className="app__form">
      <FormControl className="app__formControl">
          <Input className="app__input" placeholder="Enter a message"value={input} onChange={event => setInput(event.target.value)} />
          
          <IconButton className="app__iconButton"
          disabled={!input} variant="contained" color="primary" type="submit" onClick={sendMessage} disableElevation>
          <SendIcon/>
          </IconButton>
       </FormControl>
      
    </form>
    <FlipMove>        
        {messages.map(({id,message})=>(
            <Message key={id} username={username} message={message}/>
          ))}
    </FlipMove>

      {/* Input field */}
      {/* Send button */}
      {/* View all the messages */}
    </div>
  );
}

export default App;
