import React from 'react';
import Message from './Message';
import CreateMessage from './CreateMessage';
import './message__list.css';

let messagesData = [
   {id: 1, message: 'Some text whot you write' , name : 'you', time : 'Today at 11:00'  },
   {id: 2, message: 'Some text whot you write' , name : 'Kristina', time : 'Today at 12:50'  },
   {id: 3, message: 'Some text whot you write' , name : 'you', time : 'Today at 11:10'  },
   {id: 4, message: 'Some text whot she answerSome text  whot she answerSome text whot she answerSome text whot she ' , name : 'Kristina', time : 'Today at 11:50'  },
   {id: 5, message: 'Some text whot you write' , name : 'you', time : 'Today at 12:20'  },
   {id: 6, message: 'Some text whot you write' , name : 'you', time : 'Today at 12:50'  },
   {id: 7, message: 'Some text whot she answerSome text  whot she answerSome text whot she answerSome text whot she ' , name : 'Kristina', time : 'Today at 12:55'  },
   {id: 8, message: 'Some text whot you write' , name : 'you', time : 'Today at 12:56' },
]

let messagesList = messagesData.map(item => < Message name = {item.name} text = {item.message} time = {item.time}/>)

const Message__list = (props) => {
   return (
      <div className = 'dialogs__block'>
         <div className = 'prev__messages'>
            {messagesList}
         </div>
         < CreateMessage/>
      </div>
   )
}

export default Message__list;