import React from 'react';
import classes from './post__new.module.css';

const Post__new = () => {
   return(
      <div className = {classes.content__new}>
         <textarea placeholder = "Write something and post it!"></textarea>
         <button className={classes.content__button}>Post it</button>
      </div>
   )
}

export default Post__new; 