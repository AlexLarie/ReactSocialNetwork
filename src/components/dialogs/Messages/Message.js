import React from 'react';
import './message.css';

const Message = (props) => {
   return(
      <div className = 'message__wrapper'>
         <div className = 'message__avatar'>
            <img src = "https://via.placeholder.com/50" alt = "avatar" />
            <span>{props.name}</span>
            <span className = 'message__time'>{props.time}</span>
         </div>
         <div className = 'message__text'>
            <p className = 'message__p'>{props.text}</p> 
         </div>
      </div>
   )
}

export default Message;