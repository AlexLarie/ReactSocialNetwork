import React from 'react';
import './sender.css';

const Sender = (props) => {
   return (
      <div className = 'sender__wrapper'>
         <div className = 'sender__avatar'>
            <img src = "https://via.placeholder.com/50" alt = "avatar" />
         </div>
         <div className = 'sender__name'>
            <span className = 'sender__name'>{props.name}</span> 
         </div>
      </div>
   )
}

export default Sender;