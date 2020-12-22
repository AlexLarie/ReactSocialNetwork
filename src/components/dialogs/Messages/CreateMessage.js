import React from 'react';
import './createMessage.css';

const CreateMessage = () => {
   return (
      <div className = 'new__message'>
         <textarea placeholder = 'Write your message here'/>
         <button>Submit</button>
      </div>
   )
}

export default CreateMessage;