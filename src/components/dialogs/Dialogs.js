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
            <MessageList messages = {props.data.messages}/>
         </div>
      </div>
   )
}

export default Dialogs;