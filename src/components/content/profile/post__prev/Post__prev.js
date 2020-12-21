import React from 'react';
import PrevItem from './prev__item/Prev__item';
import classes from './post__prev.module.css';

const Post__prev = () => {
   return (
      <div className = {classes.prev}>
         <PrevItem text = 'Some text 1' likes = '12'/>
         <PrevItem text = 'Some text 2' likes = '18'/>
         <PrevItem text = 'Some text 3' likes = '28'/>
      </div>
   )
}

export default Post__prev;