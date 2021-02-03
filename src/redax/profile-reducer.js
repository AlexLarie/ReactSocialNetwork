const ADD_POST = 'ADD-POST';
const NEW_TEXT_CHANGE = 'NEW-TEXT-CHANGE';

const profileReducer = (state, action) => {
   
   switch (action.type) {
      case ADD_POST:
         state.lastId++
         let newPost= {
            id: state.lastId,
            name: 'Aliaksei',
            text: state.newPostText,
            likes: '0',
            date: Date()
         }
         if (newPost.text != false){
            state.posts.push(newPost);
            // this._state.newsPage.news.push(newPost);
         }
         state.newPostText = '';
         break;
   
      case NEW_TEXT_CHANGE:
         state.newPostText = action.newText;
         break;
      default: 
         return state;
   }

   // if (action.type === ADD_POST){
   //    state.lastId++
   //    let newPost= {
   //       id: state.lastId,
   //       name: 'Aliaksei',
   //       text: state.newPostText,
   //       likes: '0',
   //       date: Date()
   //    }
   //    if (newPost.text != false){
   //       state.posts.push(newPost);
   //       // this._state.newsPage.news.push(newPost);
   //    }
   //    state.newPostText = '';



   // } else if (action.type === NEW_TEXT_CHANGE){
   //    state.newPostText = action.newText;
   // }

   return state;
}

export const addPostActionCreator = () => ({
   type: ADD_POST
})

export const newTextChangActionCreator = (newText) => ({
   type: NEW_TEXT_CHANGE,
   newText: newText
})


export default profileReducer