import React from 'react';
import './createMessage.css';



const CreateMessage = (props) => {
   let newMessage = React.createRef();

   let createMessage = () => {
      props.createNewMessageItem(newMessageChange);
   }

   let newMessageChange = () => {
      let newMessageText = newMessage.current.value;
      props.changeNewMessageState(newMessageText);
      return newMessageText;
   }
   return (
      <div className = 'new__message'>
         <textarea value = {props.newMessage} ref = {newMessage} onChange = {newMessageChange} placeholder = 'Write your message here'/>
         <button onClick = {createMessage}>Submit</button>
      </div>
   )
}

export default CreateMessage;