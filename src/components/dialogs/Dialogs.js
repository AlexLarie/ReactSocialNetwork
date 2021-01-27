import React from 'react';
import classes from './dialogs.module.css';
import Sender from './Sender/Sender';
import MessageList from './Messages/MessageList';


const Dialogs = (props) => {
   let Senders = props.data.dialogs.map(item => <Sender name = {item.name} id = {item.id}/>)
   return (
      <div className = {classes.dialogs}>
         <span className = {classes.title}>
            Dialogs
         </span>
         <div className = {classes.dialogs__wrapper}>
            <div className = {classes.dialogs__senders}>
               {Senders}
            </div>
            <MessageList createNewMessageItem = {props.createNewMessageItem} changeNewMessageState = {props.changeNewMessageState} messages = {props.data.messages} newMessage = {props.data.newMessage}/>
         </div>
      </div>
   )
}

export default Dialogs;