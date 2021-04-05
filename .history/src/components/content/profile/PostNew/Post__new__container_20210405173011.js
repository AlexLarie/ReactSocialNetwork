import React from 'react';
import { addPostActionCreator, newTextChangActionCreator } from '../../../../redax/profile-reducer';
import Post__new from './Post__new';


// let addPostActionCreator = () => {
//    return {
//       type: 'ADD-POST'
//    }
// }

// let newTextChangActionCreator = (newText) => {
//    return {
//       type: 'NEW-TEXT-CHANGE',
//       newText: newText
//    }
// }

const Post__new__container = (props) => {

   let newPost = () => {
      // props.addPost();
      props.dispatch(addPostActionCreator());
   }

   let newPostChange = (newText) => {
      props.updateNewPostText(newText);
      //props.dispatch(newTextChangActionCreator(newText));
   }

   return(
      <Post__new newPost = {newPost} newPostChange = {newPostChange} newPostText = {props.newPostText}/>
   )
}

export default Post__new__container; 