const CREATE_NEW_MESSAGE_ITEM = 'CREATE-NEW-MESSAGE-ITEM';
const CHANGE_NEW_MESSAGE = 'CHANGE-NEW-MESSAGE';

let initialState = {
   messages: [
      
   ],
   dialogs: [
      {id : "1",
      name : "Kristina"},
      {id : "2",
      name : "Aliaksei"},
      {id : "3",
      name : "Kastus"},
      {id : "4",
      name : "Kirill"},
      {id : "5",
      name : "Andrey"},
      {id : "6",
      name : "Vadim"},
      {id : "7",
      name : "Vlad"},
   ],
   newMessage : "",
}

const dialogsReducer = (state = initialState, action) => {


   switch (action.type) {
      case CREATE_NEW_MESSAGE_ITEM:
         let newMessage = {
            id: '3', 
            message: state.newMessage,
            name : 'you', 
            time :   Date() 
         }
         if (newMessage.message != false){
            state.messages.push(newMessage);
         }
         state.newMessage = '';
         break;
   
      case CHANGE_NEW_MESSAGE:
         state.newMessage = action.newMessageText;
         break;
      
      default: 
         return state;
   }

   // if (action.type === CREATE_NEW_MESSAGE_ITEM){
   //    let newMessage = {
   //       id: '3', 
   //       message: state.newMessage,
   //       name : 'you', 
   //       time :   Date() 
   //    }
   //    if (newMessage.message != false){
   //       state.messages.push(newMessage);
   //    }
   //    state.newMessage = '';
   //    // this.rerenderEntireTree(this._state);


   // } else if (action.type === CHANGE_NEW_MESSAGE){
   //    state.newMessage = action.newMessageText;
   //    // this.rerenderEntireTree(this._state);
   // }
   
   return state
}

export const createMessageItemActionCreator = (newMessageChange)=> ({
   type: CREATE_NEW_MESSAGE_ITEM,
   newMessageChange: newMessageChange
})

export const changeNewMessageStateActionCreator = (text) => ({
   type: CHANGE_NEW_MESSAGE,
   newMessageText: text
})

export default dialogsReducer