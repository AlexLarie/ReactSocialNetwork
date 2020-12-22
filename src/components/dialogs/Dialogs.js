import React from 'react';
import classes from './dialogs.module.css';
import Sender from './Sender/Sender';
import Message from './Messages/Message';
import CreateMessage from './Messages/CreateMessage';


const Dialogs = () => {
   return (
      <div className = {classes.dialogs}>
         <span className = {classes.title}>
            Dialogs
         </span>
         <div className = {classes.dialogs__wrapper}>
            <div className = {classes.dialogs__senders}>
               < Sender name = 'Kristina Lomonosova'/>
               < Sender name = 'Aliaksei Belou'/>
               < Sender name = 'Kastus Kalinouski'/>
            </div>
            <div className = {classes.dialogs__block}>
               <div className = {classes.message}>
                  < Message name = 'You' text = 'Some text whot you write' time = 'Today at 12:40'/>
                  < Message name = 'Kristina' text = 'Some text whot she answer' time = 'Today at 12:50'/>
                  < Message name = 'Kristina' text = 'Some text whot she answerSome text whot she answerSome text whot she answerSome text whot she answer' time = 'Today at 12:50'/>
                  < Message name = 'Kristina' text = 'Some text whot she answer' time = 'Today at 12:50'/>
                  < Message name = 'Kristina' text = 'Some text whot she answer' time = 'Today at 12:50'/>
               </div>
               < CreateMessage/>
            </div>
         </div>
      </div>
   )
}

export default Dialogs;