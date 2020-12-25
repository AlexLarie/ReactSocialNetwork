import React from 'react';
import classes from './post__new.module.css';


const Post__new = (props) => {

   let newPostElemet = React.createRef();

   let newPost = () => {
      props.addPost();
   }

   let newPostOnChange = () => {
      let newText = newPostElemet.current.value;
      props.newTextChange(newText);
   }

   return(
      <div className = {classes.content__new}>
         <textarea onChange = {newPostOnChange} placeholder = "Write something and post it!" value = {props.newPostText} ref = {newPostElemet} ></textarea>
         <button onClick = {newPost} className={classes.content__button}>Post it</button> 
      </div>
   )
}

export default Post__new; 