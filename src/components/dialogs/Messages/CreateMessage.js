import React from 'react';
import './createMessage.css';

const CreateMessage = () => {
   let newMessage = React.createRef();

   let createMessage = () => {
      let message = newMessage.current.value;
      alert (message);
   }

   return (
      <div className = 'new__message'>
         <textarea ref = {newMessage} placeholder = 'Write your message here'/>
         <button onClick = {createMessage}>Submit</button>
      </div>
   )
}

export default CreateMessage;