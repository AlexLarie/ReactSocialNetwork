import React from 'react';
import './sender.css';
import { NavLink } from "react-router-dom";

const Sender = (props) => {
   return (
      <NavLink to = {'/dialogs/' + props.id} className = 'sender__wrapper'>
         <div className = 'sender__avatar'>
            <img src = "https://via.placeholder.com/50" alt = "avatar" />
         </div>
         <div className = 'sender__name'>
            <span className = 'sender__name'>{props.name}</span> 
         </div>
      </NavLink>
   )
}

export default Sender;