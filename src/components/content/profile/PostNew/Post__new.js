import React from 'react';
import classes from './post__new.module.css';

let newPostElemet = React.createRef();

let addPost = () => {
   let newPost = newPostElemet.current.value;
   alert(newPost)
}

const Post__new = () => {
   return(
      <div className = {classes.content__new}>
         <textarea ref = {newPostElemet}  placeholder = "Write something and post it!"></textarea>
         <button onClick = {addPost} className={classes.content__button}>Post it</button>
      </div>
   )
}

export default Post__new; 