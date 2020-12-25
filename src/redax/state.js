import { rerenderEntireTree } from "./render";

let state = {
   dialogsPage:{
      messages: [
         {id: '1', message: 'Some text whot yqou write' , name : 'you', time :   'Today  at 11:00'  },
         {id: '2', message: 'Some text whot you  write' , name : 'Kristina', time   :    'Today at 12:50'  },
         {id: '3', message: 'Some text whot yowu write' , name : 'you', time :   'Today  at 11:10'  },
         {id: '4', message: 'Some text whot she answerSome text  whot she  answerSome   text whot she answerSome text whobt she ' , name :    'Kristina', time : 'Today    at 11:50'  },
         {id: '5', message: 'Some textr whot you write' , name : 'you', time :   'Today  at 12:20'  },
         {id: '6', message: 'Some ttext whot you write' , name : 'you', time :   'Today  at 12:50'  },
         {id: '7', message: 'Some text whot she answerSome text  whot she  answerSome   text whot she answerSome text whot she ' , name :  'Kristina', time : 'Today  at 12:55'  },
         {id: '8', message: 'Some tetbxt whot you write' , name : 'you', time :     'Today at 12:56' },
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
   },
   profilePage : {
      posts: [
         { id: '1', name: 'You', text: 'Some text 1', likes: '12'},
         { id: '2', name: 'You', text: 'Some text 2', likes: '24'},
         { id: '3', name: 'You', text: 'Some text 3', likes: '28'},
         { id: '4', name: 'You', text: 'Some text 4', likes: '12'},
         { id: '5', name: 'You', text: 'Some text 5', likes: '24'},
      ],
      newPostText : "",
   }  
}

export let addPost = () => {
   let newPost= {
      id: '5',
      name: 'you',
      text: state.profilePage.newPostText,
      likes: '0'
   }
   state.profilePage.posts.push(newPost);
   state.profilePage.newPostText = '';
   rerenderEntireTree(state);
}

export let newTextChange = (newText) => {
   state.profilePage.newPostText=newText;
   rerenderEntireTree(state);
}


export default state;