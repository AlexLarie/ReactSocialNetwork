import React from 'react';
import { changeNewMessageStateActionCreator, createMessageItemActionCreator } from '../../../redax/dialogs-reducer';

import './createMessage.css';



const CreateMessage = (props) => {
   let newMessage = React.createRef();

   let createMessage = () => {
      props.dispatch(createMessageItemActionCreator(newMessageChange))
      // props.createNewMessageItem(newMessageChange);
   }

   let newMessageChange = () => {
      let newMessageText = newMessage.current.value;
      props.dispatch(changeNewMessageStateActionCreator(newMessageText))
      // props.changeNewMessageState(newMessageText);
      return newMessageText;
   }

   let enterMessage = (e) => {
      if (e.key == 'Enter' && e.ctrlKey == true){
         createMessage();
      } 
   }

   return (
      <div className = 'new__message'>
         <textarea onKeyUp = {enterMessage} value = {props.newMessage} ref = {newMessage} onChange = {newMessageChange} placeholder = 'Write your message here'/>
         <button onClick = {createMessage}>Submit</button>
      </div>
   )
}

export default CreateMessage;