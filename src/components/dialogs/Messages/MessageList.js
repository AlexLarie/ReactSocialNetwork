import React from 'react';
import Message from './Message';
import CreateMessage from './CreateMessage';
import './message__list.css';


const MessageList = (props) => {
   let messagesList = props.messages.map(item => < Message name = {item.name} text = {item.message} time = {item.time}/>)
   return (
      <div className = 'dialogs__block'>
         <div className = 'prev__messages'>
            {messagesList}
         </div>
         < CreateMessage/>
      </div>
   )
}

export default MessageList;