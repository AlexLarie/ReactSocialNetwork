import React from 'react';
import classes from './dialogs.module.css';
import Sender from './Sender/Sender';
import Message__list from './Messages/Message__list';


let dialogsData = [
   {id : "1",
   name : "Kristina"},
   {id : "2",
   name : "Aliaksei"},
   {id : "3",
   name : "Kastus"},
]

let Senders = dialogsData.map(item => <Sender name = {item.name} id = {item.id}/>)


const Dialogs = () => {
   return (
      <div className = {classes.dialogs}>
         <span className = {classes.title}>
            Dialogs
         </span>
         <div className = {classes.dialogs__wrapper}>
            <div className = {classes.dialogs__senders}>
               {Senders}
            </div>
            <Message__list/>
         </div>
      </div>
   )
}

export default Dialogs;