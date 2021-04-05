import React from 'react';

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
      //props.dispatch(addPostActionCreator());
      props.newPost()
   }

   let newPostOnChange = () => {
      let newText = newPostElemet.current.value;
      props.newPostChange(newText);
      //props.dispatch(newTextChangActionCreator(newText));
   }

   return(
      <div className = {classes.content__new}>
         <textarea onChange = {props.newPostChange} placeholder = "Write something and post it!" value = {props.newPostText} ref = {newPostElemet} ></textarea>
         <button onClick = {props.newPost} className={classes.content__button}>Post it</button> 
      </div>
   )
}

export default Post__new; 