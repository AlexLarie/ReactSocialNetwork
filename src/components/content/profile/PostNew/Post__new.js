import React from 'react';
import { addPostActionCreator, newTextChangActionCreator } from '../../../../redax/state';
import classes from './post__new.module.css';

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

const Post__new = (props) => {

   let newPostElemet = React.createRef();

   let newPost = () => {
      props.dispatch(addPostActionCreator());
   }

   let newPostOnChange = () => {
      let newText = newPostElemet.current.value;
      props.dispatch(newTextChangActionCreator(newText));
   }

   return(
      <div className = {classes.content__new}>
         <textarea onChange = {newPostOnChange} placeholder = "Write something and post it!" value = {props.newPostText} ref = {newPostElemet} ></textarea>
         <button onClick = {newPost} className={classes.content__button}>Post it</button> 
      </div>
   )
}

export default Post__new; 