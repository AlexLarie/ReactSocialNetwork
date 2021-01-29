const ADD_POST = 'ADD-POST';
const NEW_TEXT_CHANGE = 'NEW-TEXT-CHANGE';
const CREATE_NEW_MESSAGE_ITEM = 'CREATE-NEW-MESSAGE-ITEM';
const CHANGE_NEW_MESSAGE = 'CHANGE-NEW-MESSAGE';


let store = {
   _state : {
      newsPage:{
         news: [
            // {name: "Kristina",
            // date: "02.20.02",
            // text: "Some content inside news",
            // likes: "12",
            // comments: [],
            // },
            // {name: "Alfred",
            // date: "04.10.02",
            // text: "Some content content content content content inside news",
            // likes: "122",
            // comments: [],
            // },
            // {name: "Katrin",
            // date: "02.20.02",
            // text: "Some inside news inside news inside news v inside news inside news content inside news",
            // likes: "32",
            // comments: [],
            // },
         ],
      },
      dialogsPage:{
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
      },
      profilePage : {
         posts: [
            
         ],
         newPostText : "",
         lastId : "5"
      }  
   },
   changeLikes (event){
      let id = event.target.nextSibling.getAttribute('id');
      for (let i=0; i<this._state.profilePage.posts.length; i++){
         if (id == this._state.profilePage.posts[i].id){
            this._state.profilePage.posts[i].likes++
         }
      }
      this.rerenderEntireTree(this._state);
   },
   getState(){
      return this._state;
   },
   rerenderEntireTree () {
      console.log('rerender');
   },
   // addPost () {
   //    this._state.profilePage.lastId++
   //    let newPost= {
   //       id: this._state.profilePage.lastId,
   //       name: 'you',
   //       text: this._state.profilePage.newPostText,
   //       likes: '0',
   //       date: Date()
   //    }
   //    this._state.profilePage.posts.push(newPost);
   //    this._state.profilePage.newPostText = '';
   //    this.rerenderEntireTree(this._state);
   // },
   // createNewMessageItem () {
   //    let newMessage = {
   //       id: '3', 
   //       message: this._state.dialogsPage.newMessage, 
   //       name : 'you', 
   //       time :   Date() 
   //    }
   //    this._state.dialogsPage.messages.push(newMessage);
   //    this._state.dialogsPage.newMessage = '';
   //    this.rerenderEntireTree(this._state);
   // },
   // newTextChange(newText){
   //    this._state.profilePage.newPostText=newText;
   //    this.rerenderEntireTree(this._state);
   // },
   // changeNewMessageState(text){
   //    this._state.dialogsPage.newMessage = text;
   //    this.rerenderEntireTree(this._state);
   // },
   subscribe(observer){
      this.rerenderEntireTree = observer;
   },

   dispatch(action){


      if (action.type === ADD_POST){
         this._state.profilePage.lastId++
         let newPost= {
            id: this._state.profilePage.lastId,
            name: 'Aliaksei',
            text: this._state.profilePage.newPostText,
            likes: '0',
            date: Date()
         }
         if (newPost.text != false){
            this._state.profilePage.posts.push(newPost);
            this._state.newsPage.news.push(newPost);
         }
         this._state.profilePage.newPostText = '';
         this.rerenderEntireTree(this._state);


      } else if (action.type === NEW_TEXT_CHANGE){
         this._state.profilePage.newPostText = action.newText;
         this.rerenderEntireTree(this._state);


      } else if (action.type === CREATE_NEW_MESSAGE_ITEM){
         let newMessage = {
            id: '3', 
            message: this._state.dialogsPage.newMessage,
            name : 'you', 
            time :   Date() 
         }
         if (newMessage.message != false){
            this._state.dialogsPage.messages.push(newMessage);
         }
         this._state.dialogsPage.newMessage = '';
         this.rerenderEntireTree(this._state);


      } else if (action.type === CHANGE_NEW_MESSAGE){
         this._state.dialogsPage.newMessage = action.newMessageText;
         this.rerenderEntireTree(this._state);
      }
   }
}



export const addPostActionCreator = () => ({
   type: ADD_POST
})

export const newTextChangActionCreator = (newText) => ({
   type: NEW_TEXT_CHANGE,
   newText: newText
})

export const createMessageItemActionCreator = (newMessageChange)=> ({
   type: CREATE_NEW_MESSAGE_ITEM,
   newMessageChange: newMessageChange
})

export const changeNewMessageStateActionCreator = (text) => ({
   type: CHANGE_NEW_MESSAGE,
   newMessageText: text
})


// let rerenderEntireTree = () => {
//    console.log('rerender');
// }

// let state = {
//    dialogsPage:{
//       messages: [
//          {id: '1', message: 'Some text whot yqou write' , name : 'you', time :   'Today  at 11:00'  },
//          {id: '2', message: 'Some text whot you  write' , name : 'Kristina', time   :    'Today at 12:50'  },
//          {id: '3', message: 'Some text whot yowu write' , name : 'you', time :   'Today  at 11:10'  },
//          {id: '4', message: 'Some text whot she answerSome text  whot she  answerSome   text whot she answerSome text whobt she ' , name :    'Kristina', time : 'Today    at 11:50'  },
//          {id: '5', message: 'Some textr whot you write' , name : 'you', time :   'Today  at 12:20'  },
//          {id: '6', message: 'Some ttext whot you write' , name : 'you', time :   'Today  at 12:50'  },
//          {id: '7', message: 'Some text whot she answerSome text  whot she  answerSome   text whot she answerSome text whot she ' , name :  'Kristina', time : 'Today  at 12:55'  },
//          {id: '8', message: 'Some tetbxt whot you write' , name : 'you', time :     'Today at 12:56' },
//       ],
//       dialogs: [
//          {id : "1",
//          name : "Kristina"},
//          {id : "2",
//          name : "Aliaksei"},
//          {id : "3",
//          name : "Kastus"},
//          {id : "4",
//          name : "Kirill"},
//          {id : "5",
//          name : "Andrey"},
//          {id : "6",
//          name : "Vadim"}, 
//          {id : "7",
//          name : "Vlad"},
//       ],
//    },
//    profilePage : {
//       posts: [
//          { id: '1', name: 'You', text: 'Some text 1', likes: '12'},
//          { id: '2', name: 'You', text: 'Some text 2', likes: '24'},
//          { id: '3', name: 'You', text: 'Some text 3', likes: '28'},
//          { id: '4', name: 'You', text: 'Some text 4', likes: '12'},
//          { id: '5', name: 'You', text: 'Some text 5', likes: '24'},
//       ],
//       newPostText : "",
//    }  
// }

// export const addPost = () => {
//    let newPost= {
//       id: '5',
//       name: 'you',
//       text: state.profilePage.newPostText,
//       likes: '0'
//    }
//    state.profilePage.posts.push(newPost);
//    state.profilePage.newPostText = '';
//    rerenderEntireTree(state);
// }

// export const newTextChange = (newText) => {
//    state.profilePage.newPostText=newText;
//    rerenderEntireTree(state);
// }

// export const subscribe = (observer) => {
//    rerenderEntireTree = observer;
// }


export default store;
